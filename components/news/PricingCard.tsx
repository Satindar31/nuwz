import { Card, CardContent } from "@/components/ui/card";

import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function PricingCard({
  title,
  pricePerMonth,
  features,
}: {
  title: string;
  pricePerMonth: number;
  features: string[];
}) {
  return (
    <Card className="bg-black/5 relative w-[25rem] max-w-[30rem] flex flex-col items-center justify-start gap-8 p-6 lg:p-8 !pb-20 rounded-none">
      <Badge
        variant="outline"
        className="text-base font-normal font-sans border-black/25"
      >
        {title}
      </Badge>
      <h1 className='text-4xl flex items-center justify-center font-bold after:text-gray-600 after:text-sm after:font-medium after:content-["/mo"]'>
        ₹{pricePerMonth}
      </h1>
      <CardContent className="w-full flex flex-col items-start justify-start gap-1 px-2">
        {features.map((feature, k) => (
          <div
            key={k}
            className="flex items-center justify-start w-full gap-1 px-2"
          >
            <Check className="text-primary" />
            {feature}
          </div>
        ))}
      </CardContent>
      <Button className="absolute right-4 bottom-4">Buy</Button>
    </Card>
  );
}
