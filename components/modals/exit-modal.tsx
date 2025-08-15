"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../ui/dialog";
import Image from "next/image";
import { useExitModal } from "@/store/use-exit-modal";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";

export const ExitModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { close, isOpen } = useExitModal();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center justify-center w-full mb-5">
            <Image
              src={"/mascot_sad.svg"}
              width={80}
              height={80}
              alt="mascot"
            />
          </div>
          <DialogTitle className="text-center text-2xl font-bold">
            Wait don't go!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            You're about to leave the lesson. Are you sure?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mb-4">
          <div className="flex flex-col w-full gap-y-2">
            <Button
              variant="primary"
              size={"lg"}
              className="w-full"
              onClick={close}
            >
              Keep Learning
            </Button>
            <Button
              variant="dangerOutline"
              size={"lg"}
              className="w-full"
              onClick={() => {
                close();
                router.push("/learn");
              }}
            >
              End Lesson
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
