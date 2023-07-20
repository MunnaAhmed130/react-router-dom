import { Link, Outlet } from "react-router-dom";

const fakeLogoutUser = () => {
  localStorage.setItem("loggedin", false);
};

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="protected">Protected</Link>
        <Link to="protected/nested">Nested</Link>
        <Link to="login">Login</Link>
        <button className="bg-gray-400 px-2" onClick={fakeLogoutUser}>
          x
        </button>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
