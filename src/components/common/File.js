import React from 'react';
import { IconContext } from "react-icons";
import { BiDownload } from "react-icons/bi";

export const File = ({ 
    fileName, 
    redirectHandler, 
    renderingImage, 
    downloadHandler 
}) => {
    return (
        <div 
            onClick={redirectHandler ? () => redirectHandler(fileName) : () => {}} 
            className='container__record'
        >
            <div className='container__info'>
                <img src={renderingImage} />
                <p>{fileName}</p>
            </div>
            <IconContext.Provider value={{ 
                color: '#B2BABB',
                size: '1.2em',
                className: 'icono_svg'
            }}>
                <div onClick={downloadHandler ? (event) => downloadHandler(event, fileName) : () => {}}>
                    <BiDownload />
                </div>
            </IconContext.Provider>
        </div>
    )
}
