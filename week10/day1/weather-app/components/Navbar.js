import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-black text-white">
      <h1 className="text-xl">Weather Pro</h1>
      <ThemeToggle />
    </nav>
  );
}
