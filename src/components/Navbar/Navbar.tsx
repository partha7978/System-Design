import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navBar__container">
      <div className="logo">Partha</div>
      <div className="navBar__links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
