import Image from "next/image"

const Partners = () => {
  const partners = ["bri", "bridgestone", "fujitsu", "pokphand", "trakindo"]
  return (
    <section id="partners" className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Partnership with</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <Image
              src={`/partners/${partner}.png`}
              alt={partner}
              key={index}
              width={50}
              height={50}
            />
          ))}

        </div>
      </div>
    </section>
  )
}

export default Partners
