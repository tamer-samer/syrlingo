import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Progress } from "./ui/progress";
import { QUESTS } from "@/constants";

type Props = {
  points: number;
};
export default function Quests({ points }: Props) {
  let counts = 0;
  return (
    <div className="border-2 rounded-xl p-4 space-y-4">
      <div className="w-full flex items-center justify-between">
        <h3 className="font-bold text-lg">Quests</h3>
        <Link href="/quests">
          <Button size={"sm"} variant={"primaryOutline"}>
            View all
          </Button>
        </Link>
      </div>
      <ul className="w-full">
        {QUESTS.map((quest) => {
          const progress = (points / quest.value) * 100;

          if (progress >= 100 || counts > 2) {
            return null;
          }
          counts++;
          return (
            <div
              key={quest.title}
              className="flex items-center w-full pb-4 gap-x-3"
            >
              <Image src={"/points.svg"} alt="Points" width={40} height={40} />
              <div className="flex flex-col gap-y-2 w-full">
                <p className="text-neutral-700 text-sm font-bold">
                  {quest.title}
                </p>
                <Progress value={progress} className="h-2" />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
