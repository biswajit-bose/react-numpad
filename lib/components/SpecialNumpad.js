import React from 'react';
import PropTypes from 'prop-types';
import NumPad from './NumPad';
import { display, validate, padding } from '../utils/date';
import { KeyPad } from '../elements';

const defaultProps = props => ({
  validation: (value = '') => {
    if (!value || !value.length) {
      return false;
    }
    let parts = value.split('.');
    let num = parts[0] ? parts[0] : null;
    let frac = parts[1] ? parts[1] : null;
    
    switch(props.gameType) {
      case 0:
        if (frac) {
          return false;
        }
        if (!num || num > 99) {
          return false;
        }
        break;
      case 1:
        if (num > 99) {
          return false;
        }
        if (frac >= 10) {
          return false;
        }
        break;
      case 2:
        if (num > 99) {
          return false;
        }
        if (frac >= 100) {
          return false;
        }
        break;
      default:
        break;
    }
    return true;
  },
  formatInputValue: value => value.toString(),
  keyValid: (value, key) => {
    let parts = value ? value.split('.') : [];
    let num = parts[0] ? parts[0] : '';
    let frac = parts[1] ? parts[1] : '';
    let isFrac = value && value.indexOf('.') >= 0;
    switch(key) {
      case '-':
        return false;
        break;
      case '.':
        if (props.gameType === 0) {
          return false;
        }
        if (isFrac) {
          return false;
        }
        break;
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        if (props.gameType === 0) {
          if (String(num).length >= 2) {
            return false;
          }
        } else if (props.gameType === 1) {
          if (String(num).length >= 2 && !isFrac) {
            return false;
          }
          // if(num == 0 & isFrac){
          //     return false;
          //   }
          if (isFrac && String(frac).length == 1) {
            return false;
          }
        } else if (props.gameType === 2) {
          if (String(num).length >= 2 && !isFrac) {
            return false;
          }
          // if(num == 0 & isFrac){
          //     return false;
          //   }
          if (isFrac && String(frac).length == 2) {
            return false;
          }
        }
        break;
      default:
        break;
    }
    return true;
  },
  displayRule: value => value.replace(/^(-)?0+(0\.|\d)/, '$1$2'),
  ...props,
});

const SpecialNumpad = props => (
  <NumPad {...props} customInput={props.children}>
    <KeyPad {...defaultProps(props)} />
  </NumPad>
);

SpecialNumpad.propsType = {
  gameType: PropTypes.number,
};

SpecialNumpad.defaultProps = {
  gameType: 0,
};

export default SpecialNumpad;
