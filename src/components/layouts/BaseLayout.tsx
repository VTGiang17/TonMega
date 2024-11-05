import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function BaseLayout() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}

export default BaseLayout;
