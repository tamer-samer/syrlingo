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
import { useHeartsModal } from "@/store/use-hearts-modal";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";

export const HeartsModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { close, isOpen } = useHeartsModal();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const onClick = () => {
    close();
    router.push("/shop");
  };
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center justify-center w-full mb-5">
            <Image
              src={"/mascot_bad.svg"}
              width={80}
              height={80}
              alt="mascot"
            />
          </div>
          <DialogTitle className="text-center text-2xl font-bold">
            You ran out of hearts
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Get Pro for unlimited hearts, or purchase them in the store.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mb-4">
          <div className="flex flex-col w-full gap-y-2">
            <Button
              variant="primary"
              size={"lg"}
              className="w-full"
              onClick={onClick}
            >
              Get unlimited hearts
            </Button>
            <Button
              variant="primaryOutline"
              size={"lg"}
              className="w-full"
              onClick={close}
            >
              No thanks
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
