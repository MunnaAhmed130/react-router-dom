import { Link, Outlet } from "react-router-dom";

const BookLayout = () => {
  return (
    <>
      <Outlet />
      <Link to="1">Book 1</Link>
      <br />
      <Link to="2">Book 2</Link>
      <br />
      <Link to="new">New Book</Link>
    </>
  );
};

export default BookLayout;
