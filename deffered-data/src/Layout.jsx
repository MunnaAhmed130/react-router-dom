import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="weather">Weather</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
