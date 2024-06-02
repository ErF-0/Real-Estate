import EstateProfile from "@/models/EstateProfile";
import AddProfilePage from "@/template/AddProfilePage";
import connectDB from "@/utils/connectDB";

const EditProfile = async ({ params: { profileId } }) => {
  await connectDB();
  const profile = await EstateProfile.findOne({ _id: profileId });
  if (!profile) return <h3>مشکلی پیش آمده ! لطفا دوباره امتحان کنید</h3>;
  return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />;
};

export default EditProfile;
