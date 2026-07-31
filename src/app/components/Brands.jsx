import Image from "next/image";

const brands = [
  { id: 1, name: "WebSignature", logo: "/images/brands/websignature.png" },
  { id: 2, name: "OWL", logo: "/images/brands/owl.png" },
  { id: 3, name: "GZone", logo: "/images/brands/gzone.png" },
  { id: 4, name: "AuseTech", logo: "/images/brands/ausetech.png" },
  { id: 5, name: "PokeKade", logo: "/images/brands/pokekade.png" },
  { id: 6, name: "AgroVista", logo: "/images/brands/agrovista.png" },
  { id: 7, name: "BestBuy", logo: "/images/brands/bestbuy.png" },
  { id: 8, name: "Sonys TCG", logo: "/images/brands/sonystcg.png" },
];

export default function Brands() {
  return (
    <section className="w-full mt-48">
      <div className="max-w-7xl mx-auto px-6">
        

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold  mb-4">
             Brands
          </h1>
          <p className="text-gray-300">
            Some of Brands I've Worked With
          </p>
        </div>

        {/* Small & Medium */}
        <div className="grid grid-cols-5 justify-items-center gap-y-8 lg:hidden">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className={`flex items-center justify-center w-28 h-20 ${
                brand.id >= 6 ? "col-span-1" : ""
              } ${
                brand.id === 6 ? "col-start-2" : ""
              }`}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={180}
                height={80}
                className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-110"
                priority
              />
            </div>
          ))}
        </div>

        {/* Large & Up */}
        <div className="hidden lg:flex justify-center items-center gap-10">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center w-28 h-20"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={180}
                height={80}
                className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-110"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}