import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => setSent(true),
        (error) => alert("Failed to send message: " + error.text)
      );
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-green-300 mb-6">Contact</h2>
      {sent ? (
        <p className="text-green-400">Thank you! Your message has been sent.</p>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md mx-auto">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-2 rounded bg-black border border-green-400 focus:outline-none focus:border-pink-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-2 rounded bg-black border border-green-400 focus:outline-none focus:border-pink-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="p-2 rounded bg-black border border-green-400 focus:outline-none focus:border-pink-400"
          />
          <button
            type="submit"
            className="bg-green-400 text-black font-bold py-2 rounded hover:bg-pink-400 hover:text-white transition"
          >
            Send
          </button>
        </form>
      )}
      <p className="mt-4 text-center text-gray-400">
        Or email me directly at{" "}
        <a href="mailto:prabhavagarwal444@gmail.com" className="underline text-green-400">
          prabhavagarwal444@gmail.com
        </a>
      </p>
    </section>
  );
}
