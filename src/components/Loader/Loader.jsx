import { ThreeCircles } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeCircles
        height="100"
        width="100"
        color="rgb(0,176,200)"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="rgb(0,176,200)"
        innerCircleColor="rgb(182,254,167)"
        middleCircleColor="rgb(228,245,175)"
      />
    </LoaderWrapper>
  );
};

export default Loader;
