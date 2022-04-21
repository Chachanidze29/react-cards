import styled from "styled-components";

export const CardContainer = styled.div`
    display:flex;
    flex-flow: row wrap;
    align-items:center;
    border-radius:15%;
    cursor:pointer;
    width:250px;
    height:250px;
    margin:0.5rem;
    background-color: #6B5B95;
    color:white;
    
    transition: all 0.4s ease-out;
    ${props => props.isFrontShown ? 'transform: rotate(0);' : 'transform: rotate(360deg)'};
`;

export const CardFrontContainer = styled.div`
    ${props => props.isFrontShown ? 'display:block' : 'display:none'};
`

export const CardBackContainer = styled.div`
     padding:0.3rem;
     ${props => props.isFrontShown ? 'display:none' : 'display:block'};
     
     p {
        margin:0.2rem 0.5rem;
     }
`