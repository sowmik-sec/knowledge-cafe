import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };
  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + parseInt(time));
    // remove the read blog from bookmark
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };
  return (
    <>
      <Header />
      <main className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddToBookmark={handleAddToBookmark}
        />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </main>
    </>
  );
}

export default App;
