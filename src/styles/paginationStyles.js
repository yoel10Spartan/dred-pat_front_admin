import styled from 'styled-components';

export const ContainerPaguination = styled.div`
    height: 36px;
    margin: 36px 0 36px 0;
    display: flex;
    justify-content: center;

    ul{
        border-radius: 3px 3px 3px 3px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        display: flex;
        margin-bottom: 0;
        margin-left: 0;
        cursor: pointer;

        li{
            display: inline;

            p{
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 10px;
                max-width: 10px;
                max-height: 35px;
                min-width: 35px;
            }

            p, button{
                border-color: #DDDDDD;
                border-style: solid;
                border-width: 1px 1px 1px 1px;
                float: left;
                line-height: 34px;
                padding: 0 14px;
                display: flex;
            }
        }
    }

    & .active p{
        color: #999999;
        cursor: default;
    }
`;