import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        <div>
          <Image
            src="/about.png"
            alt="about"
            className=""
            width={400}
            height={200}
          />
        </div>
        <div className="">
          <h3 className="text-lg font-bold mb-3">
            What is Global Smart Solusindo?
          </h3>
          <h1 className="text-3xl font-bold mb-3">
            We focus on comprehensive information technology and network
            services.
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            For almost 16 years, our company has provided top-quality services
            to diverse industries.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
