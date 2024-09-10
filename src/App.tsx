import { Breadcrumb } from "./components/Breadcrumb";
import { UserDetail } from "./UserDetail";

function App() {
  const items1 = ["Home1", "Library1", "Date1"];
  const items2 = ["Home2", "Library2", "Date2"];

  return (
    <>
      <Breadcrumb items={items1} />
      <Breadcrumb items={items2} />
      <UserDetail />
    </>
  );
}

export default App;
