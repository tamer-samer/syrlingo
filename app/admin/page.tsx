import { getIsAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";
import AdminApp from "./admin-app";

const AdminPage = async () => {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    redirect("/");
  }
  return <AdminApp />;
};

export default AdminPage;
