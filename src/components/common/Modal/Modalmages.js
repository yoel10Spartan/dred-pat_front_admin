import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { File } from '../../common/File';
import { unitName } from '../../../const/unitName';
import { customStyles } from './CustomStyles'
import { getDirectories, getFiles, getRecords, insertImage, setDirectory } from '../../../stateManagement/actions/records';

import directorie from '../../../assets/img/directorie.jpg';
import image from '../../../assets/img/image.png';
import { Load } from '../Load';

export const Modalmages = ({isOpen, closeModal, id_lote, id_unit}) => {

    const { load } = useSelector(state => state.loading);
    const unit = unitName[id_unit];
    let unit_folder = '';

    if(unit){unit_folder = unit.folder}

    const dispatch = useDispatch();
    const { directories, files, urlDownloadFile, directory } = useSelector(state => state.records);

    useEffect(() => {
        dispatch( getDirectories(`Lot__${id_lote}`, unit_folder) );
    }, [id_lote, unit_folder, id_unit]);

    const getImages = (name_directory) => {
        const name = name_directory.replaceAll(' ', '__');
        dispatch( setDirectory( name ) );
        dispatch( getFiles(`Lot__${id_lote}/${name}`, unit_folder) );
    }

    const showImage = (name_image) => {
        const name = name_image.replaceAll(' ', '__');
        dispatch( insertImage(`Lot__${id_lote}/${directory}/${name}`, unit_folder) );
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
                <div className='container__images'>

                    {
                        load.loadDirectories ? <Load /> : (
                            directories.length !== 0 ? (
                                <>
                                    <div className='directories'>
                                        {
                                            directories.map(item => (
                                                <File 
                                                    redirectHandler={() => getImages(item.directory)}
                                                    fileName={item.directory}
                                                    renderingImage={directorie}
                                                />
                                            ))
                                        }
                                    </div>
                                    <div className='images'>
                                        <div className='view__image'>
                                            { urlDownloadFile 
                                                ? <img src={urlDownloadFile} alt='Imagen del lote' /> 
                                                : <p>¡Selecciona una imagen!</p>
                                            }
                                            
                                        </div>
                                        <div className='image__card'>
                                            {
                                                files.map(item => (
                                                    <File
                                                        redirectHandler={ () => showImage(item.file) }
                                                        fileName={item.file}
                                                        renderingImage={image}
                                                    />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </>
                            ) : <p>¡No hay imagenes para este lote!</p>
                        )
                    }
                </div>
            </Modal>
        </div>
    )
}
