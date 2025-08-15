import { useMedia } from "react-use";
import { CheckCircle, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
  status: "correct" | "wrong" | "none" | "completed";
  disabled?: boolean;
  lessonId?: number;
  onCheck: () => void;
};

const QuizFooter = ({ status, disabled, lessonId, onCheck }: Props) => {
  const isMobile = useMedia("max-width:1080px");

  return (
    <footer
      className={cn(
        "lg:h-[140px] h-[100px] border-t-2",
        status === "correct" && "border-transparent bg-green-100",
        status === "wrong" && "border-transparent bg-rose-100"
      )}
    >
      <div className="max-w-[1140px] h-full mx-auto flex items-center justify-between px-6 lg:px-10">
        {status === "correct" && (
          <div className="flex items-center gap-x-2 text-green-500 font-bold text-lg lg:text-2xl">
            <CheckCircle className="h-8 w-8 lg:h-10 lg:w-10" />
            Nicely done!
          </div>
        )}

        {status === "wrong" && (
          <div className="flex items-center gap-x-2 text-rose-500 font-bold text-lg lg:text-2xl">
            <XCircle className="h-8 w-8 lg:h-10 lg:w-10" />
            Try again!
          </div>
        )}

        {status === "completed" && (
          <Button
            variant="default"
            size={isMobile ? "sm" : "lg"}
            onClick={() => (window.location.href = `/lesson/${lessonId}`)}
          >
            Practice agin
          </Button>
        )}

        <Button
          onClick={onCheck}
          disabled={disabled}
          size={isMobile ? "sm" : "lg"}
          variant={status === "wrong" ? "danger" : "secondary"}
          className="ml-auto"
        >
          {status === "none" && "Check"}
          {status === "correct" && "Next"}
          {status === "wrong" && "Retry"}
          {status === "completed" && "Continue"}
        </Button>
      </div>
    </footer>
  );
};

export default QuizFooter;
