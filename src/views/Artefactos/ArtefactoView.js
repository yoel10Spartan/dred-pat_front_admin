import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Pagination } from '../../components/common/Pagination';
import { Table } from '../../components/common/Table';
import { NotFound } from '../../components/layout/NotFound';
import { tableID } from '../../const/tableID';
import { getColumnsTable, getRowsTable } from '../../stateManagement/actions/artefactos';
import { Load } from '../../components/common/Load';
import { useForm } from '../../hook/useForm';
import { range } from '../../utils/helpers';

const numberItems = 5;
const valid_items = ['litica', 'ceramica'];

export const ArtefactoView = () => {

    const { item } = useParams();
    const dispatch = useDispatch();
    const { load } = useSelector(state => state.loading);
    const { columnsTable, rowsTable, elementsTable } = useSelector(state => state.artefactos);
    const [ formValues, handleInputChange ] = useForm({ search: '' });
    const [ rangeHandler, setRangeHandler ] = useState(range(1, numberItems));
    const [ active, setActive ] = useState(1);
    const itemsShow = useRef(elementsTable);

    const { search } = formValues;
    const search_item = valid_items.includes(item);

    // ================= Table Elements ======================
    useEffect(() => {
        dispatch( getColumnsTable(tableID[item]) );
    }, [dispatch, item]);

    useEffect(() => {
        const operation = active*10;
        dispatch( getRowsTable( tableID[item], (operation-10), operation, search ) );
    }, [dispatch, item, search, active]);

    // ================== Pagination =========================
    useEffect(() => {
        itemsShow.current = Math.ceil(elementsTable/numberItems);
    }, [elementsTable]);

    useEffect(() => {
        setRangeHandler(range(1, numberItems));
        setActive(1);
    }, [item, search]);

    const handleItem = (numID) => {
        setActive(numID);
    }
    
    // ================ Table not available ==================
    if(!search_item){
        return <NotFound />
    }

    String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    return (
        <div style={{
            width: 'calc(100vw - 300px)',
            height: 'calc(100vh - 60px)',
            overflowY: 'scroll',
            overflowX: 'hidden',
            padding: '30px'
        }}>
            <h1>{item.toProperCase()}</h1>
            {load.loadTable && load.loadColumns ? <Load />: <Table itemsHead={columnsTable} itemsBody={rowsTable} />}
            <Pagination 
                numberItems={numberItems}
                rangeItems={[ rangeHandler, setRangeHandler ]}
                activeElement={ active }
                totalElements={ itemsShow }
                handlerFunction={ handleItem }
            />
        </div>
    )
}