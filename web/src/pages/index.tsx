import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { List } from "../components/List/List";
import { Separator } from "../components/Separator";

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
  return (
    <main>
      <Header />
      <div className="container mx-auto">
        <List items={data} pageSize={2} />
      </div>
      <Separator />
      <Footer />
    </main>
  );
}

export default Home;
