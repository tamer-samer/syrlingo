import { currentUser } from "@clerk/nextjs/server";

export const getIsAdmin = async () => {
  const user = await currentUser();
  if (!user) return false;

  return user.publicMetadata.role === "admin";
};
