import { Breadcrumb } from "./components/Breadcrumb";
import { Like } from "./components/Like";
import { PrimaryButton } from "./components/PrimaryButton";
import { UserDetail } from "./UserDetail";

function App() {
  const items1 = ["Home1", "Library1", "Date1"];
  // const items2 = ["Home2", "Library2", "Date2"];

  return (
    <>
      <Breadcrumb items={items1} />
      <Breadcrumb items={[]} />
      <UserDetail />
      <PrimaryButton>button1</PrimaryButton>
      <PrimaryButton>button2</PrimaryButton>
      <>
        <Like />
      </>
    </>
  );
}

export default App;
