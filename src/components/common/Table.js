import React from 'react'
import { ContainerTable, TableComponent } from '../../styles/tableStyles'

export const Table = ({itemsHead, itemsBody}) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <ContainerTable>
                <TableComponent>
                    <thead>
                        <tr>
                            {
                                itemsHead.map(item => (
                                    <th key={item}>{item}</th>            
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            itemsBody.map( item => (
                                <tr>
                                    {
                                        item.map( children => (
                                            <td>{children}</td>
                                        ))
                                    }
                                </tr>       
                            ))
                        }
                    </tbody>
                </TableComponent>
            </ContainerTable>
        </div>
    )
}
