import React from 'react';
import { useNavigate } from 'react-router-dom';
import { landingPageImage, landingPageMobileImage } from '../constant/landingpage';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[85vh] overflow-hidden rounded-2xl">
      <img src={landingPageImage} alt="landing" className="hidden sm:block w-full h-[85vh] object-cover" />
      <img src={landingPageMobileImage} alt="landing-mobile" className="block sm:hidden w-full h-[85vh] object-cover" />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-bold leading-tight max-w-5xl">
          Start something epic.
        </h1>

        <button
          className="btn btn-primary rounded-full px-8 sm:px-10 mt-8 text-sm sm:text-base"
          onClick={() => navigate('/register')}
        >
          Create account
        </button>

        <p className="absolute bottom-4 text-xs sm:text-sm text-white/80">
          All photos are of models and used for illustrative purposes only
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
