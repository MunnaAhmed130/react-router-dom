import { Route, Routes } from "react-router-dom";
import BookList from "./BookList";
import Book from "./Book";
import NewBook from "./NewBook";
import BookLayout from "./BookLayout";

const BookRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<BookLayout />}>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} />;
      </Route>
    </Routes>
  );
};

export default BookRoutes;
