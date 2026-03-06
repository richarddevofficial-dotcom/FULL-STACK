import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";

function MainLayout({ children }) {
  return (
    <>
      <Header />

      <div className="layout">
        <main className="main-content">{children}</main>

        <Sidebar />
      </div>

      <Footer />
    </>
  );
}

export default MainLayout;
