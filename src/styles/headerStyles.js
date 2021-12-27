import styled from 'styled-components';

export const Navigation = styled.div`
    position: relative;
    height: 70px;
    z-index: 10000;
    background-color: #fff;
    
`;

export const ContainerMenu = styled.div`
    max-width: 117rem;
    margin: 0 auto;
    padding: 0 1.6rem;
    
`;

export const NavMenu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 0 1rem;
`;

export const NavLogo = styled.div`
    &:nth-child(1){
        font-size: 35px;
        color: var(--black);
        padding: 1.6rem;
        letter-spacing: 3px;
        font-family: 'Oswald', sans-serif;
        user-select: none;

        a{
            text-decoration: none;
            color: #000;
        }
    }
`;

export const ItemsMenu = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-evenly;

    a{
        text-decoration: none;
        font-size: 18px;
        font-family: 'Rubik', sans-serif;
        color: #000;
        user-select: none;

        &:hover{
            color: #2C3E50;
            div {
                visibility: visible;
            }
        }
    }
`;

