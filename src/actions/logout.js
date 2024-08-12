// rrd
import { redirect } from "react-router-dom";

// useJS function
import { deleteItem } from "../useJS";

// library
import { toast } from "react-toastify";

export async function logoutAction() {
  // delete user
  deleteItem({
    key: "userName",
  });

  deleteItem({
    key: "budgets",
  });

  deleteItem({
    key: "expenses",
  });

  toast.success("Deleted the account");

  // return redirect
  return redirect("/");
}
