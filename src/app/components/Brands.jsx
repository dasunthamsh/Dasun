import Image from "next/image";

const brands = [
  { id: 1, name: "WebSignature", logo: "/images/brands/websignature.png", height: 32 },
  { id: 2, name: "OWL", logo: "/images/brands/owl.png", height: 32 },
  { id: 3, name: "GZone", logo: "/images/brands/gzone.png", height: 34 },
  { id: 4, name: "AuseTech", logo: "/images/brands/ausetech.png", height: 34 },
  { id: 5, name: "PokeKade", logo: "/images/brands/pokekade.png", height: 32 },
  { id: 6, name: "AgroVista", logo: "/images/brands/agrovista.png", height: 40 },
  { id: 7, name: "BestBuy", logo: "/images/brands/bestbuy.png", height: 34 },
  { id: 8, name: "Sonys TCG", logo: "/images/brands/sonystcg.png", height: 32 },
];

export default function Brands() {
  return (
    <section className="w-full mt-48">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-4">Brands</h1>
          <p className="text-gray-300">
            Some of Brands I've Worked With
          </p>
        </div>

        {/* Mobile & Tablet */}
        <div className="grid grid-cols-5 justify-items-center gap-y-10 lg:hidden">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className={`
                flex items-center justify-center
                w-20 h-20
                sm:w-24 sm:h-24
                ${brand.id === 6 ? "col-start-2" : ""}
              `}
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
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-8 gap-8 place-items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center w-28 h-24"
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
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}