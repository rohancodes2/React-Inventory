import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import store from "../Redux/Store";
import { shallow, mount } from "./enzyme";
import ViewDetails from "./ViewDetails";

const mockStore = configureStore([]);

describe("My Connected React-Redux Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      products: [],
    });
  });
  //tests if required
});
