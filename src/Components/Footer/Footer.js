import React from 'react'
import { history, home, setting, trade, wallet } from '../export';
import { Nav } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div id="Foot">
            <table id="FooterMenu">
                <thead>
                    <tr>
                        <th className="thMenu">
                            <button style={{ border: 'none', background: 'transparent', padding: '0' }} >
                                <img src={history} alt="" id="history" />
                                <span id="MenuText">History</span>
                            </button>
                        </th>
                        <th className="thMenu">
                            <Nav.Link href="/" id="LinkTag">
                                <img src={wallet} alt="" id="Wallet" />
                                <span id="MenuText">Wallet</span>
                            </Nav.Link>
                        </th>
                        <th className="thMenu">
                            <Nav.Link href="/" id="LinkTag">
                                <img src={home} alt="" id="HOME" />
                                <span id="MenuText">Home</span>
                            </Nav.Link>
                        </th>

                        <th className="thMenu">
                            <Nav.Link href="/" id="LinkTag">
                                <img src={trade} alt="" id="BTC" />
                                <span id="MenuText">Trade</span>
                            </Nav.Link>
                        </th>
                        <th className="thMenu">
                            <Nav.Link href="/" id="LinkTag">
                                <img src={setting} alt="" id="Setting" />
                                <span id="MenuText">Setting</span>
                            </Nav.Link>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Footer