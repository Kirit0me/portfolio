import { useState, useEffect } from 'react';
import SocialLinks from "../components/SocialLinks";
import profileImg from "../images/kiri.jpg";

export default function Home() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = ['Kirit0me', 'Prabhav'];

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];
      
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, texts]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full">
      <div className="relative z-10 flex flex-col items-center max-w-2xl px-4">
        <img
          src={profileImg}
          alt="Kirit0me"
          className="w-32 h-32 rounded-full border-4 border-green-400 shadow-lg mb-4 object-cover"
        />
        <h1 className="text-4xl font-bold font-mono mb-2 mt-4 text-green-400 drop-shadow">
          Hi, I'm <span className="text-pink-400">{text}</span>
          <span className="inline-block w-1 h-8 bg-green-400 ml-1 animate-pulse"></span>
          <span className="inline-block ml-1 align-middle animate-bounce">👾</span>
          
        </h1>
        <p className="text-lg mb-4 text-gray-200">
          <span className="text-green-300">Cybersecurity</span> enthusiast, avid reader, and passionate coder.
        </p>
        <p className="text-base mb-6 text-gray-300">
          I love exploring the world of technology and got into CTFs, web development, ray tracing, and more.
          Always curious, I love learning new things and sharing knowledge.
        </p>
        <SocialLinks />
        <p className="mt-8 text-sm text-gray-400">Feel free to reach out or follow me on my socials!</p>
      </div>
    </section>
  );
}
