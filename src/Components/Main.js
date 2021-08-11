import React, { useEffect } from 'react'
import { Login } from './index';
import { useHistory } from "react-router-dom";

const Main = () => {

    const history = useHistory();

    useEffect(() => {
        if (sessionStorage.getItem('naver_name') !== '' || sessionStorage.getItem('naver_name') !== null) {
            history.push('/Order');
        }
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#CFCFCF' }}>
            <Login />
        </div>
    )
}

export default Main