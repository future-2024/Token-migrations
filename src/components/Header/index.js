
import React, { useState, useEffect, useContext } from 'react';
import Logo from '../../img/logo/logo-img.png';
import ETHLogo from '../../img/logo/eth-bg.png'
import './index.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Header = () => {
    return (
        <div className='header-section'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src={Logo} width={35} />
                </div>
                <div className='d-flex'>
                    <div className='bg-secondary-2 btn-round d-flex'>
                        <img src={ETHLogo} className='mr-2 eth-logo align-self-center' />
                        <span>Ethereum</span>
                    </div>
                    <div className='bg-secondary-2 btn-round'><p className=''>Connect wallet</p></div>
                </div>
            </div>
        </div>
    )
}

export default Header;
