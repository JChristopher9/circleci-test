import React from "react";
import faker from "faker";
import { Login } from "./App";
import { shallow, mount } from "enzyme";

describe("<Login />", () => {
  const initialProps = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    dispatch: jest.fn(),
    usernameDispatch: jest.fn(),
  };

  let container = shallow(<Login {...initialProps} />);
  it("should have an email field", () => {
    expect(container.find('input[type="email"]').length).toEqual(1);
  });

  it("should render an email input", () => {
    const emailInput = container.find('input[type="email"]');

    const expectedProps = {
      type: "email",
      placeholder: "email",
      className: "mx-auto my-2",
      onBlur: expect.any(Function),
    };

    expect(emailInput.props()).toEqual(expectedProps);
  });

  it("should have an password field", () => {
    expect(container.find('input[type="password"]').length).toEqual(1);
  });

  it("should render an password input", () => {
    const passwordInput = container.find('input[type="password"]');
    const expectedProps = {
      type: "password",
      className: "my-2",
      onChange: expect.any(Function),
      value: initialProps.password,
    };

    expect(passwordInput.props()).toEqual(expectedProps);
  });

  it("should have a submit button ", () => {
    expect(container.find('input[type="button"]').length).toEqual(1);
  });

  it("should render an button input", () => {
    const button = container.find('input[type="button"]');
    const expectedProps = {
      type: "button",
      className: "btn btn-primary",
      onClick: expect.any(Function),
      value: "Submit",
      disabled: true,
    };
    expect(button.props()).toEqual(expectedProps);
  });

  it("should set the password value on change event with trim", () => {
    let password = faker.internet.password();
    container
      .find('input[type="password"]')
      .simulate("change", { target: { value: password } });
    expect(container.find('input[type="password"]').props().value).toEqual(
      password
    );
  });

  it("should dispatch", () => {
    const button = container.find('input[type="button"]');
    button.simulate("click");
    expect(button.prop("disabled")).toBeTruthy();
    expect(initialProps.dispatch).toHaveBeenCalled();
  });
});
