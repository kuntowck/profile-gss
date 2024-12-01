const Products = () => {
  const products = [
    {
      title: "Managed Service",
      description:
        "We provide IT management solutions including human resources, systems/applications, and hardware. Our services include managed services for Call Center/Contact Center Management.",
      icon: "🛠️",
    },
    {
      title: "Sales and Rent",
      description:
        "We provide sales and rental of IT hardware and software, such as PCs, printers, servers and antivirus. This service can be based on turn-key projects or contracts tailored to customer needs, including managed services.",
      icon: "💼",
    },
    {
      title: "Service Center",
      description:
        "With a reliable technical team, we are an Authorized Service Center for well-known brands such as Lenovo, Brother, Canon, and others.",
      icon: "⚙️",
    },
  ]

  return (
    <section
      id="products"
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="max-w-screen-sm md:max-w-screen-xl mx-auto px-4 text-center ">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((service, index) => (
            <div key={index} className="p-8 bg-gray-100 rounded-md shadow-md max-h-96">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700 text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
