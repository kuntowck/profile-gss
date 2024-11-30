const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <h1 className="text-5xl font-bold mb-4">
        Right Technology Solutions for Your Business
      </h1>
      <p className="text-lg mb-6">
        We are a customer-centric IT company offering a wide range of quality IT
        services.
      </p>
      <a
        href="#projects"
        className="bg-blue-600 px-6 py-3 rounded-md text-white hover:bg-blue-700"
      >
        View our projects
      </a>
    </section>
  )
}

export default Hero
