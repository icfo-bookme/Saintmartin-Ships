import PaymentMethods from "@/components/PaymentMethods/PaymentMethods";
import Banner from "@/components/ui/Banner";
import CTAButtons from "@/components/ui/CTAButtons";
import ships from "@/data/ships.json";

export const metadata = {
  title: "Payment | MV The Wave — Luxury River Cruises from Khulna to Sundarbans",
  description: "Complete your payment securely for MV The Wave luxury river cruises. Confirm your booking, choose your payment method, and enjoy a seamless cruise experience.",
}


export default async function Page({ params }) {
  const id = await params.id;
  const ship = ships.find((s) => s.id === id);
  return (
    <div className="pt-0 bg-gray-50">
      <Banner
        imageUrl="/13.png"
        title="Payment Methods"
        subtitle=""
        heightClass=" h-[50vh] lg:h-[70vh]"
      />

      <PaymentMethods shipsName = {ship.title} />
      <CTAButtons />

    </div>
  )
}