import CourseCard from "./CourseCard";
import { courses } from "../../data/courses";

function CourseList() {
  return (
    <section className="courses">
      <h2>Our Programs</h2>

      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}

export default CourseList;
