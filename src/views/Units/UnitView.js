import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Load } from '../../components/common/Load';

import { ModalBoards } from '../../components/common/Modal/ModalBoards';
import { ModalGraphics } from '../../components/common/Modal/ModalGraphics';
import { Modalmages } from '../../components/common/Modal/Modalmages';

import { NotFound } from '../../components/layout/NotFound';
import { unitName } from '../../const/unitName';
import { getLoteUnit } from '../../stateManagement/actions/unit';
import { Button } from '../../styles/genericStyles';

export const UnitView = () => {
    
    const initModal = {
        graphics: false,
        boards: false,
        images: false
    }

    const { item } = useParams();
    const [unit, _] = useState(unitName[item]);
    const dispatch = useDispatch();
    const { unitDataLote } = useSelector(state => state.units);
    const { load } = useSelector(state => state.loading);
    const [modal, setModal] = useState(initModal);
    const [infoModal, setInfoModal] = useState({
        idLote: 0,
        idUnit: ''
    });

    useEffect(() => {
        dispatch( getLoteUnit(unit.id) );
    }, [item])

    // ========================================================================
    const openModal = (event, idLote, idUnit, typeModal) => {
        event.stopPropagation();
        event.preventDefault();
        setInfoModal({idLote, idUnit});
        setModal(items => {
            items[typeModal] = true;
            return items
        });
    }

    const closeModal = () => setModal(initModal);
    // ========================================================================

    if(!(item in unitName)){
        return <NotFound />
    }

    return (
        <div style={{
            width: 'calc(100vw - 300px)',
            height: 'calc(100vh - 60px)',
            overflowY: 'scroll',
            padding: '30px'
        }}>
            <ModalBoards
                isOpen={modal.boards} 
                closeModal={closeModal}
                id_lote={infoModal.idLote} 
                id_unit={infoModal.idUnit}
            />
            <Modalmages 
                isOpen={modal.images} 
                closeModal={closeModal}
                id_lote={infoModal.idLote} 
                id_unit={infoModal.idUnit}
            />
            <ModalGraphics 
                isOpen={modal.graphics} 
                closeModal={closeModal}
                id_lote={infoModal.idLote} 
                id_unit={infoModal.idUnit}
            />
            <p className='title__unit'>{unit.name}</p>
            {
                load.loadLoteUnit ? <Load /> : (
                    <div className='container__lotes'>
                        {
                            unitDataLote.map( item => (
                                <Link key={item.id} to='#' className='lote_item'>
                                    <p>{item.id}</p>
                                    <p>Lote - {item.Lot}</p>
                                    <Button
                                        onClick={(event) => openModal(event, item.id, unit.id, 'graphics')}
                                        style={buttonStyle}
                                    >
                                        Ver gráfica
                                    </Button>
                                    <Button 
                                        onClick={(event) => openModal(event, item.id, unit.id, 'boards')} 
                                        style={buttonStyle}
                                    >
                                        Ver tablas
                                    </Button>
                                    <Button 
                                        onClick={(event) => openModal(event, item.Lot, unit.id, 'images')}
                                        style={buttonStyle}
                                    >
                                        Ver imágenes
                                    </Button>
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

const buttonStyle = {
    margin: '5px',
    backgroundColor: '#873600'
}