// rrd
import { Form } from "react-router-dom";

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

//assets
import illustration from "../assets/illustration.jpg";

function Intro() {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal Budgeting helps improve your Life by grants you financial aid
          and freedom. Start budgeting today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="your name..."
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={25} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" />
    </div>
  );
}

export default Intro;
