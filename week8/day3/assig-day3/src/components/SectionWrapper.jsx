// src/components/SectionWrapper.jsx

function SectionWrapper({ children }) {
  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="team-container">{children}</div>
    </section>
  );
}

export default SectionWrapper;
