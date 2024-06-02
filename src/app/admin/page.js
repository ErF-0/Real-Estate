import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
//components
import DashboardSidebar from "@/layout/DashboardSidebar";
import AdminPage from "@/template/AdminPage";
//models
import EstateProfile from "@/models/EstateProfile";
import EstateUser from "@/models/EstateUser";

const Admin = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const user = await EstateUser.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");
  const unpublishedProfiles = await EstateProfile.find({ published: false });
  return (
    <DashboardSidebar role={user.role} email={user.email}>
      <AdminPage unpublishedProfiles={unpublishedProfiles} />
    </DashboardSidebar>
  );
};

export default Admin;
