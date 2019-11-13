import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SelectMultiple from "./SelectMultiple";
import { Grid } from "@material-ui/core";
import Select from "react-select";

configure({ adapter: new Adapter() });

describe("<SelectMultiple />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SelectMultiple />);
  });

  it("should render two <Select />", () => {
    expect(wrapper.find(Select)).toHaveLength(2);
  });

  it("should render a container <Grid /> with 2 sub grids", () => {
    expect(wrapper.find(Grid)).toHaveLength(3);
  });
});
