import BlogSection from "@/components/BlogSection/BlogSection";
import { Contact } from "@/components/Contact/Contact";
import CruisePromo from "@/components/CruisePromo/CruisePromo";
import FAQSection from "@/components/FAQSection/FAQSection";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import Packages from "@/components/Packages/package";
import PaymentMethods from "@/components/PaymentMethods/PaymentMethods";
import Schedules from "@/components/Schedules/schedules";
import StepProcess from "@/components/Step/step";
import Banner from "@/components/ui/Banner";
import getFoodAndDescription from "@/lib/getFoodAndDescription";
import getPackages from "@/lib/getPackages";
import { getPropertyImages } from "@/lib/getPropertyImages";
import getSchedules from "@/lib/getSchedules";
import ships from "@/data/ships.json";

export default async function Home({params}) {
  const { id } = await params;
  const ship = ships.find((s) => s.id === id);

  const packages = await getPackages(id);
  const schedules = await getSchedules(id);
  const images = await getPropertyImages(id);
  const foodAndDescription = await getFoodAndDescription(id);
  return (
    <main className="bg-gray-50">
         
      <div>
        <Banner
          imageUrl={ship.bannerImage}
          ship={ship.title}
          title={ship.subtitle}
          route={ship.route}
          heightClass=" h-[65vh] lg:h-[100vh]"
        /> 
        <StepProcess />
        <Packages packages={packages} foodAndDescription = {foodAndDescription} shipsName = {ship.title} />
        <Schedules schedules ={schedules} shipsName = {ship.title} />
        <PaymentMethods shipsName = {ship.title} />
        <CruisePromo  shipsName = {ship.title} />
        <ImageCarousel propertyImages={images} />      
        <FAQSection shipsName = {ship.title} />
         <Contact shipsName = {ship.title} />  
        <BlogSection shipsName = {ship.title}/>
      </div>
    </main>
  );
}
