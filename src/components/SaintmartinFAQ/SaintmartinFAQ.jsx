"use client";
import React from "react";
import Head from "next/head";

const faqData = [
  {
    q: "What is the cost of a Saint Martin ship journey?",
    a: `The cost of a Saint Martin ship trip varies depending on the vessel, cabin class, and the boarding point (Teknaf, Cox's Bazar, or Chittagong). Luxury cruise ships like <a href="/mv-karnafully-express/290" class="text-blue-700 underline">MV Karnafully Express</a> and <a href="/mv-baro-awlia-ship/289" class="text-blue-700 underline">MV Baro Awlia Ship</a> offer premium open-deck experiences, spacious AC lounges, and private cabins with premium amenities. More economical options like <a href="/mv-bay-cruise-one/293" class="text-blue-700 underline">MV Bay Cruise One</a> and <a href="/mv-teknaf/819" class="text-blue-700 underline">MV Teknaf</a> provide standard seating for a budget-friendly sea crossing. Tickets generally cover the round-trip journey, though luxury packages may include onboard snacks or lunch. Booking tickets early is highly recommended during the peak season to secure preferred seating classes.`
  },
  {
    q: "When is the best time to take a ship to Saint Martin?",
    a: `The ideal time to visit Saint Martin's Island by ship is from November to February when the Bay of Bengal remains calm, clear, and safe for navigation. During this winter window, ship operators run daily schedules. It is highly advised to avoid the monsoon and cyclone off-season (May to September), as rough sea conditions prompt the local administration to suspend all ship operations. ships like <a href="/mv-the-crown/264" class="text-blue-700 underline">MV The Crown</a> and <a href="/mv-baro-awlia-ship/289" class="text-blue-700 underline">MV Baro Awlia Ship</a> and <a href="/mv-karnafully-express/290" class="text-blue-700 underline">MV Karnafully Express</a> operate strictly within this safe peak window, ensuring a smooth and scenic cruise across the blue waters.`
  },
  {
    q: "What is included in a typical Saint Martin ship ticket or tour package?",
    a: `A standard ship ticket covers a round-trip or one-way cruise across the sea with designated seating configurations (Open Deck, Business Class, or Main Lounge). If you purchase a multi-day cruise package via premium ships like <a href="/mv-karnafully-express/290" class="text-blue-700 underline">MV Karnafully Express</a> or <a href="/mv-baro-awlia-ship/289" class="text-blue-700 underline">MV Baro Awlia Ship</a>, the service can extend to onboard live entertainment, snacks, ocean-view cabin access, and dedicated tour coordination. Standard tickets usually exclude island accommodation or meals unless explicitly booked as a complete holiday tour bundle.`
  },
  {
    q: "Is the sea voyage to Saint Martin safe?",
    a: `Yes, cruising to Saint Martin is remarkably safe when using government-authorized sea vessels. All registered ships are equipped with mandatory safety gear, including adult and child life jackets, lifebuoys, fire suppression systems, and modern sea navigation tools. Experienced naval crews and coast guard monitoring ensure strict adherence to passenger limits. Premier ships like <a href="/mv-teknaf/819" class="text-blue-700 underline">MV Teknaf</a> and <a href="/mv-bay-cruise-one/293" class="text-blue-700 underline">MV Bay Cruise One</a> adhere strictly to maritime safety laws. Journeys are subject to weather clearance, ensuring complete peace of mind.`
  },
  {
    q: "Do I need permits, passports, or specific IDs to board the ship?",
    a: `Bangladeshi citizens should carry a valid photo ID, such as a National ID (NID) or passport, as random verification checks can happen at the departure piers in Teknaf or Cox's Bazar. For international travelers, carrying a valid passport and tracking relevant government notifications regarding island tourism guidelines is necessary. Ship operators like <a href="/mv-karnafully-express/290" class="text-blue-700 underline">MV Karnafully Express</a> and <a href="/mv-baro-awlia-ship/289" class="text-blue-700 underline">MV Baro Awlia Ship</a> assist in verifying boarding passes and compliance paperwork at the gates to guarantee a hassle-free boarding process.`
  },
  {
    q: "What can I expect to see during the ship journey to Saint Martin?",
    a: `The ship journey offers breathtaking coastal views, beginning with the scenic Naf River estuary lined with hills, before opening up into the deep blue expanse of the Bay of Bengal. Travelers frequently spot flocks of flying seagulls trailing the ships, traditional fishing trawlers, and distant panoramic views of the Myanmar coastline. Cruise ships like <a href="/mv-baro-awlia-ship/289" class="text-blue-700 underline">MV Baro Awlia Ship</a> and <a href="/mv-bay-cruise-one/293" class="text-blue-700 underline">MV Bay Cruise One</a> offer fantastic open-deck observation zones designed for photography, sunset viewing, and enjoying the clean sea breeze.`
  },
  {
    q: "What should I pack for a Saint Martin ship cruise?",
    a: `Preparing right makes a sea voyage significantly more comfortable. It is smart to pack light summer clothing, reliable sunglasses, a wide-brimmed sun hat, and high-SPF sunscreen to guard against open-sea UV reflection. If you are prone to motion sickness, keeping motion-sickness medication handy is vital before boarding. Ships like <a href="/mv-karnafully-express/290" class="text-blue-700 underline">MV Karnafully Express</a> and <a href="/mv-baro-awlia-ship/289" class="text-blue-700 underline">MV Baro Awlia Ship</a> feature internal cafes, but carrying personal water bottles, a power bank, and a light jacket for breezy evening returns is highly recommended.`
  }
];

const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a.replace(/<[^>]*>?/gm, ""), // remove HTML tags for structured data
    },
  })),
});

const SaintmartinFAQ = () => (
  <>
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema()),
        }}
      />
    </Head>
    <section className="text-gray-800 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Saint Martin Ships – Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqData.map((item, idx) => (
            <details
              key={idx}
              className="border rounded-lg p-5 bg-white shadow-sm"
            >
              <summary className="cursor-pointer text-lg font-semibold text-blue-900">
                {item.q}
              </summary>
              <div
                className="mt-3 text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.a }}
              />
            </details>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default SaintmartinFAQ;
