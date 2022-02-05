import Image from "next/image"

const Brands = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
        <div className="brand group">
            <Image src="/images/disnep.png" layout="fill" objectFit="cover"/>
        </div>
        <div className="brand group">
            <Image src="/images/pixar.png" layout="fill" objectFit="cover"/>
        </div>
        <div className="brand group">
            <Image src="/images/marvel.png" layout="fill" objectFit="cover"/>
        </div>
        <div className="brand group">
            <Image src="/images/starwars.png" layout="fill" objectFit="cover"/>
        </div>
        <div className="brand group">
            <Image src="/images/national-geographic.png" layout="fill" objectFit="cover"/>
        </div>
    </section>
    )
};

export default Brands;
