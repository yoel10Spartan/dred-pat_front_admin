import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navigation,
    ContainerMenu,
    NavMenu,
    NavLogo,
    ItemMenu,
    ItemsMenu
} from '../../styles/headerStyles';
import { HoverMenu } from '../common/HoverMenu';

export const Header = ({itemsHeader, logo, logoHeader}) => {
    return (
        <Navigation>
            <ContainerMenu>
                <NavMenu>
                    <NavLogo>
                        <Link to={ logo.url }>{ logo.title }</Link>   
                    </NavLogo>

                    <ItemsMenu className='items__menu'>
                        {
                            itemsHeader.map(item => (
                                <Link
                                    key={item.id} 
                                    to={item.url}
                                >
                                    {item.title}
                                    {item.submenu ? <HoverMenu itemsMenu={item.submenu} /> : ''}
                                </Link>
                            ))
                        }
                    </ItemsMenu>

                </NavMenu>
            </ContainerMenu>
        </Navigation>
    )
}