import React, { useEffect, useRef, useState } from 'react'
import { ContainerPaguination } from '../../styles/paginationStyles';
import { range } from '../../utils/helpers';

export const Pagination = ({ 
    numberItems, 
    rangeItems, 
    activeElement, 
    totalElements,
    handlerFunction
}) => {
    
    const [ rangeHandler, setRangeHandler ] = rangeItems;

    // First element
    const first = rangeHandler[0]; // j
    
    // Last element
    const last = rangeHandler[rangeHandler.length-1]; // i

    const nextHandler = () => setRangeHandler(range(last, last+numberItems));
    const previousHandler = () => setRangeHandler(range(first-numberItems, first));

    return (
        <ContainerPaguination>
            <ul>
                <li onClick={previousHandler}>
                    <button disabled={first<=1 ? true: false}>
                        Anterior
                    </button>
                </li>
                {
                    rangeHandler.map(item => (
                        <li
                            className={activeElement===item ? 'active': ''}
                            onClick={() => handlerFunction(item)}
                        >
                            <p>{item}</p>
                        </li>
                    ))
                }
                <li onClick={nextHandler}>
                    <button disabled={last>=totalElements.current ? true: false}>
                        Siguiente
                    </button>
                </li>
            </ul>
        </ContainerPaguination>
    )
}