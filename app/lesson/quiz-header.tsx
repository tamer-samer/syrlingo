import Image from "next/image";

import { Progress } from "@/components/ui/progress";
import { useExitModal } from "@/store/use-exit-modal";
import { InfinityIcon, X } from "lucide-react";

type Props = {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
};
const QuizHeader = ({ hearts, percentage, hasActiveSubscription }: Props) => {
  const { open } = useExitModal();

  return (
    <header className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between w-full max-w-[1140px] mx-auto ">
      <X
        onClick={open}
        className="text-slate-500 hover:opacity-75 transition-opacity cursor-pointer"
      />
      <Progress value={percentage} />
      <div className="text-rose-600 flex items-center font-bold ">
        <Image
          src="/heart.svg"
          alt="Heart"
          width={28}
          height={28}
          className="mr-2"
        />
        {hasActiveSubscription ? (
          <InfinityIcon className="h-6 w-6 stroke-[3] shrink-0" />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
};

export default QuizHeader;
