import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { customStyles } from './CustomStyles'
import { getDataUnit } from '../../../stateManagement/actions/unit';
import {CanvasJSChart} from 'canvasjs-react-charts';
import { Load } from '../Load';

Modal.setAppElement('#root');

export const ModalGraphics = ({isOpen, closeModal, id_lote, id_unit}) => {

    const dispatch = useDispatch();
    const { unitData } = useSelector(state => state.units);
    const { load } = useSelector(state => state.loading);

    let data = []

    if(id_lote && id_unit && unitData.length !== 0){
        data = unitData[0].ElevationCMBD || {};
    }

    useEffect(() => {
        dispatch( getDataUnit( id_unit, id_lote ) );
    }, [id_lote, id_unit]);

    const keysData = Object.keys(data);

    const points = [];
    keysData.forEach(item => {
        if(item !== 'id'){
            points.push({ y: data[item], label: item });
        }
    });

    const options = {
        animationEnabled: true,
        theme: "ligth",
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}",		
            startAngle: -90,
            dataPoints: points
        }]
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                className='modal'
                overlayClassName='modal-fondo'
            >
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
                {
                    load.lodaDataUnit ? <Load /> : (
                        <div>
                            <CanvasJSChart options={options} />
                        </div>
                    )
                }
            </Modal>
        </div>
    )
}
