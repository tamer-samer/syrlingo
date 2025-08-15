import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  width?: number;
  height?: number;
  containerClasses?: string;
  titleClasses?: string;
};
export default function Logo({
  width = 50,
  height = 50,
  containerClasses,
  titleClasses,
}: Props) {
  return (
    <Link href="/">
      <div
        className={cn(
          "flex items-center justify-center gap-2",
          containerClasses
        )}
      >
        <Image src="/mascot.svg" width={width} height={height} alt="logo" />
        <h1
          className={cn(
            "text-2xl font-extrabold uppercase text-green-600 tracking-wide",
            titleClasses
          )}
        >
          syrlingo
        </h1>
      </div>
    </Link>
  );
}