import logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <img src={ logo } className="logo" alt="Huddle Logo" />
        <button>Try It Free</button>
      </div>
    </nav>
  );
}

export default Navbar;
