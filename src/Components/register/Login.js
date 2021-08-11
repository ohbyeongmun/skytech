import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
const Login = () => {

    const history = useHistory();

    const { naver } = window;
    const location = useLocation();
    const NAVER_CALLBACK_URL = 'http://skytech.or.kr';
    const NAVER_CLIENT_ID = 'zDJW7COC_WTyUnqKJoxT';

    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,
            isPopup: false,
            loginButton: { color: 'white', type: 1, height: '47' },
        });
        naverLogin.init();
        naverLogin.getLoginStatus(function (status) {
            console.log(status);
            if (status) { /* (5) 필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크 */ // 유저 아이디, 이메일 주소, 이름을 Session에 저장하였습니다. 
                sessionStorage.setItem("user_info", naverLogin.user.id);
                sessionStorage.setItem("naver_email", naverLogin.user.getEmail());
                sessionStorage.setItem("naver_name", naverLogin.user.getName()); // 네이버 로그인과 카카오 로그인을 구분하기 위해 별도의 세션을 저장합니다. 
                sessionStorage.setItem("kinds", "naver"); // 회원가입 혹은 로그인 시 처리하기 위한 페이지 입니다. 예를 들어 DB /* 인증이 완료된후 /sample/main.html 페이지로 이동하라는것이다. 본인 페이로 수정해야한다. */ 
                location.href = "/comuser/member/join/?flag=WRITE";
            }
            else {
                console.log("callback 처리에 실패하였습니다.");
            }
        });
    };

    const getNaverToken = () => {
        if (!location.hash) return;
        const token = location.hash.split('=')[1].split('&')[0];
        console.log(token);
    };

    useEffect(() => {
        initializeNaverLogin();
        getNaverToken();
    }, []);

    useEffect(() => {
        if (sessionStorage.getItem('naver_name') !== null) {
            history.push('/Order');
        }
        // if (sessionStorage.getItem('naver_name') === null) {
        //     history.push('/Order');
        // }
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '90%', margin: '0 auto', height: '50%' }}>
                <div style={{ textAlign: 'center' }}>
                    <span style={{ color: '#fff', fontWeight: 'bold' }}>네이버 계정으로 간편하게 로그인하세요.</span>
                </div>
                <div id='naverIdLogin' style={{ textAlign: 'center', marginTop: '10%' }} />
            </div>
        </div>
    )
}

export default Login;
