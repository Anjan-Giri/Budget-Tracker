// rrd
import { useLoaderData } from "react-router-dom";

// useJS function
import { deleteItem, fetchData } from "../useJS";

// component
import Table from "../components/Table";

// library
import { toast } from "react-toastify";

// loader
export function expensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}

// action
export async function expensesAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success("Expense Deleted");
    } catch (e) {
      throw new Error("Expense not deleted due to some error.");
    }
  }
}

function ExpensesPage() {
  const { expenses } = useLoaderData();

  return (
    <div className="grid-lg">
      <h1>All Expenses</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Recent Expenses <small>({expenses.length} total)</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>No Expenses to show</p>
      )}
    </div>
  );
}

export default ExpensesPage;
