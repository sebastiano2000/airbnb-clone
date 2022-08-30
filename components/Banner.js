import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] 
    lg:h-[500px] xlth-[600px] 2xl:h-[700px]">
        <Image 
            src="https://raw.githubusercontent.com/edwintantawi/airbnb-web-clone/main/public/assets/hero.jpg"
            layout="fill"
            objectFit="cover"
        />

        <div className="absolute top-1/2 w-full text-center">
            <p className="text-sm sm:text-lg">
                Not Sure where to go? Perfect.
            </p>
            <button className="text-purple-500 bg-white px-10 py-4
            shadow-md rounded-full font-bold my-3 hover:shadow-xl
            active:scale-90 transition duration-150">
                I'm flexibile
            </button>
        </div>
    </div>
  )
}

export default Banner