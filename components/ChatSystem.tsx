
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubbleOvalLeftEllipsisIcon, PaperAirplaneIcon, XMarkIcon } from './icons';
import { streamChatResponse } from '../services/geminiService';
import { ChatMessage, GroundingChunk } from '../types';

export interface FloatingChatButtonProps {
  onOpen: () => void;
}

export const FloatingChatButton: React.FC<FloatingChatButtonProps> = ({ onOpen }) => {
  return (
    <motion.button
      {...{
        onClick: onOpen,
        className: "fixed bottom-6 left-6 text-nexusbyte-primary-dark p-4 rounded-full shadow-xl hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-nexusbyte-accent-green focus:ring-opacity-50 z-50",
        style: { backgroundColor: '#a8b545' },
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.95 },
        "aria-label": "Open chat",
      } as any}
    >
      <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8" />
    </motion.button>
  );
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isOverallLoading, setIsOverallLoading] = useState(false); // Renamed from isLoading
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  },[]);

  useEffect(scrollToBottom, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'initial-greeting',
          text: "Hello! I'm Nova, the NexusByte AI Assistant. How can I help you today regarding our ICT solutions, AI, cloud services, or cybersecurity?",
          sender: 'bot',
          timestamp: new Date(),
          isLoading: false,
        },
      ]);
    }
  }, [isOpen, messages.length]);


  const handleSendMessage = useCallback(async () => {
    if (inputValue.trim() === '' || isOverallLoading) return;
    
    const userMessageText = inputValue;
    const newUserMessage: ChatMessage = {
      id: `user-modal-${Date.now()}`,
      text: userMessageText,
      sender: 'user',
      timestamp: new Date(),
    };

    const botMessageId = `bot-modal-${Date.now()}`;
    const thinkingBotMessage: ChatMessage = {
      id: botMessageId,
      text: '', // Initially empty
      sender: 'bot',
      timestamp: new Date(),
      isLoading: true,
    };
    
    setMessages(prev => [...prev, newUserMessage, thinkingBotMessage]);
    
    setInputValue('');
    setIsOverallLoading(true);

    const historyForGemini = messages.map(({isLoading, ...msg}) => msg); 

    let botResponseTextAccumulated = '';
    let finalGroundingChunks: GroundingChunk[] | undefined = undefined;
    
    try {
      for await (const chunk of streamChatResponse(userMessageText, historyForGemini)) {
        if (chunk.error) {
          botResponseTextAccumulated = chunk.error; 
          setMessages(prev =>
            prev.map(msg =>
              msg.id === botMessageId ? { ...msg, text: botResponseTextAccumulated, groundingChunks: undefined, isLoading: false } : msg
            )
          );
          break; 
        }
        if (chunk.text) {
          botResponseTextAccumulated += chunk.text;
        }
        if (chunk.groundingChunks && chunk.groundingChunks.length > 0) {
           finalGroundingChunks = chunk.groundingChunks;
        }
        
        setMessages(prev =>
            prev.map(msg =>
              msg.id === botMessageId ? { ...msg, text: botResponseTextAccumulated, groundingChunks: finalGroundingChunks, isLoading: false } : msg
            )
        );

        if (chunk.isFinalChunk) {
            if (finalGroundingChunks && finalGroundingChunks.length > 0) {
                const sourceLinksText = finalGroundingChunks
                    .map(gc => gc.web ? `\n- [${gc.web.title || gc.web.uri}](${gc.web.uri})` : '')
                    .filter(Boolean)
                    .join('');
                if (sourceLinksText) {
                    const fullTextWithSources = `${botResponseTextAccumulated}\n\n**Sources:**${sourceLinksText}`;
                    setMessages(prev =>
                        prev.map(msg =>
                            msg.id === botMessageId ? { ...msg, text: fullTextWithSources, groundingChunks: finalGroundingChunks, isLoading: false } : msg
                        )
                    );
                }
            }
        }
      }
    } catch (error) {
        console.error("Streaming error in component:", error);
        setMessages(prev => prev.map(msg => msg.id === botMessageId ? {...msg, text: "Sorry, I couldn't process that response fully.", isLoading: false} : msg));
    } finally {
        setIsOverallLoading(false);
    }
  }, [inputValue, isOverallLoading, messages]);


  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const parseAndRenderText = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const boldRegex = /\*\*([^*]+)\*\*/g;
    
    let parts = text.split(linkRegex);
    let elements: (string | React.ReactNode)[] = [];

    for (let i = 0; i < parts.length; i++) {
        if (i % 3 === 0) { 
            let subParts = parts[i].split(boldRegex);
            for (let j = 0; j < subParts.length; j++) {
                if (j % 2 === 0) {
                    elements.push(subParts[j]);
                } else {
                    elements.push(<strong key={`bold-modal-${Date.now()}-${i}-${j}`}>{subParts[j]}</strong>);
                }
            }
        } else if (i % 3 === 1) { 
            const title = parts[i];
            const url = parts[i+1];
            elements.push(
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline" key={`link-modal-${Date.now()}-${i}`}>
                    {title}
                </a>
            );
            i++; 
        }
    }
    return elements.map((el, idx) => <React.Fragment key={idx}>{el}</React.Fragment>);
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          {...{
            className: "fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center p-0 sm:p-4 z-[60]",
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            variants: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
            transition: { duration: 0.2 },
            onClick: onClose,
          } as any}
        >
          <motion.div
            {...{
              className: "bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-lg h-[85vh] sm:h-[80vh] flex flex-col overflow-hidden",
              variants: modalVariants,
              transition: { duration: 0.3, ease: 'easeOut' },
              onClick: (e: React.MouseEvent) => e.stopPropagation(),
            } as any}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-nexusbyte-primary-dark text-white">
              <h3 className="text-lg font-semibold">NexusByte AI Assistant</h3>
              <button onClick={onClose} className="text-gray-300 hover:text-white">
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-grow p-4 space-y-4 overflow-y-auto chat-modal-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-xl shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-nexusbyte-accent-green text-nexusbyte-primary-dark rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                   {msg.sender === 'bot' && msg.isLoading ? (
                    <div className="text-sm italic">Nova is thinking...</div>
                    ) : (
                      <div className="text-sm whitespace-pre-wrap">{parseAndRenderText(msg.text)}</div>
                    )}
                    {!(msg.sender === 'bot' && msg.isLoading) && (
                        <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-right text-gray-700 opacity-80' : 'text-left text-gray-500'}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-nexusbyte-accent-green focus:border-transparent outline-none transition-shadow text-sm"
                  disabled={isOverallLoading}
                />
                <button
                  type="submit"
                  className="p-3 bg-nexusbyte-accent-green text-nexusbyte-primary-dark rounded-full hover:bg-opacity-90 disabled:opacity-50 transition-colors"
                  disabled={isOverallLoading}
                  aria-label="Send message"
                >
                  <PaperAirplaneIcon className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


const ChatSystem: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      <FloatingChatButton onOpen={() => setIsChatOpen(true)} />
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
export default ChatSystem;

export const useChatControl = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const openChat = () => setIsChatOpen(true);
    const closeChat = () => setIsChatOpen(false);
    return { isChatOpen, openChat, closeChat, ChatModalComponent: ChatModal };
}
