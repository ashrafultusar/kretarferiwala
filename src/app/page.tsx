// app/page.tsx or app/home/page.tsx (Next.js 13+ এর জন্য)
import Slider from "@/components/Slider/Slider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Full width Slider */}
      <div className="w-full">
        <Slider />
      </div>

      
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 max-w-7xl mx-auto w-full font-[family-name:var(--font-geist-sans)]">
    
        <h1 className="text-3xl font-bold">Welcome to my Website!</h1>
        <p className="text-lg">Here is your content...</p>
      </div>
    </div>
  );
}
