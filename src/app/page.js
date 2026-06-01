import Banner from "@/components/Banner/Banner";
import BlogSection from "@/components/BlogSection/BlogSection";
import { Contact } from "@/components/Contact/Contact";
import FAQSection from "@/components/FAQSection/FAQSection";
import ShipList from "@/components/ShipList/ShipList";
import SaintmartinFAQ from "@/components/SaintmartinFAQ/SaintmartinFAQ";


export default async function Home() {

  return (
    <main className="bg-gray-50 pt-9">
      <div>
        
        <Banner/>
        {/* <ShipList /> */}
       
        <SaintmartinFAQ />
         <Contact/>  
        <BlogSection />
      </div>
    </main>
  );
}
