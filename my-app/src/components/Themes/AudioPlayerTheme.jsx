import styled from "styled-components";


export const AudioPlayerTheme = styled`
    width: 100%;
    background-color: ${props => props.theme.color};`

AudioPlayerTheme.defaultProps={
    theme:{color:'white'}
}