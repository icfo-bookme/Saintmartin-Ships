'use client';

import Image from 'next/image';
import crownImage from '../../../public/the-crown.jpg';
import { Roboto } from 'next/font/google';
import Link from 'next/link';
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
export default function CruisePromo({shipsName}) {
  return (
    <section className=" max-w-6xl mx-auto  text-gray-900 px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-5">
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
          Discover Royal Luxury <br />
          <span className="text-red-700">Aboard {shipsName}</span>
        </h2>

        {/* Stars */}
        <div className="text-yellow-500 text-xl space-x-1">
          {'★'.repeat(5)}
        </div>

        {/* Description */}
        <p className={`${roboto.className} text-gray-700 leading-relaxed text-justify`}>
          {shipsName} is a state-of-the-art luxury cruise ship offering an unparalleled sea journey along the stunning coastlines of Bangladesh. Designed with sophistication in mind, The Crown features lavish suites, world-class dining, panoramic decks, and exclusive lounge areas — redefining ocean travel for the modern explorer.
          <br /><br />
          Whether you are planning a romantic getaway, a corporate retreat, or a weekend escape, {shipsName} ensures a regal experience from the moment you step on board. Sail between Cox’s Bazar and Saint Martin in royal style and comfort, and let every wave tell a story of elegance and adventure.
        </p>
        <Link href="/get-a-call">
          <button style={{
            background: 'linear-gradient(90deg, #313881, #0678B4)',
          }} className="bg-indigo-700 mt-3 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-800 transition duration-300">
            Start Booking
          </button>
        </Link>
      </div>

      {/* Circular Image */}
      <div className="md:w-1/2 flex justify-center">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-[15px] border-gray-400 overflow-hidden shadow-lg relative">
          <Image
            src={crownImage}
            alt="{shipsName} Cruise Ship"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
