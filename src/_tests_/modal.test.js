import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("close modal on certain actions", () => {
  it("should close modal when the close icon is clicked", () => {});

  it("should close modal when the save button is clicked after successful validation", () => {});
});

describe("preloads modal from redux store", () => {
  it("should display a text input preloaded with the budget from the company row", () => {});

  it("should display a div preloaded with the company name", () => {});
});

describe("input authentication", () => {
  it("validates input to accept only numbers that are not below budget");

  it("Inputing text updates the state", () => {});
});
