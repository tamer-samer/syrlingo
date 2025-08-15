"use client";

import Image from "next/image";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/Spinner";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 flex flex-col lg:flex-row items-center justify-center p-4 gap-2 w-full">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/hero.svg" fill alt="syrlingo" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h2 className="text-xl lg:text-3xl font-bold max-w-[480px] text-center text-neutral-600 ">
          Learn, practice and improve your Languages with Syrlingo
        </h2>
        <div className="flex flex-col items-center gap-y-3 w-full max-w-[330px]">
          <ClerkLoading>
            <Spinner />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal" fallbackRedirectUrl="/learn">
                <Button size="lg" className="w-full" variant="secondary">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal" fallbackRedirectUrl="/learn">
                <Button size="lg" className="w-full" variant="primaryOutline">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button variant="secondary" size="lg" className="w-full" asChild>
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}