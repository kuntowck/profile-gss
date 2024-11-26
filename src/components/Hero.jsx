const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-hero-pattern bg-cover bg-center flex items-center justify-center text-center"
    >
      <div className="text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Company</h1>
        <p className="text-lg mb-6">
          Innovative solutions to empower your business.
        </p>
        <a
          href="#about"
          className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
