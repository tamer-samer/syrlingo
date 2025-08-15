import Link from "next/link";
import { NotebookText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  title: string;
  description: string;
};
const UnitBanner = ({ title, description }: Props) => {
  return (
    <div className="w-full rounded-xl bg-green-500 p-5 text-white flex items-center justify-between">
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>

      <Link href={"lesson"}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size={"lg"}
              variant="secondary"
              className="border-2 border-b-4 active:border-b-2"
            >
              <NotebookText />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Continue Lesson</p>
          </TooltipContent>
        </Tooltip>
      </Link>
    </div>
  );
};

export default UnitBanner;
