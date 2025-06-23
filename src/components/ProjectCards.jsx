export default function ProjectCard({ project }) {
  return (
    <div className="bg-black border-2 border-green-400 rounded-xl p-4 shadow-md hover:shadow-green-400 transition flex flex-col items-center">
      <img src={project.imageUrl} alt={project.title} className="rounded-lg mb-2 w-32 h-32 object-cover" />
      <h3 className="text-xl font-bold text-green-300">{project.title}</h3>
      <p className="text-gray-300 mb-2">{project.description}</p>
      <div className="flex gap-2">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-pink-400">GitHub</a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-pink-400">Live Demo</a>
        )}
      </div>
    </div>
  );
}
