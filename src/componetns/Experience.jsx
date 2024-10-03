import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

function Experience() {
  return (
    <>
      <div id="Experience" className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Experience</h1>
        <div className="flex justify-center flex-wrap flex-row items-center gap-10">
          {EXPERIENCE.map((item) => (
            <motion.div
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col justify-center items-center shadow shadow-gray-50 h-[250px] w-[390px]"
            >
              <p className="font-bold">{item.year}</p>
              <p className="mt-4 text-center">Company: {item.company}</p>
              <p>Domain: {item.domain}</p>
              <p>Project: {item.project.name}</p>
              <p className="mt-3 flex gap-3 text-center items-center justify-center flex-wrap">
                {item.project.technologies.map((item1) => (
                  <div className="w mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                    {item1}
                  </div>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experience;
// year: "Jul 2022 - Aug 2022",
//     company: "Open Interface Software Solution Pvt. Ltd.",
//     domain: "Web Development",
//     project: {
//       name: "Car Rental System",
//       technologies: ["php", "html", "css", "js", "mysql"],
//     },
