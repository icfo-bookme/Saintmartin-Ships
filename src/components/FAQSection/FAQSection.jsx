import React from "react";
import Link from "next/link";

const FAQSection = ({shipsName}) => {
  return (
    <section className="text-gray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center text-red-600 uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-xl font-bold leading-none text-center text-blue-950 sm:text-3xl">
          {shipsName} – Frequently Asked Questions (FAQ)
        </h2>

        <div className="flex flex-col divide-y text-gray-900 sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
               How many cabins are available?
            </summary>
            <div className="px-4 pb-4">
              <p>
                {shipsName} offers <strong>32 luxury cabins</strong>:
              </p>
              <ul className="list-disc pl-5">
                <li>18 Panorama Series (Main Deck)</li>
                <li>14 State Series (Lower Deck)</li>
              </ul>
              <p>
                Total capacity: approximately <strong>75 guests</strong>. Visit our <Link href="/" className="text-blue-800 font-semibold">Home</Link> page for more information.
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
               What is included in the 3-Day, 2-Night Sundarbans Cruise?
            </summary>
            <div className="px-4 pb-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>AC cabins with attached washrooms</li>
                <li>Full-board meals (breakfast, lunch, dinner, snacks, tea/coffee)</li>
                <li>BBQ dinner and onboard entertainment</li>
                <li>Forest entry permits & armed forest guards</li>
                <li>Canal boat rides, guided forest walks, wildlife exploration</li>
              </ul>
              <p className="mt-2">
                Check the <Link href="/schedule" className="text-blue-800 font-semibold">Schedule</Link> for your cruise.
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
               What is the typical itinerary?
            </summary>
            <div className="px-4 pb-4 space-y-1">
              <p><strong>Day 1:</strong> Khulna departure → Harbaria Eco-Center → Cruise to Kotka</p>
              <p><strong>Day 2:</strong> Sunrise canal ride → Kotka forest & beach → Kochikhali visit → BBQ & cultural program</p>
              <p><strong>Day 3:</strong> Morning ride → Koromjol Crocodile Center → Return to Khulna</p>
              <p className="mt-2">
                Book your <Link href="/ticket" className="text-blue-800 font-semibold">Ticket</Link> today.
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
               Are there age restrictions?
            </summary>
            <div className="px-4 pb-4">
              <p>No strict age limit. All guests must carry valid ID:</p>
              <ul className="list-disc pl-5">
                <li>Locals: NID</li>
                <li>Foreigners: Passport (extra government forest fees apply)</li>
              </ul>
              <p className="mt-2">
                For more details, <Link href="/contact" className="text-blue-800 font-semibold">Contact Us</Link>.
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
               What is the child policy?
            </summary>
            <div className="px-4 pb-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>Children under 3 years: Complimentary (no extra seat/bed)</li>
                <li>Children 3–8 years: 50% of adult fare (separate seat/meal provided)</li>
                <li>Children 8+ years: Full adult fare applies</li>
              </ul>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
               What payment methods are accepted?
            </summary>
            <div className="px-4 pb-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>50% advance required at booking</li>
                <li>Remaining balance before departure</li>
                <li>Accepted methods: Bank transfer, Bkash, Nagad</li>
              </ul>
              <p className="mt-2">
                Make payment via our <Link href="/payment" className="text-blue-800 font-semibold">Payment Options</Link> page.
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
               What is the cancellation policy?
            </summary>
            <div className="px-4 pb-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>28+ days before departure: Up to 80% refund</li>
                <li>Within 21 days: Partial or no refund (based on notice period)</li>
                <li>Trips may be rescheduled or cancelled due to weather, river conditions, or government restrictions</li>
              </ul>
              <p className="mt-2">
                For questions, <Link href="/contact" className="text-blue-800 font-semibold">Contact Us</Link>.
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
               What facilities are in the cabins?
            </summary>
            <div className="px-4 pb-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>Air-conditioning</li>
                <li>Private washroom</li>
                <li>Comfortable bedding with linens</li>
                <li>Wardrobe, sofa, mirror</li>
                <li>Large windows (or balcony in select cabins)</li>
              </ul>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
               What safety measures are onboard?
            </summary>
            <div className="px-4 pb-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>Life jackets & life buoys</li>
                <li>Fire safety & first-aid kits</li>
                <li>Modern navigation systems</li>
                <li>Experienced, trained crew</li>
              </ul>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
               What should I bring?
            </summary>
            <div className="px-4 pb-4">
              <ul className="list-disc pl-5 space-y-1">
                <li>Valid ID / Passport</li>
                <li>Comfortable clothing & shoes</li>
                <li>Light jacket for evenings</li>
                <li>Sunscreen, sunglasses, hat</li>
                <li>Mosquito repellent</li>
                <li>Personal medicines & essentials</li>
                <li>Camera (drone/pro filming requires prior permission)</li>
              </ul>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
               How do I book?
            </summary>
            <div className="px-4 pb-4">
              <p>For bookings & availability, contact:</p>
              <ul className="list-disc pl-5">
                <li>📞 <strong>+880 1841-666644</strong></li>
                <li>📞 <strong>+880 1841-333322</strong></li>
              </ul>
              <p className="mt-2">
                You can also navigate: <Link href="/" className="text-blue-800 font-semibold">Home</Link> | <Link href="/schedule" className="text-blue-800 font-semibold">Schedule</Link> | <Link href="/ticket" className="text-blue-800 font-semibold">Ticket</Link> | <Link href="/payment" className="text-blue-800 font-semibold">Payment Options</Link> | <Link href="/contact" className="text-blue-800 font-semibold">Contact Us</Link>
              </p>
            </div>
          </details>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
