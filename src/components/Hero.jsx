const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center flex justify-center items-center text-center text-white"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="layout">
        <h1 className="text-5xl font-bold mb-4">
          Right Technology Solutions for Your Business
        </h1>
        <p className="text-lg mb-6">
          We are a customer-centric IT company offering a wide range of quality
          IT services.
        </p>
        <a
          href="#projects"
          className="bg-gradient-to-br from-indigo-700 to-sky-500 px-6 py-3 rounded-full text-white hover:bg-blue-700"
        >
          View our projects
        </a>
      </div>
    </section>
  )
}

export default Hero
