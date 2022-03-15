import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import IconCheck from 'react-icons/lib/md/delete-sweep';
import IconCancel from 'react-icons/lib/md/close';

import Button from './KeypadButton';
import Display from './Display';
import { media } from '../styles/media-templates';
import {SbmtButton, NButton} from './ui';
import MdBackspace from 'react-icons/lib/md/backspace';

const Backspace = styled.button`
  cursor: default;
  outline: none;
  font-size: 1.7em;
  padding: 0px;
    width: 25%;
    border: 3px solid #e0e0e0;
    border-radius: 8px !important;
    background: #fff;
    font-weight: 300;
  color: ${props => props.theme.header.primaryColor};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 264px;
  ${media.mobile`width: 100%;`} height: 40vh;
  background: ${props => props.theme.body.backgroundColor};
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;
`;

const Label = styled.div`
  overflow: hidden;
  font-size: 1.3em;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 5px;
  align-items: center;
  color: ${props => props.theme.header.secondaryColor};
  background: ${props => props.theme.header.backgroundColor};
  user-select: none;
  box-shadow:0 0 0 4px #e0e0e0;
`;

const Keys = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  button {
    border-bottom: 2px solid #ddd;
    border-right: 2px solid #ddd;
  }
  button:nth-child(4n) {
    border-right: none;
  }
  button:nth-child(-n + 4) {
    border-top: 2px solid #ddd;
  }
`;

class KeyPad extends Component {
  constructor(props) {
    super(props);
    this.state = { input: props.formatInputValue(props.value) };
    this.handleClick = this.handleClick.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.cancelLastInsert = this.cancelLastInsert.bind(this);
    this.cancelInsert = this.cancelInsert.bind(this);
    this.numericKeys = [...Array(10).keys()];
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDown);
  }

  componentWillUpdate(nextProps, nextState) {
    const { input } = this.state;
    const { sync, displayRule, validation, dateFormat, update } = this.props;
    if (sync && nextState.input !== input && validation(nextState.input, dateFormat)) {
      update(displayRule(nextState.input, dateFormat));
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown);
  }

  handleClickOutside(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const { validation, dateFormat, confirm, displayRule, cancel } = this.props;
    // const { input } = this.state;
    cancel();
    // if (validation(input, dateFormat)) {
    //   ,(displayRule(input, dateFormat));
    // } else {
    //   cancel();
    // }
  }

  cancelLastInsert() {
    this.setState(prevState => ({ input: prevState.input.slice(0, -1) }));
    setTimeout(() => { 
       if(this.state.input == ''){
          this.props.update()
        }
     }, 400)     
  }

  cancelInsert() {
    this.setState(prevState => ({ input: '' }));
    setTimeout(() => { 
       if(this.state.input == ''){
          this.props.update()
        }
     }, 400)     
  }

  keyDown(event) {
    event.preventDefault();
    const { key } = event;
    const { confirm, displayRule, dateFormat, cancel, validation } = this.props;
    const { input } = this.state;
    if (['Enter', 'Tab'].includes(key) && validation(input, dateFormat)) {
      confirm(displayRule(input, dateFormat));
    } else if (key === 'Backspace') {
      this.cancelLastInsert();
    } else if (['Escape', 'Tab'].includes(key)) {
      cancel();
    } else if (this.numericKeys.includes(parseInt(key, 10)) || key === '.' || key === '1' || key === '-') {
      this.handleClick(key);
    }
  }

  handleClick(key) {
    const { keyValid, dateFormat, keyValidator } = this.props;
    const { input } = this.state;
    if (keyValid(input, key, keyValidator || dateFormat)) {
      if (key === '-') {
        this.setState(prevState => ({
          input:
            prevState.input.charAt(0) === '-' ? prevState.input.substr(1) : `-${prevState.input}`,
        }));
      } else {
        this.setState(prevState => ({ input: prevState.input + key }));
      }
    }
  }

  render() {
    const {
      displayRule,
      validation,
      label,
      confirm,
      update,
      saveClick,
      clearClick,
      cancel,
      theme,
      keyValid,
      keyValidator,
      dateFormat,
    } = this.props;

    const { input } = this.state;

    return (
      <Content>
        <Header>
          <NButton onClick={cancel}>
            <IconCancel />
          </NButton>
          {/* <Label>{label}</Label> */}
          <SbmtButton
            onClick={() => saveClick()}
            disabled={!validation(input, dateFormat)}
          >
            {validation(input, dateFormat) ? 'Enter Guess' : 'Enter Valid Guess'}
          </SbmtButton>
          <NButton  className="clearBtn" onClick={()=>this.cancelInsert()}>
            <IconCheck />
          </NButton>
        </Header>
        <Display
          value={input}
          displayRule={displayRule}
          dateFormat={dateFormat}
          cancel={this.cancelLastInsert}
        />
        <Keys>
          {[1, 2, 3, 'BCK', 4, 5, 6, ' ', 7, 8, 9, '.', ' ', 0, ' ', ' '].map((key, index) => (
            // eslint-disable-next-line no-nested-ternary
            key !== undefined && String(key).trim() && key !== 'BCK' ? <Button
              key={`button-${key}`}
              theme={theme}
              click={clickedKey => this.handleClick(clickedKey)}
              value={key}
              disabled={!keyValid(input, key, keyValidator || dateFormat)}
            /> : key !== undefined && key !== 'BCK' ?  <Button
              // eslint-disable-next-line react/no-array-index-key
              key={`button-disabled-${index}`}
              theme={theme}
              click={() => {}}
              value={key || ' '}
              disabled={true}
            /> : <Backspace key='bck_key' onClick={this.cancelLastInsert}>
              <MdBackspace />
            </Backspace>
          ))}
        </Keys>
      </Content>
    );
  }
}

KeyPad.displayName = 'KeyPad';

KeyPad.propTypes = {
  label: PropTypes.string,
  theme: PropTypes.object,
  confirm: PropTypes.func.isRequired,
  saveClick: PropTypes.func.isRequired,
  clearClick: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  displayRule: PropTypes.func.isRequired,
  validation: PropTypes.func.isRequired,
  keyValid: PropTypes.func.isRequired,
  keyValidator: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  dateFormat: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sync: PropTypes.bool.isRequired,
  formatInputValue: PropTypes.func.isRequired,
};

KeyPad.defaultProps = {
  label: undefined,
  theme: undefined,
  dateFormat: '',
  keyValidator: undefined,
  value: '',
};

export default onClickOutside(KeyPad);
