import styled from "styled-components";

export const Buttons = styled.h3`
    border: none;
    background-color: transparent;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.color};
    border: 1px solid ${props => props.theme.color};
    border-radius: 60px;
    padding: 6px 20px;
    margin-bottom: 10px;
`

Buttons.defaultProps={
    theme:{color:'white'}
}