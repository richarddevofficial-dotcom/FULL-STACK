function SectionWrapper({ children }) {
  return (
    <section className="section">
      <h2>Our Products</h2>
      <div className="container">{children}</div>
    </section>
  );
}

export default SectionWrapper;
