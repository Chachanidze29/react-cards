import styled from "styled-components";

const CustomButton = styled.button`
    padding:0.3rem 0.6rem;
    border:2px solid white;
    color:white;
    text-align:center;
    border-radius:10%;
    margin:1rem;
    background-color: ${props => props.isDark ? 'blue' : 'transparent'};
        
    &:hover {
        border:2px solid transparent;
        background-color:white;
        color: ${props => props.isDelete ? 'red' : 'green'};
    }
`

export default CustomButton;