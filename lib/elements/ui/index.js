import styled from 'styled-components';
import Color from 'color';

export const SbmtButton = styled.button`
color: ${props => props.theme.header.secondaryColor};
display: inline-block;
cursor: pointer;
min-width: 180px;
text-align: center;
margin: 5px auto;
height: auto ;
text-shadow: none !important;
font-weight: 600 !important;
font-size: 16px !important;
padding: 7px !important;
border-radius: 6px;


border:0px solid #34740e; -webkit-border-radius: 3px; -moz-border-radius: 3px;border-radius: 3px;font-size:12px;font-family:arial, helvetica, sans-serif; padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;text-shadow: -1px -1px 0 rgba(0,0,0,0.3);font-weight:bold; color: #FFFFFF;
 background-color: #4ba614; background-image: -webkit-gradient(linear, left top, left bottom, from(#4ba614), to(#008c00));
 background-image: -webkit-linear-gradient(top, #4ba614, #008c00);
 background-image: -moz-linear-gradient(top, #4ba614, #008c00);
 background-image: -ms-linear-gradient(top, #4ba614, #008c00);
 background-image: -o-linear-gradient(top, #4ba614, #008c00);
 background-image: linear-gradient(to bottom, #4ba614, #008c00);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#4ba614, endColorstr=#008c00);

 &:hover {
  border:0px solid #224b09;
  background-color: #36780f; background-image: -webkit-gradient(linear, left top, left bottom, from(#36780f), to(#005900));
  background-image: -webkit-linear-gradient(top, #36780f, #005900);
  background-image: -moz-linear-gradient(top, #36780f, #005900);
  background-image: -ms-linear-gradient(top, #36780f, #005900);
  background-image: -o-linear-gradient(top, #36780f, #005900);
  background-image: linear-gradient(to bottom, #36780f, #005900);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#36780f, endColorstr=#005900);
 }
`;

export const NButton = styled.button`
position: fixed;
  color: ${props => props.theme.header.secondaryColor};
  &:hover {
    color: ${props => props.theme.header.highlightColor};
  }
  cursor: pointer;
  border: none;
  background: transparent;
  font-size: 1.6em;
  padding: 0px 0px 2px 0px;
  :active,
  :focus {
    outline: none;
  }
  :disabled {
    pointer-events: none;
    cursor: now-allowed;
    color: ${props =>
      Color(props.theme.header.secondaryColor)
        .darken(0.4)
        .string()};
  }
`;
