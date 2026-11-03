import { TalentSolutions } from "../components/TalentSolutions";
import { OurCustomers } from "../components/OurCustomers";
import { CustomerCarousel } from "../components/CustomerCarousel";
import { ClientStoriesCarousel } from "../components/ClientStoriesCarousel";
import { WhatWeDelivered } from "../components/WhatWeDelivered";

export function HomePage() {
  return (
    <div>
      <TalentSolutions />
      <OurCustomers />
      <CustomerCarousel />
      <ClientStoriesCarousel />
      <WhatWeDelivered />
    </div>
  );
}
