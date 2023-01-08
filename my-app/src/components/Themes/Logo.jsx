import styled from "styled-components";

export const Logo = styled.img`
    color: ${props => props.theme.color};
    width: 113px;
    height: 17px;
    background-color: transparent;
    margin-right: 94px;`

Logo.defaultProps={
    theme:{color:'white'}
}