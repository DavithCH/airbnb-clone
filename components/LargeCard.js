import Image from 'next/image';

function LargeCard({ img, title, discription, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          className="rounded-2xl "
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{discription}</p>

        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transform transition duration-500 ease-out active:scale-95 ">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
