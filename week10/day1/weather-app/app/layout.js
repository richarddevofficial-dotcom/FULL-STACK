import "../styles/globals.css";

export const metadata = {
  title: "Weather Pro",
  description: "Professional Next.js Weather App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white">
        {children}
      </body>
    </html>
  );
}