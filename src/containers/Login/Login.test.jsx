import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from './Login';
import { Container, TextField, Button, Grid } from '@material-ui/core';


configure({adapter: new Adapter()});

describe('<Login />', () => {
    jest.mock('react-i18next', () => ({
        // this mock makes sure any components using the translate HoC receive the t function as a prop
        withTranslation: () => Component => {
          Component.defaultProps = { ...Component.defaultProps, t: () => "" };
          return Component;
        },
      }));

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login />);
    })

    it('should render a <Container />', () => {
        expect(wrapper.find(Container)).toHaveLength(1);
    });

    it('should render both <TextField />s', () => {
        expect(wrapper.find(TextField)).toHaveLength(2);
    });

    it('should render a <Button />', () => {
        expect(wrapper.find(Button)).toHaveLength(1);
    });

    it('should render a container <Grid /> with two sub grids', () => {
        expect(wrapper.find(Grid)).toHaveLength(3);
    });
});