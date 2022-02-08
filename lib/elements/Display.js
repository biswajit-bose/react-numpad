import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdBackspace from 'react-icons/lib/md/backspace';

const Wrapper = styled.div`
  display: flex;
  padding: 2px 5px 5px 8px;
  align-items: center;
  border: none;
  background: white;
`;

const Backspace = styled.button`
  cursor: default;
  outline: none;
  font-size: 1.7em;
  padding: 0px;
    border-radius: 0;
    width: 25%;
    border: 3px solid #e0e0e0;
    border-radius: 8px !important;
    background: #fff;
    font-weight: 300;



  color: ${props => props.theme.header.primaryColor};
`;

const Input = styled.input`
  &:read-only {
    cursor: not-allowed;
  }
  border-radius: 0px;
  cursor: default;
  background: transparent;
  font-size: 1.3em;
  outline: none;
  border: none;
  width: 100%;
  text-align: center;
  display:none;
`;
const Display = styled.div`
  flex-grow: 1;
  padding: 4px;
  display:none;
`;

const DisplayWrapper = ({ value, displayRule, dateFormat, cancel }) => (
  <Wrapper>
    <Display>
      <Input value={displayRule(value, dateFormat)} readOnly autoFocus />
    </Display>
    {/* <Backspace onClick={cancel}>
      <MdBackspace />
    </Backspace> */}
  </Wrapper>
);

DisplayWrapper.propTypes = {
  value: PropTypes.string.isRequired,
  displayRule: PropTypes.func.isRequired,
  dateFormat: PropTypes.string,
  cancel: PropTypes.func,
};

DisplayWrapper.defaultProps = {
  dateFormat: 'MM/DD/YYYY',
  cancel: () => {},
};

export default DisplayWrapper;
