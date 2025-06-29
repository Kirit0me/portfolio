import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../data/skills";
import {
  collegeProjects,
  personalProjects,
  internshipProjects,
  clubProjects,
} from "../data/projects";
import ProjectCard from "../components/ProjectCard";

// Combine all projects into one array
const allProjects = [
  ...collegeProjects,
  ...personalProjects,
  ...internshipProjects,
  ...Object.values(clubProjects).flat(),
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredProjects = selectedSkill
    ? allProjects.filter((project) =>
        project.skills?.includes(selectedSkill)
      )
    : [];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-green-300 mb-8 text-center"><span className="blink text-amber-300">$</span> <span className="text-pink-400">ls</span> /skills</h2>

      {/* Skill Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {skills.map((skill) => (
        <button
          key={skill.name}
          onClick={() =>
            setSelectedSkill((prev) =>
              prev === skill.name ? null : skill.name
            )
          }
          className={`px-4 py-2 rounded-lg font-semibold border transition whitespace-nowrap ${
            selectedSkill === skill.name
              ? "bg-green-500 text-black"
              : "bg-black border-green-400 text-green-300 hover:bg-green-700"
          }`}
        >
          <skill.icon className="mr-2 inline" size={20} />
          {skill.name}
        </button>
        ))}
      </div>

      {/* Project Carousel */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            key={selectedSkill}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-pink-300 mb-4 text-center">
              Projects with <span className="underline">{selectedSkill}</span>
            </h3>

            {filteredProjects.length > 0 ? (
              <div className=" grid
                              gap-4
                              grid-cols-1
                              sm:grid-cols-2
                              md:grid-cols-3
                              lg:grid-cols-4">
                {filteredProjects.map((project, idx) => (
                  <div key={idx} className=" flex-shrink-0 bg-black border border-green-400 rounded-lg">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400">
                Oops, I have nothing to show for this skill!
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
