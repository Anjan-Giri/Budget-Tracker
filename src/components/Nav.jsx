// assets
import logomark from "../assets/logomark.svg";

function Nav({ userName }) {
  return (
    <nav>
      <img src={logomark} alt="" height={40} />
    </nav>
  );
}

export default Nav;
