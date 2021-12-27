import styled from 'styled-components';

export const Button = styled.button`
    padding: 10px;
    background: #fff;
    width: 120px;
    margin: 30px;
    border: none;
    background-color: #5D6D7E;
    color: #fff;
    border-radius: 5px;
    font-size: 15px;
    font-family: 'Rubik', sans-serif;
    transition: all .5s ease;

    &:hover{
        transform: scale(1.1);
        color: #fff;
    }

    &:focus{
        outline: none;
    }
`;

export const Banner = styled.div`
    display: flex;
    align-items: center;
    margin: 0 20px 0 20px;
    height: 50px;
    border: 1px solid #D5D8DC;
    padding: 0 0 0 15px;
`;