function Header({ title }) {
  return (
    <nav className="navbar navbar-light bg-dark">
      <span className="navbar-text text-white">{title}</span>
    </nav>
  );
}

export default Header;
