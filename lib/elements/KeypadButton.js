import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const KeypadButton = styled(Button)`
  && {
    font-size: 1.7em;
    padding: 0px;
    border-radius: 0;
    width: 25%;
    border: 3px solid #e0e0e0;
    border-radius: 8px !important;
    background: #fff;
    font-weight: 300;
    line-height: normal !important;
  }
`;

const ButtonWrapper = ({ value, click, disabled }) => (
  <KeypadButton onClick={() => click(value)} disabled={disabled}>
    {value}
  </KeypadButton>
);

ButtonWrapper.defaultProps = {
  value: undefined,
  disabled: false,
};

ButtonWrapper.propTypes = {
  click: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
};

export default ButtonWrapper;
