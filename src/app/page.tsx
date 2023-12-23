import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, Quote, Shield } from "lucide-react";

export default function Home() {
  interface PerkScheme {
    name: string;
    Icon: any;
    description: string;
  }

  const perks: PerkScheme[] = [
    {
      name: "Instant Delivery",
      Icon: ArrowDownToLine,
      description: "Get your digital asset instantly after purchase",
    },
    {
      name: "Secure Payment",
      Icon: Shield,
      description: "Pay with your credit card or cryptocurrency",
    },
    {
      name: "Quality Promise",
      Icon: Quote,
      description: "We guarantee the quality of every digital asset",
    },
  ];
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for{" "}
            <span className="text-blue-600">digital assets</span>
          </h1>
          <p className="mt-6 sm:text-xl max-w-prose text-muted-foreground">
            Welcome to digitalHippo. We are a marketplace for digital assets.
            Every assets on our platform is unique and are verified by our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={"/products"} className={buttonVariants()}>
              Browse Collections
            </Link>
            <Button variant={"ghost"}>Our quality promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-col-1 gap-y-12 sm:grid-col-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 ">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-100 text-blue-900">
                    <perk.Icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-4 lg:ml-0 lg:mt-6">
                  <div className="text-base font-medium text-gray-900">
                    {perk.name}
                  </div>
                  <div className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
