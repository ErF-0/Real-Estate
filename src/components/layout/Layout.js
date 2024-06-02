import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

function Layout({ children }) {
  const style = { minHeight: "700px" };

  return (
    <>
      <Header />
      <main style={style}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
