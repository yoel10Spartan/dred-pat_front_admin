import styled from 'styled-components';

export const ContainerTable = styled.div`
    margin: 20px 35px 0 35px;
    width: 90vw;
    overflow-x: scroll;
    border-radius: 5px;
`;

export const TableComponent = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

    thead{
        tr{
            background-color: #009879;
            color: #ffffff;
            text-align: left;
            font-size: 13px;
        }
    }

    th, td {
        padding: 12px 15px;
    }

    tbody{
        tr{
            border-bottom: 1px solid #dddddd;

            &:nth-of-type(even){
                background-color: #f3f3f3;
            }

            &:last-of-type{
                border-bottom: 2px solid #009879;
            }
        }
    }
`;