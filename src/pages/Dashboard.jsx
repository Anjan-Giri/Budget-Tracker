// react-router-dom imports
import { useLoaderData } from "react-router-dom";
// functions from useJS
import { fetchData } from "../useJS";
// loader
export function dashBoardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

function Dashboard() {
  const { userName } = useLoaderData();

  return <div>Dashboard</div>;
}

export default Dashboard;
