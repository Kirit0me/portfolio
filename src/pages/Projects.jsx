import ProjectCard from "../components/ProjectCard";
import { collegeProjects, personalProjects, internshipProjects, clubProjects } from "../data/projects";

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-green-300 mb-8">Projects</h2>
      
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-pink-400 mb-4">College Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collegeProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
      
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-pink-400 mb-4">Personal Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
      
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-pink-400 mb-4">Internship Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {internshipProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-pink-400 mb-4">Club Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
