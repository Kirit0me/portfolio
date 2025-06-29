import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import {
  collegeProjects,
  personalProjects,
  internshipProjects,
  clubProjects,
} from "../data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.4, ease: "easeOut" },
  }),
};

export default function Projects() {
  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-12 xl:px-20 max-w-[1440px] mx-auto">
      {/* Main Heading */}
      <h2 className="text-3xl font-bold text-green-300 mb-12 text-center">
        <span className="blink text-amber-300">$</span>{" "}
        <span className="text-pink-400">ls</span> /projects
      </h2>

      {/* Other project categories */}
      {[
        { title: "college_projects", data: collegeProjects },
        { title: "personal_projects", data: personalProjects },
        { title: "internship_projects", data: internshipProjects },
      ].map(({ title, data }) => (
        <div key={title} className="mb-20">
          <h3 className="text-2xl font-semibold text-pink-400 mb-6">
            $ ls /{title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((project, idx) => (
              <motion.div
                key={project.id || `${title}-${idx}`}
                custom={idx * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Club Projects */}
      <div className="mb-20">
        <h3 className="text-2xl font-semibold text-pink-400 mb-8">
          $ ls /club_projects
        </h3>

        {Object.entries(clubProjects).map(([clubName, projects]) => (
          <div key={clubName} className="mb-16">
            <h4 className="text-xl font-semibold text-yellow-400 mb-5">
              $ ls /{clubName}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id || `${clubName}-${i}`}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
