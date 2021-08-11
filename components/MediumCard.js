import Image from 'next/image';

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out text-center">
      <div className="relative h-72 w-72">
        <Image className="rounded-xl" src={img} layout="fill" alt={title} />
      </div>
      <h3 className="text-xl mt-3 ">{title}</h3>
    </div>
  );
}

export default MediumCard;
