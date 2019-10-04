// modified example from react-testing-library,
// @see: https://testing-library.com/docs/react-testing-library/example-intro#full-example

import React from "react";
import { injectIntl, intlShape } from "react-intl";
import Button from "terra-button";

const propTypes = {
  intl: intlShape.isRequired
};

const defaultProps = {};

function ExampleComponent({ intl }) {
  const [greeting, setGreeting] = React.useState("");
  const [buttonClicked, setButtonClicked] = React.useState(false);

  function fetchGreeting() {
    setGreeting(intl.formatMessage({ id: "ExampleComponent.greeting" }));
    setButtonClicked(true);
  }

  const buttonText = buttonClicked
    ? intl.formatMessage({ id: "ExampleComponent.ok" })
    : intl.formatMessage({ id: "ExampleComponent.loadGreeting" });

  return (
    <div>
      <Button
        onClick={fetchGreeting}
        data-testid="ok-button"
        isDisabled={buttonClicked}
        text={buttonText}
      />
      {greeting ? <h1 data-testid="greeting-text">{greeting}</h1> : null}
    </div>
  );
}

ExampleComponent.propTypes = propTypes;
ExampleComponent.defaultProps = defaultProps;

export default injectIntl(ExampleComponent);
