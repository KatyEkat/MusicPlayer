import styled from "styled-components";

export const Subtitle = styled.h3`
    color: ${props => props.theme.color};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    margin-right: 15px;
`

Subtitle.defaultProps={
    theme:{color:'white'}
}