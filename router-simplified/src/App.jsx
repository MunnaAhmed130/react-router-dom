import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import BookList from "./components/BookList";
import Book from "./components/Book";
import NewBook from "./components/NewBook";
import BookLayout from "./components/BookLayout";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <nav className="">
        <Link to="/">Home</Link>
        <Link to="books">books</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
