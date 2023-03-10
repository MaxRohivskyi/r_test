import { Link } from "./Navigation.styled";

const Navigation = () => {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"auth"}>Login</Link>
    </nav>
  );
};

export default Navigation;
