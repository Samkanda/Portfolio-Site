import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__item">
                &copy; 2021 Navpreet Kanda. All Rights Reserved.
            </div>
            <div className="footer__item">
                <div className="footer__contact">Email: <a href="mailto:navpreetkanda1@hotmail.ca" className="footer__link">navpreetkanda1@hotmail.ca</a></div>
                <div className="footer__contact">Tel: <a href="tel: +6479092094" className="footer__link">+6479092094</a></div>
            </div>
        </footer>
    )
}

export default Footer
