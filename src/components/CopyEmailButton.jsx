import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "kaustav.mani.deka@aus.ac.in";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="cursor-pointer relative px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/25 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-400/50 hover:border-cyan-300 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] backdrop-blur-xl transition-all duration-300 flex items-center justify-center gap-2.5 overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            className="flex items-center justify-center gap-2 text-emerald-300 font-semibold"
            key="copied"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span>Email Copied!</span>
          </motion.div>
        ) : (
          <motion.div
            className="flex items-center justify-center gap-2 text-cyan-200"
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span>Copy Email Address</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;