import "../components/styles/Career.css";
import { motion } from "motion/react";

const educationJourney = [
  {
    title: "High School",
    institution: "Sarabari High School",
    period: "2015 – 2020",
    description:
      "Completed high school education with a strong academic foundation in sciences and mathematics, achieving an overall score of 81.33%.",
  },
  {
    title: "Higher Secondary (Science)",
    institution: "Aryabhatta Junior Science College",
    period: "2020 – 2022",
    description:
      "Studied Physics, Chemistry, and Mathematics in the science stream and secured 85.2% in higher secondary board examinations.",
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    institution: "Triguna Sen School of Technology, Assam University",
    period: "2023 – 2027",
    description:
      "Currently pursuing Bachelor of Technology in CSE, specializing in software development, 3D WebGL graphics, AI systems, and full-stack web architecture.",
  },
];

const Career = () => {
  return (
    <section className="career-section c-space section-spacing scroll-mt-24" id="career">
      <div className="career-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-xs font-semibold text-cyan-400 tracking-widest uppercase shadow-[0_0_12px_rgba(6,182,212,0.2)]">
            <span>🎓 Academic Path</span>
          </div>
          <h2>
            Education <span>&</span> Journey
          </h2>
        </motion.div>

        <div className="career-info">
          {/* Vertical Neon Timeline */}
          <div className="career-timeline">
            <div className="career-dot" />
          </div>

          {educationJourney.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="career-info-box"
            >
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.title}</h4>
                  <h5>{item.institution}</h5>
                </div>
                <h3>{item.period}</h3>
              </div>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
