import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
