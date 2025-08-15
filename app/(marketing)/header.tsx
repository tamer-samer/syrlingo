import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import Spinner from "@/components/ui/Spinner";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <div className="w-full h-20 border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg h-full mx-auto  flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Auth */}
        <ClerkLoading>
          <Spinner />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" fallbackRedirectUrl={"/learn"}>
              <Button size="lg" variant="ghost">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </div>
  );
}