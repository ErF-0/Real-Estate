import BuyResidentialPage from "@/template/BuyResidentialPage";

const BuyResidential = async ({ searchParams }) => {
  const res = await fetch(`${process.env.FETCH_URL}/api/profile`, {
    cache: "no-store",
  });
  const data = await res.json();
  let finalData = data.data;
  if (searchParams.category) {
    finalData = finalData.filter(
      (item) => item.category === searchParams.category
    );
  }
  if (data.error) return <h3>مشکلی پیش آمده است!</h3>;

  return <BuyResidentialPage data={finalData} />;
};

export default BuyResidential;
