import styled from "styled-components";

export const Burger = styled.h2`
    color: ${props => props.theme.color};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 5px 0;
    text-decoration: none;
    min-width: 208px;`

Burger.defaultProps={
    theme:{color:'white'}
}