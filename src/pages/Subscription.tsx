import React from 'react';
import SubscriptionHero from '../components/sections/subscription/SubscriptionHero';
import SubscriptionTicker from '../components/sections/subscription/SubscriptionTicker';
import SubscriptionDifferentiators from '../components/sections/subscription/SubscriptionDifferentiators';
import SubscriptionHowItWorks from '../components/sections/subscription/SubscriptionHowItWorks';
import SubscriptionPlans from '../components/sections/subscription/SubscriptionPlans';
import { HomeSachetsGateway } from '../components/sections/home/PlansAndQuiz';
import SubscriptionCurators from '../components/sections/subscription/SubscriptionCurators';
import SubscriptionDossier from '../components/sections/subscription/SubscriptionDossier';
import SubscriptionComparison from '../components/sections/subscription/SubscriptionComparison';
import SubscriptionTimeline from '../components/sections/subscription/SubscriptionTimeline';
import SubscriptionManifesto from '../components/sections/subscription/SubscriptionManifesto';
import SubscriptionReviews from '../components/sections/subscription/SubscriptionReviews';
import SubscriptionFAQ from '../components/sections/subscription/SubscriptionFAQ';
import SubscriptionCTA from '../components/sections/subscription/SubscriptionCTA';
import SubscriptionBottomCards from '../components/sections/subscription/SubscriptionBottomCards';

export default function Subscription() {
  return (
    <div className="subscription-page">
      <SubscriptionHero />
      <SubscriptionTicker />
      <SubscriptionDifferentiators />
      <SubscriptionHowItWorks />
      <SubscriptionPlans />
      <div style={{ background: '#EFE7DB' }}>
        <HomeSachetsGateway />
      </div>
      <SubscriptionCurators />
      <SubscriptionDossier />
      <SubscriptionComparison />
      <SubscriptionTimeline />
      <SubscriptionManifesto />
      <SubscriptionReviews />
      <SubscriptionFAQ />
      <SubscriptionCTA />
      <SubscriptionBottomCards />
    </div>
  );
}
