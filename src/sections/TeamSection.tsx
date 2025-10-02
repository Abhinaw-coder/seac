import React, { useRef, useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import { team } from '../data/team';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TeamSection: React.FC = () => {
  const [revealed, setRevealed] = React.useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!revealed || !isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % team.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [revealed, isMobile]);

  useEffect(() => {
    if (scrollRef.current && isMobile) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex, isMobile]);

  const teaserCount = Math.min(3, team.length);
  const teaserMembers = team.slice(0, teaserCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % team.length);
  };

  return (
    <section
      id="meet-our-team"
      className="relative py-12 md:py-20 bg-white dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Meet our team
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-300">
            The people behind SEAC. Click to reveal the full crew.
          </p>
        </div>

        {!revealed ? (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            aria-label="Reveal team"
            className="group relative w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl p-4 md:p-6 transition transform hover:scale-[1.01]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {teaserMembers.map((m) => (
                <div key={m.id} className="relative">
                  <div className="pointer-events-none select-none">
                    <ProfileCard
                      name={m.name}
                      title={m.title}
                      handle={m.handle}
                      status={m.status || 'Online'}
                      contactText="Contact"
                      avatarUrl={m.avatarUrl}
                      showUserInfo={true}
                      enableTilt={true}
                      enableMobileTilt={false}
                    />
                  </div>
                  <div className="absolute inset-0 rounded-[30px] bg-gray-900/20 backdrop-blur-[6px] contrast-75 brightness-90 ring-1 ring-inset ring-white/10" />
                </div>
              ))}
            </div>
            <div className="pointer-events-none mt-5 flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200">
              <svg className="h-5 w-5 opacity-80 group-hover:opacity-100 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
              <span className="text-sm md:text-base font-medium opacity-80 group-hover:opacity-100 transition">
                Click to reveal the full team
              </span>
            </div>
          </button>
        ) : (
          <div className="animate-fade-in">
            {/* Mobile Slider */}
            <div className="md:hidden relative">
              <div
                ref={scrollRef}
                className="overflow-x-hidden scroll-smooth"
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {team.map((m) => (
                    <div key={m.id} className="w-full flex-shrink-0 px-4">
                      <ProfileCard
                        name={m.name}
                        title={m.title}
                        handle={m.handle}
                        status={m.status || 'Online'}
                        contactText="Contact"
                        avatarUrl={m.avatarUrl}
                        showUserInfo={true}
                        enableTilt={false}
                        enableMobileTilt={false}
                        className="shadow-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg z-10"
                aria-label="Previous"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg z-10"
                aria-label="Next"
              >
                <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {team.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-blue-600'
                        : 'w-2 bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {team.map((m) => (
                <ProfileCard
                  key={m.id}
                  name={m.name}
                  title={m.title}
                  handle={m.handle}
                  status={m.status || 'Online'}
                  contactText="Contact"
                  avatarUrl={m.avatarUrl}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  className="shadow-lg"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
