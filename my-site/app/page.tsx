export default function Home() {
  return (
    <main className="scroll-smooth">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur p-4 flex gap-6">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <section id="home" className="min-h-screen flex items-center justify-center">Home</section>
      <section id="about" className="min-h-screen flex items-center justify-center">About</section>
      <section id="contact" className="min-h-screen flex items-center justify-center">Contact</section>
    </main>
  );
}