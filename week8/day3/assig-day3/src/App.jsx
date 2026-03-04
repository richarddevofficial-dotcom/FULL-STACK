// src/App.jsx

import TeamMemberCard from "./components/TeamMemberCard";
import SectionWrapper from "./components/SectionWrapper";

function App() {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Frontend Developer",
      image: "https://i.pravatar.cc/150?img=1",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Backend Developer",
      image: "https://i.pravatar.cc/150?img=2",
      email: "sarah@example.com",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/150?img=3",
      email: "michael@example.com",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "QA Engineer",
      image: "https://i.pravatar.cc/150?img=4",
      email: "emily@example.com",
    },
  ];

  return (
    <SectionWrapper>
      {teamMembers.map((member) => (
        <TeamMemberCard
          key={member.id}
          name={member.name}
          role={member.role}
          image={member.image}
          email={member.email}
        />
      ))}
    </SectionWrapper>
  );
}

export default App;
