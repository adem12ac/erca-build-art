import { motion } from "framer-motion";

export const WHATSAPP_URL = "https://wa.me/4915212971388";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Kontakt"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.65)]"
      style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.39c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.38 0 1.4 1.02 2.76 1.16 2.95.14.19 2 3.05 4.85 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.66-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33zM16 3C8.82 3 3 8.82 3 16c0 2.42.66 4.69 1.81 6.64L3 29l6.55-1.79A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.55c-2.13 0-4.11-.6-5.8-1.64l-.41-.25-3.89 1.06 1.04-3.79-.27-.43A10.4 10.4 0 0 1 5.4 16C5.4 10.15 10.15 5.4 16 5.4S26.6 10.15 26.6 16 21.85 26.55 16 26.55z" />
      </svg>
    </motion.a>
  );
}
