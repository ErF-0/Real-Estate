import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import DashboardSidebar from "@/layout/DashboardSidebar";
import connectDB from "@/utils/connectDB";
import EstateUser from "@/models/EstateUser";

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/signin");
  await connectDB();
  const user = await EstateUser.findOne({ email: session.user.email });
  if (!user) return <h3>مشکلی در سرور پیش آمده است!</h3>;

  return (
    <DashboardSidebar role={user.role} email={user.email}>
      {children}
    </DashboardSidebar>
  );
};

export default DashboardLayout;
