import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-gray-500 text-4xl font-bold tracking-tight sm:text-4xl">
          Infinite Choices, One Marketplace: <span className="text-black">UI-Base,</span> Your Source for Premier UI Kits.
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>Recent Products</Link>
          <Button variant="ghost">All products &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
