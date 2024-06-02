import EstateProfile from "@/models/EstateProfile";
import ProfileDetailsPage from "@/template/ProfileDetailsPage";
import connectDB from "@/utils/connectDB";

const profileDetails = async ({ params: { profileId } }) => {
  await connectDB();
  const profile = await EstateProfile.findOne({ _id: profileId });
  if (!profile) return <h3>مشکلی در سرور پیش آمده!</h3>;

  return <ProfileDetailsPage data={profile} />;
};

export default profileDetails;

export const generateMetadata = async ({ params: { profileId } }) => {
  await connectDB();
  const profile = await EstateProfile.findOne({ _id: profileId });
  return {
    title: profile.title,
    description: profile.description,
    authors: { name: profile.realEstate },
    other: { myTag: "test", realState: profile.realEstate },
    keywords: ["apartment", "sale"],
  };
};
