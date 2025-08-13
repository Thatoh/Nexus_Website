import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router"

const QuoteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
  </svg>
)

const testimonials = [
  {
    quote:
      "This service completely transformed our business operations. The results exceeded our expectations in every way.",
    name: "Sarah Johnson",
    company: "TechFlow Solutions",
  },
  {
    quote:
      "Outstanding support and incredible attention to detail. I couldn't be happier with the partnership we've built.",
    name: "Michael Chen",
    company: "Digital Dynamics",
  },
  {
    quote: "The team's expertise and dedication made all the difference. Our ROI improved by 300% in just six months.",
    name: "Emily Rodriguez",
    company: "Growth Partners",
  },
]

const FloatingCircle = ({ size, left, top, delay }: { size: number; left: string; top: string; delay: number }) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-sm"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      left,
      top,
    }}
    animate={{
      y: [0, -20, 0],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
)

export default function TestimonialsSection() {
  const [review, setReview] = useState("")
  const [showAuthPrompt, setShowAuthPrompt] = useState(false)

  const handleSubmitReview = () => {
    if (review.trim()) {
      setShowAuthPrompt(true)
    }
  }



  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4 overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingCircle size={120} left="10%" top="15%" delay={0} />
        <FloatingCircle size={80} left="25%" top="8%" delay={0.5} />
        <FloatingCircle size={60} left="45%" top="12%" delay={1} />
        <FloatingCircle size={100} left="70%" top="10%" delay={1.5} />
        <FloatingCircle size={40} left="85%" top="20%" delay={2} />
        <FloatingCircle size={90} left="15%" top="45%" delay={2.5} />
        <FloatingCircle size={70} left="35%" top="55%" delay={3} />
        <FloatingCircle size={110} left="60%" top="50%" delay={3.5} />
        <FloatingCircle size={50} left="80%" top="60%" delay={4} />
        <FloatingCircle size={85} left="20%" top="75%" delay={4.5} />
        <FloatingCircle size={65} left="50%" top="80%" delay={5} />
        <FloatingCircle size={95} left="75%" top="85%" delay={5.5} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say about their experience.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-8">
                <QuoteIcon className="w-8 h-8 text-blue-500 mb-4" />
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Submit Review Section */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Submit a Review</h3>
              <p className="text-gray-600 text-center mb-6">
                Share your experience and help others discover our services
              </p>

              <div className="space-y-4">
                <textarea
                  placeholder="Tell us about your experience..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full min-h-[120px] resize-none border border-gray-200 rounded-lg p-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                />
                                  <button
                    onClick={handleSubmitReview}
                    className="inline-flex items-center px-6 py-2.5 bg-nexusbyte-accent-green hover:bg-opacity-80 text-nexusbyte-primary-dark font-semibold text-base transition-all duration-300 transform hover:scale-105 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    disabled={!review.trim()}
                  >
                    Submit
                  </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Auth Prompt Modal */}
        {showAuthPrompt && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              className="bg-white max-w-md w-full rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sign in to Submit Review</h3>
                <p className="text-gray-600 mb-8">Please sign in or create an account to submit your review</p>
                                 <div className="space-y-3">
                   <Link
                     to="/signin"
                     className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors inline-block text-center"
                     onClick={() => setShowAuthPrompt(false)}
                   >
                     Sign In
                   </Link>
                   <Link
                     to="/signup"
                     className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 rounded-lg transition-colors inline-block text-center"
                     onClick={() => setShowAuthPrompt(false)}
                   >
                     Sign Up
                   </Link>
                   <button
                     onClick={() => setShowAuthPrompt(false)}
                     className="w-full text-gray-500 hover:text-gray-700 font-semibold py-3 transition-colors"
                   >
                     Cancel
                   </button>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
