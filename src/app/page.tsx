// app/page.tsx or app/home/page.tsx (Next.js 13+ এর জন্য)
import AllProducts from "@/components/HomePage/AllProducts/AllProducts";
import Slider from "@/components/Slider/Slider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Full width Slider */}
      <div className="w-full">
        <Slider />
      </div>

      <AllProducts></AllProducts>
      
    </div>
  );
}
