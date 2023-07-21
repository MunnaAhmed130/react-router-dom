import { Link, Outlet, Route, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import BookList from "./components/BookList";
import Book from "./components/Book";
import NewBook from "./components/NewBook";
import BookLayout from "./components/BookLayout";
import NotFound from "./components/NotFound";
import BookRoutes from "./components/BookRoutes";
import About from "./components/About";

const NavLayout = () => {
  return (
    <>
      <nav className="">
        <Link to="/">Home</Link>
        <Link to="books">books</Link>
        <Link to="about">About</Link>
      </nav>
      <Outlet />
    </>
  );
};

function App() {
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <NavLayout />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />,
  //       },
  //       {
  //         path: "about",
  //         element: <About />,
  //       },
  //       {
  //         path: "books",
  //         element: <BookList />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <>
      {/* <Routes location="/books">
        <Route path="/books" element={<h1>Extra Content</h1>} />
      </Routes> */}
      <nav className="">
        <Link to="/">Home</Link>
        <Link to="books">books</Link>
      </nav>
      {/* {element} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="books/*" element={<BookRoutes />} />
        {/* <Route path="books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
