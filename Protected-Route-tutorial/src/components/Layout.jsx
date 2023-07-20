import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="protected">Protected</Link>
        <Link to="login">Login</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
