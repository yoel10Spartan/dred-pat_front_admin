import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Banner } from '../../styles/genericStyles';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { getRecords } from '../../stateManagement/actions/records';
import { usePathObjects } from '../../hook/usePathObjects';
import { useBuildPath } from '../../hook/useBuildPath';
import { convertPath } from '../../utils/helpers';

export const RoutesBanner = ({ mainElement }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const { title, url } = mainElement;
    const titleMain = convertPath(title);

    const itemsID = usePathObjects(pathname);
    const rebuildPath = useBuildPath();

    const handleID = (id, name) => {
        if(name === title){return navigate(url)}
        const reconstructedPath = rebuildPath(itemsID, id, titleMain);
        navigate(reconstructedPath);
        const pathUpdateData = reconstructedPath.replaceAll('--', '/');
        dispatch( getRecords(pathUpdateData.split(titleMain)[1]) );
    }
 
    return (
        <Banner>
            {
                itemsID.map(item => (
                    <div style={{
                        display: 'flex'
                    }}
                        onClick={() => handleID(item.id, item.name)}
                    >
                        <Link to='#' className='params__link'>{item.name}</Link>
                        <p style={{
                            margin: '0 15px 0 15px'
                        }}>/</p>
                    </div>
                ))
            }
        </Banner>
    )
}