import Image from "next/image"

const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex justify-center items-center bg-slate-100"
    >
      <div className="layout grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex justify-center">
          <Image
            src="/about.png"
            alt="about"
            className="object-cover"
            width={500}
            height={250}
          />
        </div>
        <div className="">
          <h3 className="bg-gradient-to-r from-indigo-700 to-sky-500 bg-clip-text text-transparent text-lg font-bold mb-4">
            What is Global Smart Solusindo?
          </h3>
          <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-8 text-gray-800">
            We focus on comprehensive information technology and network
            services.
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            For almost 16 years, our company has continued to grow thanks to
            customers trust in the quality of our services. We have successfully
            served various customer segments, including government agencies,
            banking, telecommunications, mining, start-ups and other industries.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
