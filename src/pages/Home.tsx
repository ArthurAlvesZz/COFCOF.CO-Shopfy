import React, { useEffect } from 'react';
import { HomeHeroSubscription, HomeTrustBar, HomeHowItWorks } from '../components/sections/home/HeroAndTrust';
import { HomePlans, HomeQuiz, HomeSachetsGateway } from '../components/sections/home/PlansAndQuiz';
import { HomeReels } from '../components/sections/home/HomeReels';
import { HomeOriginProof, HomeProcess, HomeComparison } from '../components/sections/home/OriginAndProcess';
import { HomeSecondarySales, HomePerceptions, HomeFAQ, HomeFinalCTA } from '../components/sections/home/SecondaryAndReviews';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('v');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.fi');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HomeHeroSubscription />
      <HomeTrustBar />
      <HomeHowItWorks />
      <HomePlans />
      <HomeQuiz />
      <HomeSachetsGateway />
      <HomeReels />
      <HomeOriginProof />
      <HomeProcess />
      <HomeComparison />
      <HomeSecondarySales />
      <HomePerceptions />
      <HomeFAQ />
      <HomeFinalCTA />
    </>
  );
}
