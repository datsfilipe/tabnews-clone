import { useEffect, useState } from "react";
import { List } from "./List";
import { PostItem } from "./PostItem";

const post = {
  id: 1,
  title: "🥞 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  coins: 10,
  comments: 20,
  author: "John Doe",
  timestamp: "2023-07-01T12:00:00.000Z",
};

const generatePosts = (): JSX.Element[] => {
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

type PostListProps = {
  data?: JSX.Element[];
};

export function PostList({ data }: PostListProps) {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const posts = data || generatePosts();

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
    </>
  );
}
