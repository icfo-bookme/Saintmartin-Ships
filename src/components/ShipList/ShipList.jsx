"use client";

import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import ships from "@/data/ships.json";
import Link from "next/link";

export default function ShipList() {
    return (
        <div className="min-h-screen bg-gradient-to-r  py-10 px-6">
            <div className="mb-12">
                <h4 className="text-2xl mt-5 text-center text-blue-950 lg:text-3xl font-bold mb-2">
                    Explore Our Luxury <span className="text-red-700">Ships</span>
                </h4>
                <p className="text-gray-600 text-center">The Saintmartin Ships offer an unforgettable journey through the world’s largest mangrove <br /> forest, blending adventure, luxury, and serene natural beauty.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ships.map((ship) => (
                    <div
                        key={ship.id}
                        className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="relative w-full h-56">
                            <Image
                                src={ship.images}
                                alt={ship.title}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>

                        <div className="p-5">
                            <h2 className="text-xl font-semibold text-gray-900 mb-1">
                                {ship.title}
                            </h2>
                            <p className="text-gray-600 mb-3">{ship.subtitle}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {ship.amenities.slice(0, 3).map((amenity, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                                    >
                                        {amenity}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between">
                                <Link
                                    href={`/${ship.slug}/${ship.id}`}
                                    className="inline-block text-sm font-medium text-white bg-gradient-to-r from-[#313881] to-[#0678B4] px-4 py-2 rounded-lg hover:opacity-90 transition"
                                >
                                    View Details
                                </Link>

                                <div className="flex items-center ">
                                    <a
                                        href="tel:01841999922"
                                        className="ml-[1px] mt-[9px]"
                                    >
                                        <div className="phone-call md:w-[50px] md:h-[50px] w-[36px] h-[36px] ml-[15px]">
                                            <FaPhone className="md:ml-[17px] md:mt-[17px] mt-[8px] ml-[11px]" />
                                        </div>
                                    </a>
                                    <a
                                        href="https://wa.me/+8801841999922"
                                        className="mr-[10px] ml-[5px]"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="btn-whatsapp-pulse btn-whatsapp-pulse-border md:w-[50px] md:h-[50px] w-[36px] h-[36px] md:mt-[0px] mt-[-5px] ml-[15px]">
                                            <FaWhatsapp className="w-[25px] h-[25px] text-white" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
