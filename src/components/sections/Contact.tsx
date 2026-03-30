import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  
  // Clean state management
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Professional UX Toast Handler
  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000);
  };

  // Core Form Validation
  const validateForm = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      showToast("Please fill in all required fields.", "error");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      showToast("Please enter a valid email address.", "error");
      return false;
    }
    return true;
  };

  // Secure Async Email Submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Aman Shaikh",
          from_email: form.email,
          to_email: "amaanshaikh.711@gmail.com", // Generic fallback mapped in your UI
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      showToast("Message sent successfully!", "success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setLoading(false);
      showToast("Failed to send message. Please try again later.", "error");
    }
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row relative">
      
      {/* Dynamic Toast Notification (Scaling & Fading Animation) */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-0 right-0 z-50 px-6 py-4 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border flex items-center gap-3 backdrop-blur-md ${
              toast.type === "success" 
                ? "bg-[#0a2f1c]/80 border-green-500/50 text-green-100" 
                : "bg-[#3a0d16]/80 border-red-500/50 text-red-100"
            }`}
          >
            {toast.type === "success" ? (
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            ) : (
              <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )}
            <p className="font-medium text-[15px]">{toast.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-[#100d25] flex-[0.75] rounded-2xl p-8 border border-white/5 shadow-2xl relative overflow-hidden"
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mb-2 font-semibold">Get in touch</p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] leading-tight">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 relative z-10"
        >
          {/* Flat, explicit native fields mapped strictly to UI elements */}
          <label className="flex flex-col gap-3">
            <span className="font-medium text-white tracking-wide">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#151030] placeholder:text-secondary rounded-lg border border-white/5 px-6 py-4 font-medium text-white outline-none focus:border-[#915EFF]/50 focus:bg-[#151030]/80 transition-all duration-300"
            />
          </label>

          <label className="flex flex-col gap-3">
            <span className="font-medium text-white tracking-wide">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-[#151030] placeholder:text-secondary rounded-lg border border-white/5 px-6 py-4 font-medium text-white outline-none focus:border-[#915EFF]/50 focus:bg-[#151030]/80 transition-all duration-300"
            />
          </label>

          <label className="flex flex-col gap-3">
            <span className="font-medium text-white tracking-wide">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#151030] placeholder:text-secondary rounded-lg border border-white/5 px-6 py-4 font-medium text-white outline-none focus:border-[#915EFF]/50 focus:bg-[#151030]/80 transition-all duration-300 resize-none"
            />
          </label>

          {/* Secure UX Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-fit rounded-xl px-10 py-4 font-bold text-white shadow-md transition-all duration-300 ${
              loading 
                ? "bg-[#151030] text-white/50 cursor-not-allowed border border-white/10" 
                : "bg-[#915EFF] hover:bg-[#7e4ce6]"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-[650px] xl:flex-1 relative z-0"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
