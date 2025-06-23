import SocialLinks from "../components/SocialLinks";
import bgCyber from "../images/bg-cyber.jpg";
import profileImg from "../images/kiri.jpg"; 

export default function Home() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-[80vh] py-12"
      style={{
        backgroundImage: `url(${bgCyber})`, // Use backticks and variable directly
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for cyber effect */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0" />

      {/* Profile content */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={profileImg} // Use curly braces, no quotes
          alt="Kirit0me"
          className="w-32 h-32 rounded-full border-4 border-green-400 shadow-lg mb-4 object-cover"
        />
        <h1 className="text-4xl font-bold mb-2 mt-4 text-green-400 drop-shadow">
          Hi, I'm <span className="text-pink-400">Kirit0me</span> <span className="align-middle">👾</span>
        </h1>
        <p className="text-lg mb-4 text-gray-200">
          <span className="text-green-300">Cybersecurity</span> enthusiast, avid reader, and passionate coder.
        </p>
        <p className="text-base mb-6 text-gray-300 max-w-xl">
          I love exploring the world of technology and got into CTFs, web development, ray tracing, and more.
          Always curious, I love learning new things and sharing knowledge.
        </p>
        <SocialLinks />
        <p className="mt-8 text-sm text-gray-400">Feel free to reach out or follow me!</p>
      </div>
    </section>
  );
}
