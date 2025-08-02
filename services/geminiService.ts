import { GoogleGenAI, Chat, GenerateContentResponse, Part, Content } from "@google/genai";
import { ChatMessage, GroundingChunk, GenerateContentResponseWithGrounding, SuggestedDomain } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Chatbot and AI suggestion functionalities will be limited or non-functional.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! }); // API_KEY can be undefined if not set.

const SYSTEM_INSTRUCTION_CHATBOT = "You are NexusByte's helpful AI assistant. Your name is Nova. Be friendly, professional, and informative about NexusByte's ICT solutions, AI, cloud services, cybersecurity, and hybrid work environments. If asked about specific pricing or highly detailed technical specifications not commonly available, suggest contacting a NexusByte sales representative or support. If asked a question that may benefit from recent information (like current events, news, or rapidly evolving tech topics), use Google Search to ground your answer and provide up-to-date details. Always cite your sources if you use search by listing the URLs. When providing URLs, ensure they are accessible and clearly indicate they are sources.";


export const generateChatResponse = async (
  prompt: string,
  history: ChatMessage[]
): Promise<{ text: string; groundingChunks?: GroundingChunk[] }> => {
  if (!API_KEY) {
    return { text: "I'm sorry, my connection to the knowledge base is currently unavailable. Please ensure the API key is configured and try again later." };
  }

  const geminiHistory: Content[] = history.map(msg => ({
    role: msg.sender === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }],
  }));
  
  const chat = ai.chats.create({ 
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_CHATBOT,
        tools: [{googleSearch: {}}]
      },
      history: geminiHistory,
    });

  try {
    const result: GenerateContentResponse = await chat.sendMessage({ message: prompt });
    const responseText = result.text;
    
    const typedResponse = result as unknown as GenerateContentResponseWithGrounding;
    const groundingChunks = typedResponse.candidates?.[0]?.groundingMetadata?.groundingChunks;

    return { text: responseText, groundingChunks };

  } catch (error) {
    console.error("Error generating chat response from Gemini:", error);
    if (error instanceof Error && error.message.includes('API key not valid')) {
       return { text: "There seems to be an issue with the API configuration. Please contact support." };
    }
    if (error instanceof Error && error.message.includes('quota')) {
      return { text: "I'm experiencing high demand right now. Please try again in a few moments." };
    }
    return { text: "I encountered an issue while processing your request. Please try again." };
  }
}

export const streamChatResponse = async function* (
  prompt: string,
  history: ChatMessage[]
): AsyncGenerator<{ text?: string; error?: string; groundingChunks?: GroundingChunk[]; isFinalChunk?: boolean }> {
  if (!API_KEY) {
    yield { error: "API connection unavailable. Please ensure the API key is configured.", isFinalChunk: true };
    return;
  }
  
  const geminiHistory: Content[] = history.map(msg => ({
    role: msg.sender === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }],
  }));

  const currentChatInstance = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_CHATBOT,
        tools: [{googleSearch: {}}]
      },
      history: geminiHistory,
  });

  let fullResponseText = "";
  let finalGroundingChunks: GroundingChunk[] | undefined = undefined;

  try {
    const stream = await currentChatInstance.sendMessageStream({ message: prompt });
    for await (const chunk of stream) { 
      const currentTextChunk = chunk.text;
      fullResponseText += currentTextChunk; 
      
      const typedChunk = chunk as unknown as GenerateContentResponseWithGrounding;
      if (typedChunk.candidates?.[0]?.groundingMetadata?.groundingChunks) {
        finalGroundingChunks = typedChunk.candidates[0].groundingMetadata.groundingChunks;
      }
      yield { text: currentTextChunk, groundingChunks: finalGroundingChunks };
    }
    yield { text: '', groundingChunks: finalGroundingChunks, isFinalChunk: true };

  } catch (error) {
    console.error("Error streaming chat response from Gemini:", error);
    let errorMessage = "An error occurred while streaming the response.";
    if (error instanceof Error && error.message.includes('API key not valid')) {
       errorMessage = "There seems to be an issue with the API configuration. Please contact support.";
    } else if (error instanceof Error && error.message.includes('quota')) {
      errorMessage = "I'm experiencing high demand right now. Please try again in a few moments.";
    }
    yield { error: errorMessage, isFinalChunk: true };
  }
}

export const generateDomainSuggestions = async (
  baseDomain: string,
  availabilityStatus: string
): Promise<SuggestedDomain[] | null> => {
  if (!API_KEY) {
    console.warn("Gemini API key not available. Cannot fetch domain suggestions.");
    return null;
  }

  const prompt = `The user is searching for the domain name '${baseDomain}'. Our system indicates its current simulated availability status is: '${availabilityStatus}'.

Please act as a creative domain name suggestion tool. Generate 5 unique and brandable alternative domain name ideas.
Consider these points:
1.  If '${baseDomain}' is taken, suggest names that are distinctly different but might serve a similar purpose, or clever variations.
2.  If '${baseDomain}' is available, still suggest attractive alternatives or common related TLDs.
3.  Include a mix of common TLDs (like .com, .net, .org) and newer/specialty TLDs (like .io, .ai, .app, .store, .tech, .co, .xyz).
4.  The suggestions should sound like they *could* be available.
5.  Focus on short, memorable, and professional-sounding names. Avoid names that are too long or complex.

Provide the output as a JSON array of objects. Each object in the array should have two properties:
- 'name': The main part of the domain (e.g., 'nexusbyte', 'coolstartup').
- 'tld': The top-level domain including the dot (e.g., '.com', '.io', '.ai').

Example for a taken domain 'supercool.com':
[
  { "name": "getsupercool", "tld": ".app" },
  { "name": "supercoolnow", "tld": ".io" },
  { "name": "thesupercool", "tld": ".co" },
  { "name": "supercoolhq", "tld": ".store" },
  { "name": "supercool", "tld": ".tech" }
]

Example for an available domain 'freshidea.com':
[
  { "name": "freshidea", "tld": ".net" },
  { "name": "freshidea", "tld": ".org" },
  { "name": "myfreshidea", "tld": ".app" },
  { "name": "freshideahub", "tld": ".io" },
  { "name": "thefreshidea", "tld": ".store" }
]

Now, generate suggestions for '${baseDomain}' which is '${availabilityStatus}'.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    let jsonStr = response.text.trim();
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = jsonStr.match(fenceRegex);
    if (match && match[2]) {
      jsonStr = match[2].trim();
    }
    
    const parsedData = JSON.parse(jsonStr);

    if (Array.isArray(parsedData) && parsedData.every(item => typeof item.name === 'string' && typeof item.tld === 'string')) {
      return parsedData as SuggestedDomain[];
    } else {
      console.error("Gemini response for domain suggestions is not in the expected format:", parsedData);
      return null;
    }
  } catch (error) {
    console.error("Error generating domain suggestions from Gemini:", error);
    return null;
  }
}