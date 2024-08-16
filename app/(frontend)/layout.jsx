import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <main className="bg-gradient-to-r from-red-400 via-white to-blue-500">
        {children}
      </main>
      <Footer />
    </html>
  );
}
