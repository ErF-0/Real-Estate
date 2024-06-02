import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import DashboardPage from "@/template/DashboardPage";
import EstateUser from "@/models/EstateUser";

const Dashboard = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  const { email } = session.user;
  const user = await EstateUser.findOne({ email });
  return <DashboardPage createdAt={user.createdAt} />;
};

export default Dashboard;
