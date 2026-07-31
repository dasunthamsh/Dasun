import Image from "next/image";

const brands = [
  { id: 1, name: "WebSignature", logo: "/images/brands/websignature.png", height: 24 },
  { id: 2, name: "OWL", logo: "/images/brands/owl.png", height: 34 },
  { id: 3, name: "GZone", logo: "/images/brands/gzone.png", height: 28 },
  { id: 4, name: "AuseTech", logo: "/images/brands/ausetech.png", height: 26 },
  { id: 5, name: "PokeKade", logo: "/images/brands/pokekade.png", height: 34 },
  { id: 6, name: "AgroVista", logo: "/images/brands/agrovista.png", height: 30 },
  { id: 7, name: "BestBuy", logo: "/images/brands/bestbuy.png", height: 26 },
  { id: 8, name: "Sonys TCG", logo: "/images/brands/sonystcg.png", height: 34 },
];

export default function Brands() {
  return (
    <section className="w-full mt-28 md:mt-40">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Brands
          </h1>

          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Some of Brands I've Worked With
          </p>
        </div>

        {/* Mobile */}
        <div className="grid grid-cols-4 gap-x-3 gap-y-5 lg:hidden place-items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center h-14 w-full"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={180}
                height={80}
                priority
                style={{
                  width: "auto",
                  height: `${brand.height}px`,
                  objectFit: "contain",
                }}
                className="transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-8 gap-8 place-items-center mt-4">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center h-20 w-full"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={180}
                height={80}
                priority
                style={{
                  width: "auto",
                  height: `${brand.height + 8}px`,
                  objectFit: "contain",
                }}
                className="transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}