1️⃣ What is Component Composition in React?

Component Composition means building complex UIs by combining smaller reusable components.

Instead of writing one big component, you compose (assemble) many small components together.

Think of it like LEGO blocks 🧱:

Each block = a component

Combining blocks = building the interface

So in React:

Small components → combined → create bigger UI
2️⃣ Simple Example
Small Components
function Header() {
return <h1>My Website</h1>;
}

function Footer() {
return <p>© 2026</p>;
}
Composed Component
function App() {
return (
<div>
<Header />
<Footer />
</div>
);
}

Here:

App
├── Header
└── Footer

This is component composition.

3️⃣ Real Example (University Website)

Your main App composes multiple components:

function App() {
return (
<>
<Navbar />
<Hero />
<Programs />
<News />
<Footer />
</>
);
}

Structure:

App
├── Navbar
├── Hero
├── Programs
├── News
└── Footer

Each part of the page is a separate component.

4️⃣ Composition with Props

Components can also pass data.

Example:

function Card(props) {
return (
<div>
<h3>{props.title}</h3>
<p>{props.text}</p>
</div>
);
}

Parent component:

function App() {
return (
<>
<Card title="Computer Science" text="Learn programming" />
<Card title="Business" text="Learn management" />
</>
);
}

Here:

Card is reused

Data is passed using props

5️⃣ Composition Using children

React also allows components to wrap other components using children.

Example:

function SectionWrapper({ children }) {
return <section>{children}</section>;
}

Usage:

<SectionWrapper>
  <h2>Programs</h2>
  <Card />
  <Card />
</SectionWrapper>

Here:

SectionWrapper
├── h2
├── Card
└── Card

This is advanced component composition.

6️⃣ Why Component Composition is Important

It makes your code:

1️⃣ Reusable

You write a component once and reuse it.

Example:

ProductCard
TeamMemberCard
NewsCard
2️⃣ Maintainable

Instead of one 1000-line file, you split into small files.

Example:

Navbar.jsx
Hero.jsx
Programs.jsx
Footer.jsx
3️⃣ Scalable

Large applications (like university portals) need many components.

Example structure:

components/
├── layout/
│ ├── Header.jsx
│ ├── Footer.jsx
│
├── students/
│ ├── StudentCard.jsx
│ ├── StudentList.jsx
│
├── courses/
│ ├── CourseCard.jsx
│ ├── CourseList.jsx
7️⃣ Example Similar to Your Assignment

For your Team Member assignment:

App
└── SectionWrapper
├── TeamMemberCard
│ └── Avatar
├── TeamMemberCard
│ └── Avatar
├── TeamMemberCard
│ └── Avatar
└── TeamMemberCard
└── Avatar

This shows:

composition

props

children

map()

8️⃣ Real-World React Apps Use Heavy Composition

Example structure:

App
├── Layout
│ ├── Header
│ ├── Sidebar
│ └── Footer
│
├── Pages
│ ├── Dashboard
│ ├── Students
│ └── Courses

This is how large systems (university portals, hospital systems) are built.

✅ In one sentence:

Component Composition is the practice of combining small React components together to build complex user interfaces.

If you want, I can also show you the 3 most common React architecture patterns used by senior developers (this will help a lot for your portfolio projects like the university system you're building).
