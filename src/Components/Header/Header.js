import React, { useEffect, useState } from 'react'
import { Logo, myuser } from '../export';
import { useHistory } from "react-router-dom";

const Header = () => {
    const [user, setUser] = useState('연결된 정보 없음');

    // useEffect(() => {
    //     setUser(sessionStorage.getItem('naver_name'));
    // }, []);

    const history = useHistory();

    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', borderBottom: '1px solid grey' }}>
            <div style={{ display: 'inline-block', width: '30%', textAlign: 'center' }}>
                <img src={Logo} alt="" onClick={() => history.push('/')}/>
            </div>
            <div style={{ display: 'inline-block', width: '40%', textAlign: 'center', fontWeight: 'bold', color: '#00096F' }}>
                <span>SKY 발주서</span>
            </div>
            <div style={{ display: 'inline-block', width: '30%', textAlign: 'center', color: '#00096F', fontWeight: 'bold' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={myuser} alt="" />
                    <span style={{fontSize:'0.8rem'}}>{user}</span>
                </div>
            </div>
        </div>
    )
}

export default Header
