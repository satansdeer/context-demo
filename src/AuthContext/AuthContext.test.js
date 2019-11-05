import React from "react";
import { AuthProvider, AuthContext } from "./AuthContext";
import { mount } from "enzyme";

// https://github.com/airbnb/enzyme/issues/1553

describe("AuthContext", () => {
  describe("login", () => {
    it("sets isLoggedIn status to true", () => {
      const TestComponent = () => {
        const { login, isLoggedIn } = React.useContext(AuthContext);

        return (
          <>
            <div data-testid="value">{isLoggedIn.toString()}</div>
            <button data-testid="button" onClick={login}>Login</button>
          </>
        );
      };

      const wrapper = mount(
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      );

      expect(wrapper.find('[data-testid="value"]').text()).toEqual("false");

      wrapper.find('button').simulate('click');


      expect(wrapper.find('[data-testid="value"]').text()).toEqual("true");
    });
  });
});
