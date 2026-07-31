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
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Brands I've Worked With
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-10">
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
                className="object-contain w-auto h-16 transition-transform duration-300 hover:scale-110"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}