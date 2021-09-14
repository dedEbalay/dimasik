import React from 'react';
import vk from '../../img/vk.svg';
import gmail from '../../img/gmail.svg';
import telegram from '../../img/telegram.svg';

function Footer() {
    return (
        <div className="footer py-5">
            <div className="footer-container container d-flex justify-content-between">
                <div className="footer__element vk-logo-container">
                    <a target="_blank" rel="noreferrer" className="footer-link vk-link d-flex align-items-center justify-content-center" href="https://vk.com/ebalay_adara_ilita">
                        <img className="vk-link__logo footer-logo" src={vk} alt="Моя тентакля"></img>
                        <div className="vk-link__text ml-2">Моя тентакля</div>
                    </a>
                </div>
                <div className="footer__element mail-link">
                    <a target="_blank" rel="noreferrer" className="footer-link mail-link d-flex align-items-center justify-content-center" href="mailto:lonshakov.max@gmail.com">
                        <img className="mail-link__logo gmail-logo footer-logo" src={gmail} alt="Моя жмейля" />
                        <div className="mail-link__text ml-2">lonshakov.max@gmail.com</div>
                    </a>
                </div>
                <div className="footer__element">
                    <a target="_blank" rel="noreferrer" className="footer-link telegram-link__text d-flex align-items-center justify-content-center" href="https://t.me/dedEbalay">
                        <img className="telegram-link__logo footer-logo" src={telegram} alt="Моя тележка"></img>
                        <div className="telegram-link__link__text ml-2">Моя тележка</div>
                    </a> 
                </div>
            </div>
        </div>
    )
}

export default Footer;