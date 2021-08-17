import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

function InfoCard({
  img,
  lat,
  location,
  long,
  description,
  star,
  price,
  title,
  total,
}) {
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-90 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative w-60 h-24 md:h-52 md:w-80 flex-shrink-0">
        <Image
          className="rounded-2xl"
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="cursor-pointer h-7" />
        </div>
        <h4 className="text-xl font-semibold">{title}</h4>

        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
