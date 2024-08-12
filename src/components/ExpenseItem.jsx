// useJS function
import { formatCurrency, formatDateToLocaleString } from "../useJS";

function ExpenseItem({ expense }) {
  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocaleString(expense.createdAt)}</td>
    </>
  );
}

export default ExpenseItem;
