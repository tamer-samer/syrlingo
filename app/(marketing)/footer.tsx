import { Button } from "@/components/ui/button";
import Image from "next/image";

const countries = [
  {
    name: "Spain",
    flag: "/es.svg",
  },
  {
    name: "France",
    flag: "/fr.svg",
  },
  {
    name: "Japan",
    flag: "/jp.svg",
  },
  {
    name: "Italy",
    flag: "/it.svg",
  },
  {
    name: "Croatia",
    flag: "/cr.svg",
  },
];
export default function Footer() {
  return (
    <div className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex justify-evenly items-center h-full">
        {countries.map((country) => (
          <Button size="lg" variant="ghost" key={country.name}>
            <Image
              src={country.flag}
              width={40}
              height={32}
              alt={country.name}
              className="mr-2 rounded-md"
            />
            {country.name}
          </Button>
        ))}
      </div>
    </div>
  );
}