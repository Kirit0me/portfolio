import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import LeetCodeIcon from "../images/leetcode.svg?react";
import AniListIcon from "../images/anilist.svg?react";

const socials = [
  { name: "GitHub", url: "https://github.com/Kirit0me", icon: <FaGithub /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/prabhav-agarwal-a7186aa0/", icon: <FaLinkedin /> },
  { name: "LeetCode", url: "https://leetcode.com/u/Kiritome/", icon: <LeetCodeIcon className="w-6 h-6 stroke-current fill-none" /> },
  { name: "AniList", url: "https://anilist.co/user/Kirit0me/", icon: <AniListIcon className="w-6 h-6 stroke-current fill-none" /> },
  { name: "Email", url: "mailto:prabhavagarwal444@gmail.com", icon: <FaEnvelope /> },
];
export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-4 justify-center">
      {socials.map(social => (
        <a
          key={social.name}
          href={social.url}
          className="text-green-400 hover:text-pink-400 text-2xl transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
