import Footer from '../components/Footer';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';
import { AdjustmentsIcon } from '@heroicons/react/solid';

function Search({ searchResults }) {
  const router = useRouter();

  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');

  const dateRange = `${formattedStartDate} - ${formattedEndDate}`;

  const renderedSearchResults = searchResults.map((item) => {
    return (
      <InfoCard
        key={item.title}
        img={item.img}
        description={item.description}
        lat={item.lat}
        long={item.log}
        price={item.price}
        star={item.star}
        title={item.title}
        total={item.total}
        location={item.location}
      />
    );
  });

  return (
    <div>
      <Header
        className="placeholder-opacity-0"
        placeholder={`${location.toUpperCase()} | ${dateRange} | ${numberOfGuests}`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays for {numberOfGuests} guests - {dateRange}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location.toUpperCase()}
          </h1>

          <div className="hidden sm:inline-flex mb-5 whitespace-nowrap">
            <p className="button_1">Cancellation flexibility</p>
            <p className="button_1">Type of place</p>
            <p className="button_1">Price</p>
            <p className="button_1">Room and bed</p>
            <p className="button_1">Star</p>
            <p className="button_1">More filter</p>
          </div>

          <AdjustmentsIcon className=" sm:hidden h-6 cursor-pointer hover:text-red-500" />

          <div className="flex flex-col">{renderedSearchResults}</div>
        </section>

        <section className="hidden xl:inline-flex min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
