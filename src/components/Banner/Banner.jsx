import Image from "next/image";
import Link from "next/link";
import galleryData from "@/data/ships.json";

const Banner = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center  py-4 lg:py-7">

      {/* Gallery Layout */}
      <div className="w-full min-h-screen h-[98%]  flex flex-col gap-1">
        {/* Row 1 - 4 images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1">
          {galleryData.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden  shadow-md bg-white"
            >
              <div className="w-full h-[50vh] relative">
                <Image
                  src={item.images}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <Link
                  href={`/${item.slug}/${item.id}`}
                  className="inline-block px-4 py-1 text-sm bg-white text-black rounded-full shadow hover:bg-gray-200 transition"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default Banner;
