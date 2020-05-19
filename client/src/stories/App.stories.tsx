import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Button", module)
  .add("with text", () => <button>Hello Button</button>)
  .add("with some emoji", () => (
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  ))
  .add("ari", () => <div>ari</div>);

storiesOf("Buttonlkjasdfk;ljasdf", module)
  .add("with text", () => <button>Hello Button</button>)
  .add("with some emoji", () => (
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  ))
  .add("ari", () => <div>ari</div>);
