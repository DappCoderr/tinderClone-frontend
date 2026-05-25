import React from 'react';
import { cardsDetails } from '../constant/homepage';
import useUser from '../store/useUser';
import LandingPage from './landing.page';

const HomePage = () => {
  const user = useUser((state) => state.user);
  if (!user) {
    return <LandingPage />;
  }
  return (
    <div className="carousel rounded-2xl overflow-hidden shadow-lg h-[250px] sm:h-[400px] md:h-[500px] w-full">
      {cardsDetails.map((card) => (
        <div key={card.id} id={card.id} className="carousel-item relative w-full">
          <img src={card.img} alt={card.id} className="w-full object-cover" />

          <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 justify-between">
            <a href={`#${card.prev}`} className="btn btn-circle btn-sm sm:btn-md">
              ❮
            </a>

            <a href={`#${card.next}`} className="btn btn-circle btn-sm sm:btn-md">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
