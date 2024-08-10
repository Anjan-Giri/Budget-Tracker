// react-router-dom imports
import { Outlet, useLoaderData } from "react-router-dom";

//assests
import wave from "../assets/wave.svg";

// functions from useJS
import { fetchData } from "../useJS";

//components
import Nav from "../components/Nav";

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

function Main() {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
}

export default Main;
