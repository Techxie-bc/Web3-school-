import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary})=>(primary? 'green' : 'orange')
};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '24px 48px' : '6px 15px')};
    color: ${({ dark }) => (dark ? 'white' : 'black')};
    font-size: ${({ fontBig }) => (fontBig ? '24px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary})=>(primary? 'orange' : 'green')};
    }
     @media screen and (max-width: 480px) {
        padding: 6px 8px;
        font-size: 16px;
        width: 250px;
        

    } 
    @media screen and (max-width: 380px) {
        padding: 6px 10px;
        font-size: 16px;
        width:  11rem;

    }
    
`