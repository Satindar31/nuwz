import { cn } from "@/lib/utils";
import PricingCard from "../../news/PricingCard";
import Heading from "../Heading";

export default function Pricing({ className }: { className?: string }) {
  return (
    <div className={cn("w-full flex flex-row flex-wrap items-stretch justify-center min-[880px]:gap-0 gap-4", className)}>
      <Heading>Pricing</Heading>
      <p className="w-full text-center text-lg mb-8">Cost-effective pricing tailored to suit your needs</p>
      <PricingCard
        title={"Free"}
        pricePerMonth={0}
        features={[
          "Daily News",
          "Personalised Content",
          "Upto 10 Saved Articles",
        ]}
      />

      <PricingCard
        title={"Pro"}
        pricePerMonth={199}
        features={[
          "Daily + Old news",
          "Partial API Access",
          "Filtering and searching",
          "Upto 25 Saved Articles",
        ]}
      />

      <PricingCard
        title={"Custom"}
        pricePerMonth={999}
        features={[
          "Everything in Pro",
          "Unlimited Saved Articles",
          "Full API Access",
          "24/7 Support",
        ]}
      />
    </div>
  );
}
