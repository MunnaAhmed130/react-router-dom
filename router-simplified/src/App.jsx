import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <nav className="">
        <Link to="/">Home</Link>
        <Link to="books">books</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="books" element={<BookList />} />
        {/* <Route path="" element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;
