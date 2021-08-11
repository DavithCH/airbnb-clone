import LargeCard from './LargeCard';
import MediumCard from './MediumCard';
import Smallcard from './Smallcard';

function MainSection({ exploreData, cardsData }) {
  const renderedExploreData = exploreData?.map((item) => {
    return (
      <Smallcard
        key={item.location}
        img={item.img}
        distance={item.distance}
        location={item.location}
      />
    );
  });

  const renderedCardsData = cardsData?.map((item) => {
    return <MediumCard key={item.title} img={item.img} title={item.title} />;
  });

  return (
    <main className="max-w-7xl mx-auto px-8">
      <section className="pt-6">
        <h2 className="font-semibold text-3xl pb-5">Explore nearby</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {renderedExploreData}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold py-8">Live anywhere</h2>
        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          {renderedCardsData}
        </div>
      </section>

      <LargeCard
        img="https://links.papareact.com/4cj"
        title="The Great Outdoors"
        discription="Wishlists curated by Airbnb."
        buttonText="Get inspired"
      />
    </main>
  );
}

export default MainSection;
