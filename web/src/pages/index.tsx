import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { List } from "../components/List/List";

const data = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
];

function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

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
    <main>
      <Header />
      <div className="container mx-auto">
        <List items={data} pageSize={2} />
      </div>
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
      <Footer />
    </main>
  );
}

export default Home;
