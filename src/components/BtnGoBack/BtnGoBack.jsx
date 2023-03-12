import { useNavigate, useLocation } from "react-router-dom";
import { Btn, BtnIcon } from "./BtnGoBack.styled";

const BtnGoBack = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onBackHandle = () => {
    location?.state?.from?.location
      ? navigate(location.state.from.location)
      : navigate("/");
  };
  return (
    <Btn type="button" onClick={onBackHandle}>
      <BtnIcon size="24" />
      GO BACK
    </Btn>
  );
};

export default BtnGoBack;
