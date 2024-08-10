// rrd
import { Form, NavLink } from "react-router-dom";

//library for icon
import { TrashIcon } from "@heroicons/react/24/solid";

// assets
import logomark from "../assets/logomark.svg";

function Nav({ userName }) {
  return (
    <nav>
      <NavLink tp="/" aria-label="Go to Home">
        <img src={logomark} alt="" height={30} />
        <span>BudgetTrack</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
}

export default Nav;
