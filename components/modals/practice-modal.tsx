"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../ui/dialog";
import Image from "next/image";
import { usePracticeModal } from "@/store/use-practice-modal";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";

export const PracticeModal = () => {
  const [isClient, setIsClient] = useState(false);
  const { close, isOpen } = usePracticeModal();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center justify-center w-full mb-5">
            <Image src={"/heart.svg"} width={80} height={80} alt="heart" />
          </div>
          <DialogTitle className="text-center text-2xl font-bold">
            Practice lesson
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Use practice lessons to regain hearts and points. You cannot loose
            hearts or points in practice lessons.
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
              I understand
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
