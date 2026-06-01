"use client";

import Image from "next/image";
import Link from "next/link";

const BlogSection = ({shipsName}) => {
  const blogPosts = [
    {
      id: "1",
      slug: "mv-the-crown-luxury-cruise",
      title: `${shipsName || ''} Luxury River Cruise from Khulna to Sundarbans`,
      description: (
        <>
          Experience the ultimate <strong>{shipsName}</strong> journey on a <strong>luxury river cruise Bangladesh</strong>. Sail from <strong>Khulna to Sundarbans</strong> aboard one of the <strong>Saintmartin Ships</strong>, offering world-class amenities, stunning river views, and elegantly designed cabins. This <strong>Khulna Sundarbans cruise</strong> provides flexible <strong>{shipsName} booking</strong> options and convenient <strong>{shipsName} payment options</strong> via bKash, Nagad, or bank transfers. Travelers can enjoy a memorable <strong>Sundarbans cruise booking</strong>, choosing between an intimate <strong>couple cabin Sundarbans cruise</strong> or spacious <strong>family cabin Sundarbans tour</strong>. Guests can explore serene rivers, wildlife excursions, and breathtaking sunsets. For more information, visit our <Link href="/" className="text-blue-800 font-semibold">Home</Link> page, check the <Link href="/schedule" className="text-blue-800 font-semibold">Schedule</Link>, book your <Link href="/ticket" className="text-blue-800 font-semibold">Ticket</Link>, complete the process on the <Link href="/payment" className="text-blue-800 font-semibold">Payment Options</Link> page, or contact us via the <Link href="/contact" className="text-blue-800 font-semibold">Contact Us</Link> page. This <strong>luxury cruise Sundarbans</strong> experience is perfect for leisure travelers, families, and adventure seekers, ensuring safety, comfort, and unforgettable memories on one of the <strong>best ships of Sundarban</strong>. Secure your spot on the ultimate <strong>Sundarbans travel package</strong> and enjoy a premium <strong>Bangladesh cruise ship</strong> experience today.
        </>
      ),
      image: "/pro/img1.jpeg",
    },
    {
      id: "2",
      slug: "mv-the-crown-luxury-cabins",
      title: `${shipsName || ''} Luxury Cabins for Couples and Families`,
      description: (
        <>
          Discover the elegant <strong>{shipsName}</strong> cabins designed for couples and families on a <strong>premium cruise Bangladesh</strong>. Each cabin ensures privacy, comfort, and panoramic river views during your <strong>Khulna river cruise</strong>. Travelers can book <strong>Sundarbans river tour</strong> packages, selecting a cozy <strong>couple cabin Sundarbans cruise</strong> or spacious <strong>family cabin Sundarbans tour</strong>. Enjoy modern amenities, air-conditioning, plush bedding, and clean bathrooms for a safe and relaxing <strong>Sundarbans luxury tour</strong>. Flexible <strong>{shipsName} booking via bKash or Nagad</strong> and online <strong>Sundarbans cruise booking</strong> make reserving your trip simple. For quick navigation, visit <Link href="/" className="text-blue-800 font-semibold">Home</Link>, see the <Link href="/schedule" className="text-blue-800 font-semibold">Schedule</Link>, reserve your <Link href="/ticket" className="text-blue-800 font-semibold">Ticket</Link>, process payment on the <Link href="/payment" className="text-blue-800 font-semibold">Payment Options</Link>, or ask questions via <Link href="/contact" className="text-blue-800 font-semibold">Contact Us</Link>. This <strong>luxury cruise Sundarbans</strong> guarantees an extraordinary <strong>Sundarbans cruise for couples and families</strong> with excellent service, elegant cabins, and the best <strong>Bangladesh cruise ship</strong> experience. Plan your <strong>Sundarbans travel package</strong> today and enjoy one of the <strong>best ships of Sundarban</strong> for an unforgettable journey.
        </>
      ),
     image: "/pro/img3.jpeg",
    },
    {
      id: "3",
      slug: "mv-the-crown-sundarbans-adventure",
      title: `${shipsName || ''} Luxury Sundarbans Cruise Adventure from Khulna`,

      description: (
        <>
          Embark on a <strong>Sundarbans 3-day 2-night luxury tour</strong> aboard <strong>{shipsName}</strong>, the ultimate <strong>luxury cruise ship from Khulna to Sundarbans</strong>. Enjoy serene rivers, wildlife spotting, and guided excursions while staying in a <strong>couple cabin Sundarbans cruise</strong> or <strong>family cabin Sundarbans tour</strong>. Booking is effortless with <strong>{shipsName} booking via bKash or Nagad</strong>, bank transfers, or online <strong>Sundarbans cruise booking</strong>. Navigate easily using the <Link href="/" className="text-blue-800 font-semibold">Home</Link>, check our <Link href="/schedule" className="text-blue-800 font-semibold">Schedule</Link>, reserve a <Link href="/ticket" className="text-blue-800 font-semibold">Ticket</Link>, complete payment on the <Link href="/payment" className="text-blue-800 font-semibold">Payment Options</Link> page, or get support via <Link href="/contact" className="text-blue-800 font-semibold">Contact Us</Link>. This <strong>premium cruise Bangladesh</strong> experience is ideal for families, couples, and adventure seekers, combining luxury, safety, and elegance on one of the <strong>best ships of Sundarban</strong>. Take advantage of transparent <strong>{shipsName} ticket price</strong> and <strong>{shipsName} schedule</strong> while selecting your <strong>Sundarbans travel package</strong>. Make your <strong>Khulna Sundarbans cruise</strong> unforgettable and experience the finest <strong>luxury cruise Sundarbans</strong> in Bangladesh.
        </>
      ),
     image: "/pro/img2.jpeg",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center text-red-700 mb-10">Blog</h2>
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-md overflow-hidden shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl text-gray-950 font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700 text-sm whitespace-pre-line">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
