const skills = [
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "🌬️" },
  { name: "Node.js", icon: "🟩" },
  { name: "Firebase", icon: "🔥" },
  { name: "Python", icon: "🐍" },
  { name: "C", icon: "🌊" },         
  { name: "C++", icon: "💠" },       
  { name: "Rust", icon: "🦀" },      
  { name: "Linux", icon: "🐧" },     
];

export default function Skills() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-green-300 mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="flex items-center gap-2 bg-black border border-green-500 rounded-lg p-4 shadow hover:shadow-green-400 transition"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
