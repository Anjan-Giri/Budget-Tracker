// library
import { toast } from "react-toastify";

// rrd
import { redirect } from "react-router-dom";

//useJS function
import { deleteItem, getAllMatchingItems } from "../useJS";

export function deleteBudget({ params }) {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });

    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });

    associatedExpenses.forEach((expenses) => {
      deleteItem({
        key: "expenses",
        id: expenses.id,
      });
    });

    toast.success("Deleted Successfully");
  } catch (e) {
    throw new Error("Budget not deleted due to some error.");
  }

  return redirect("/");
}
