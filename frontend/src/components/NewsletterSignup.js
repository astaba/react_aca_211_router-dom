import React from "react";

import classes from "./NewsletterSignup.module.css";

const NewsletterSignup = () => {
  return (
    <form method="post" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </form>
  );
};

export default NewsletterSignup;
