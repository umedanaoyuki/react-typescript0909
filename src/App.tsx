import { Breadcrumb } from "./components/Breadcrumb";
import { Form } from "./components/Form";
import { Like } from "./components/Like";
import { PostList } from "./components/PostList";
import { PrimaryButton } from "./components/PrimaryButton";
import { UserList } from "./components/UserList";
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
      <UserList />
      <Form />
      <PostList />
    </>
  );
}

export default App;
