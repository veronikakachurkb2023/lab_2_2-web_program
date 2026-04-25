import { useEffect, useState } from "react";

function ContactForm({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2a0612]/70 px-5">
      <div
        className={`relative w-full max-w-[480px] rounded-[24px] border p-[28px] shadow-2xl ${
          isDark
            ? "border-[#5f2a3a] bg-[#21191b] text-white"
            : "border-[#ead5cf] bg-[#fff8f3] text-[#1f1f1f]"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#6f102b] text-white"
        >
          ×
        </button>

        <h2
          className={`mb-5 font-serif text-[28px] ${
            isDark ? "text-[#d94f78]" : "text-[#6f102b]"
          }`}
        >
          Contact Me
        </h2>

        <form action="https://formspree.io/f/xwvazvjw" method="POST">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className={`mb-3 w-full rounded-[14px] border px-4 py-3 ${
              isDark
                ? "border-[#5f2a3a] bg-[#2b2023] text-white placeholder:text-[#c9b7bd]"
                : "border-[#ead5cf] bg-white text-[#1f1f1f]"
            }`}
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className={`mb-3 w-full rounded-[14px] border px-4 py-3 ${
              isDark
                ? "border-[#5f2a3a] bg-[#2b2023] text-white placeholder:text-[#c9b7bd]"
                : "border-[#ead5cf] bg-white text-[#1f1f1f]"
            }`}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your phone"
            required
            className={`mb-3 w-full rounded-[14px] border px-4 py-3 ${
              isDark
                ? "border-[#5f2a3a] bg-[#2b2023] text-white placeholder:text-[#c9b7bd]"
                : "border-[#ead5cf] bg-white text-[#1f1f1f]"
            }`}
          />

          <textarea
            name="message"
            placeholder="Your message"
            required
            className={`mb-4 min-h-[110px] w-full resize-y rounded-[14px] border px-4 py-3 ${
              isDark
                ? "border-[#5f2a3a] bg-[#2b2023] text-white placeholder:text-[#c9b7bd]"
                : "border-[#ead5cf] bg-white text-[#1f1f1f]"
            }`}
          />

          <button
            type="submit"
            className="w-full rounded-full bg-[#6f102b] px-5 py-3 text-white transition hover:bg-[#9b173d]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;