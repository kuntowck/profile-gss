import Image from "next/image"

const Partners = () => {
  const partners = [
    "bri",
    "bridgestone",
    "fujitsu",
    "pokphand",
    "trakindo",
    "bca",
    "gojek",
    "toyota",
    "mandiri-taspen",
    "jne",
  ]
  return (
    <section id="partners" className="py-16">
      <div className="layout">
        <h2 className="bg-gradient-to-r from-indigo-700 to-sky-500 text-transparent bg-clip-text text-2xl md:text-4xl font-bold mb-8 text-center">
          Partnership with
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center ">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            >
              <Image
                src={`/partners/${partner}.png`}
                alt={partner}
                width={100}
                height={100}
                className="w-24 h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
