import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import EstateUser from "@/models/EstateUser";
import MyProfilesPage from "@/template/MyProfilesPage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

const MyProfiles = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);

  const [user] = await EstateUser.aggregate([
    {
      $match: { email: session.user.email },
    },
    {
      $lookup: {
        from: "estateprofiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  return <MyProfilesPage profiles={user.profiles} />;
};

export default MyProfiles;
