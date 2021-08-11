import Image from 'next/image';

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectPosition="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm text-gray-900 sm:text-lg font-semibold">
          Not sure where to go? Perfect.
        </p>
        <button className=" my-3 text-lg font-bold border-2 border-pink-600 bg-white py-4 px-10 text-pink-500 rounded-full hover:shadow-xl active:scale-90 transition duration-100">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
