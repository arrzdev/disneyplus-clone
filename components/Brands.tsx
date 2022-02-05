import Image from "next/image"

const Brands = () => {
  return (
      //flex flex-col
    <section className="hidden md:flex justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
        <div className="brand group">
            <Image src="/images/disnep.png" layout="fill" objectFit="scale-down"/>
        </div>
        <div className="brand group">
            <Image src="/images/pixar.png" layout="fill" objectFit="scale-down"/>
        </div>
        <div className="brand group">
            <Image src="/images/marvel.png" layout="fill" objectFit="scale-down"/>
        </div>
        <div className="brand group">
            <Image src="/images/starwars.png" layout="fill" objectFit="scale-down"/>
        </div>
        <div className="brand group">
            <Image src="/images/national-geographic.png" layout="fill" objectFit="scale-down"/>
        </div>
    </section>
    )
};

export default Brands;
