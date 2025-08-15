import { AppSidebar } from "@/components/ui/app-sidebar";
import {
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

type Props = {
  children: React.ReactNode;
};
export default function MainLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <div className="md:hidden p-3 px-5 bg-green-500 ">
          <SidebarTrigger />
        </div>
        <div className="max-w-[1056px] mx-auto pt-6 h-full">{children}</div>
      </main>
    </SidebarProvider>
  );
}
