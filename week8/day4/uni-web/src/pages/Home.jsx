import CourseList from "../components/courses/CourseList";

function Home() {
  return (
    <>
      <section className="hero">
        <h2>Welcome to Global Tech University</h2>

        <p>Empowering the next generation of innovators.</p>
      </section>

      <CourseList />
    </>
  );
}

export default Home;
