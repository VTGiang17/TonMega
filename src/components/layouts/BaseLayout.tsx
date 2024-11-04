import { Outlet } from "react-router";
import Header from "./Header";

function BaseLayout() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default BaseLayout;
