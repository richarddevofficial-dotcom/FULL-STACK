import { motion } from "framer-motion";

function ProjectCard({ title, description, image, link }) {
  return (
    <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
      <img src={image} alt={title} />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>View Project</a>
      </div>
    </motion.div>
  );
}
