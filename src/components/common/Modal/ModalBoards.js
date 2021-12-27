import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { customStyles } from './CustomStyles'
import { getDataUnit } from '../../../stateManagement/actions/unit';
import { TableBootstrap } from '../TableBootstrap';
import { Load } from '../Load';

Modal.setAppElement('#root');

export const ModalBoards = ({isOpen, closeModal, id_lote, id_unit}) => {

    const dispatch = useDispatch();
    const { load } = useSelector(state => state.loading);
    
    useEffect(() => {
        dispatch( getDataUnit(id_unit, id_lote) );
    }, [id_lote, id_unit, dispatch]);
    
    const { unitData } = useSelector(state => state.units);

    const unit = unitData[0] || {'No se pudieron obtener los datos': {}}
    const keysUnit = Object.keys(unit);

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                className='modal'
                overlayClassName='modal-fondo'
            >
                <div style={{
                    padding: '0 50px'
                }} className='tables'>
                    <p 
                        className='title__unit'
                        style={{
                            fontWeight: '600', 
                            margin: '20px', 
                            border: '1px solid #27AE60'
                        }}
                    >
                        ID - LOTE {id_lote}
                    </p>
                    { load.lodaDataUnit ? <Load /> : (
                        keysUnit.map((item) => (
                            <TableBootstrap
                                key={item}
                                title={item}
                                itemsHead={Object.keys(unit[item])} 
                                itemsBody={Object.values(unit[item])}     
                            />
                        ))
                    )}
                </div>
            </Modal>
        </div>
    )
}