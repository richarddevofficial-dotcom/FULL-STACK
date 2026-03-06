function CourseCard({ name, department, duration, description }) {
  return (
    <div className="card">
      <h3>{name}</h3>

      <p>
        <strong>Department:</strong> {department}
      </p>

      <p>
        <strong>Duration:</strong> {duration}
      </p>

      <p>{description}</p>
    </div>
  );
}

export default CourseCard;
