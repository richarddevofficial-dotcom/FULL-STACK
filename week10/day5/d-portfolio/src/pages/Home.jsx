import { motion } from "framer-motion";

function Home() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Hi, I'm Drich 👋</h1>
      <p>API Developer | QA Engineer | Mobile Dev</p>
    </motion.section>
  );
}

export default Home;
