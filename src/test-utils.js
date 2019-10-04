import React from "react";
import { IntlProvider } from "react-intl";
import { render } from "@testing-library/react";

// Create a message proxy to intercept calls to Intl and return the message key
// instead of the actual translation
const messageProxy = new Proxy({}, { get: (_, property) => property });

// Create the IntlProvider to retrieve context for wrapping around.
// Use the messageProxy from above as the messages object. Unit tests shouldn't
// care about the locale or actual messages, so default to "en"
function TestingProviders({ children }) {
  return (
    <IntlProvider locale="en" messages={messageProxy}>
      {children}
    </IntlProvider>
  );
}

// Created using guidance from react-testing-library custom renderers docs.
// @see: https://testing-library.com/docs/react-testing-library/setup#custom-render
function customRender(ui, options = {}) {
  return render(ui, { wrapper: TestingProviders, ...options });
}

// re-export everything from react-testing-library
export * from "@testing-library/react";

// override render method with our custom renderer
export { customRender as render };
