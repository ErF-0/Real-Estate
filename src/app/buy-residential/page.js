import connectDB from "@/utils/connectDB";
import EstateProfile from "@/models/EstateProfile";
import BuyResidentialPage from "@/template/BuyResidentialPage";

const BuyResidential = async ({ searchParams }) => {
  await connectDB();
  const profiles = await EstateProfile.find({ published: true }).select(
    "-userId "
  );

  let finalData = profiles;
  if (searchParams.category) {
    finalData = finalData.filter(
      (item) => item.category === searchParams.category
    );
  }
  if (!profiles) return <h3>مشکلی پیش آمده است!</h3>;

  return <BuyResidentialPage data={finalData} />;
};

export default BuyResidential;
