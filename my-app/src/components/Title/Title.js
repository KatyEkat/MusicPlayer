import styled from "styled-components";

export const Title = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    color: ${props => props.theme.color};
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;`

Title.defaultProps={
    theme:{color:'white'}
}