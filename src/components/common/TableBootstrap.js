import React from 'react'

import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const TableBootstrap = ({title, itemsHead, itemsBody}) => {

    return (
        <div style={{
            overflowX: 'scroll'
        }}>
            <p className='title__unit'>{title}</p>
            <Table striped bordered hover>
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
                    <tr>
                        {
                            itemsBody.map( item => (
                                <td>{item}</td>
                            ))
                        }
                    </tr>  
                </tbody>
            </Table>
        </div>
    )
}
