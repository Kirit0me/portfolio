export default function ProjectCard({ project }) {
  return (
    <div className="bg-black border-2 border-green-400 rounded-xl overflow-hidden shadow-md hover:shadow-green-400 transition flex flex-col h-full">
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="flex-1 flex flex-col items-center p-4">
        <h3 className="text-xl font-bold text-center text-green-300 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 text-center mb-4">{project.description}</p>

        {/* Tech stack or tags (if any) */}
        {project.skills && project.skills.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-green-800 text-xs px-2 py-1 rounded-full text-green-200"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-pink-400 transition underline"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-pink-400 transition underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
