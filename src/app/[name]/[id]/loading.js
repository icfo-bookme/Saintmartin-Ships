import GlobalLoader from "@/components/ui/GlobalLoader";

export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <GlobalLoader />
    </div>
  );
}