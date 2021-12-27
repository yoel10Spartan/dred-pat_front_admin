import styled from 'styled-components';

export const SubMenuUser = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-left: -20px;
    visibility: hidden;
    z-index: 1000000;
    background-color: #fff;
    font-size: 15px;
    width: 110px;
    height: auto;
    padding: 10px;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const ItemSubMenuUser = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    width: 100%;
    text-align: center;
    padding: 5px 1px;

    &:hover{
        background-color: #E5E8E8;
        border-radius: 5px;
    }
`;