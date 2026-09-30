import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Explorador de Rick y Morty",
  description: "Un proyecto universitario sencillo para explorar personajes y episodios.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:p-3">Saltar al contenido</a>
        <Navbar />
        <main id="main-content" className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
