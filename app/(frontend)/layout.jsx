import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function FrontendLayout({ children }) {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}
