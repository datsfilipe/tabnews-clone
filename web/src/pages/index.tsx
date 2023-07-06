import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PostList } from "../components/List/PostList";

function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6 max-w-5xl">
        <PostList />
      </main>
      <Footer />
    </>
  );
}

export default Home;
