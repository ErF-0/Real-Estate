import { BallTriangle, Bars, Oval, ThreeDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <ThreeDots
      color="#a62626"
      height={45}
      ariaLabel="three-dots-loading"
      visible={true}
      wrapperStyle={{ margin: "auto" }}
    />
  );
};

export default Loader;

const BarsLoader = () => {
  return (
    <Bars
      height="auto"
      width="20"
      color="#db0505"
      ariaLabel="bars-loading"
      visible={true}
      wrapperStyle={{ margin: "auto" }}
    />
  );
};
const OvalLoader = () => {
  return (
    <Oval
      height="auto"
      width="20"
      color="#fff"
      ariaLabel="oval-loading"
      visible={true}
      wrapperStyle={{ margin: "auto" }}
    />
  );
};

export { BarsLoader, OvalLoader };
