import Image from "next/image";

export default function Brands() {
  return (

    <div className="flex items-center justify-center w-full  mt-48 ">
        <Image
        src="/images/brands.png"
        alt="Brands"
        width={1200}
        height={400}
        className=""
        priority
        />
    </div>
  );
}