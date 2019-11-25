import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import CreateUser from "./CreateUser";
import {
  Container,
  Typography,
  Select,
  TextField,
  Button,
  Grid
} from "@material-ui/core";
import MultipleSelection from "./MultipleSelection";
import i18next from "react-i18next";
import { jsxEmptyExpression } from "@babel/types";

configure({ adapter: new Adapter() });

describe("<CreateUser />", () => {
  let wrapper;
  let testinstance;

  beforeEach(() => {
    wrapper = renderer.create(<CreateUser />);
    testinstance = wrapper.root;
  });

  it("should render 9 <TextField />s", () => {
    expect(testinstance.findAllByType(TextField)).toHaveLength(9);
  });

  it("should render a <Button />", () => {
    expect(testinstance.findAllByType(Button)).toHaveLength(1);
  });

  it("should render 1 <Container />s", () => {
    expect(testinstance.findAllByType(Container)).toHaveLength(1);
  });

  it("should render 1 <Typography />s", () => {
    expect(testinstance.findAllByType(Typography)).toHaveLength(3);
  });
});
