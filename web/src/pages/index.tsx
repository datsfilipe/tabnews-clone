import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { List } from "../components/List/List";
import { PostItem } from "../components/List/PostItem";

const post = {
  id: 1,
  title: "🥞 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  coins: 10,
  comments: 20,
  author: "John Doe",
  timestamp: "2023-07-01T12:00:00.000Z",
};

const generatePosts = () => {
  const items = Array(40).fill(post);

  return items.map((post, index) => (
    <PostItem
      key={post.id}
      title={post.title}
      index={index + 1}
      coins={post.coins}
      comments={post.comments}
      author={post.author}
      timestamp={post.timestamp}
    />
  ));
};

function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const posts = generatePosts();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <main className="container mx-auto p-6 max-w-5xl">
        <List items={posts} pageSize={30} />
        {showScrollButton && (
          <button
            className="flex items-center justify-center hover:bg-neutral-100 bg-white p-3 rounded-md fixed bottom-4 right-4"
            onClick={handleScrollToTop}
          >
            <span className="material-symbols-outlined text-[1.2rem] text-gray-500">
              expand_less
            </span>
          </button>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Home;
