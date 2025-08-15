import Promo from "@/components/promo";
import Quests from "@/components/quests";

type Props = {
  children: React.ReactNode;
  isPro: boolean;
  points?: number;
};
export default function StickyWrapper({ children, isPro, points }: Props) {
  return (
    <div className="hidden lg:block w-[368px] sticky self-end bottom-6">
      <div className="min-h-[calc(100vh-48px)] sticky top-6 flex flex-col gap-y-4">
        {children}
        {!isPro && <Promo />}
        {points != undefined && <Quests points={points} />}
      </div>
    </div>
  );
}
