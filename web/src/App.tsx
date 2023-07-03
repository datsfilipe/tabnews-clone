import { Header } from "./components/Header";
import { List } from "./components/List/List";
import "./global.css";

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

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <List items={data} pageSize={2} />
      </div>
    </>
  );
}

export default App;
