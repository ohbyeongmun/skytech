import React, { useEffect, useState } from 'react'
import { CFormCheck } from '@coreui/react';
import {
    groupIcon, groupIcon2, basic, plaza, arch, dome, twin,
    can
} from '../export';
import { OrderDetail, Footer } from '../index';
import './Order.css';
import { useHistory } from "react-router-dom";

const Order = () => {

    const history = useHistory();

    return (
        <div style={{ width: '100%', backgroundColor: '#EDEDED' }}>
            <div style={{ width: '90%', margin: '0 auto', padding: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={groupIcon} alt="" />&nbsp;
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#1245AB' }}>발주서</span>
                </div>
            </div><br />
            <div style={{ width: '90%', margin: '0 auto', textAlign: 'center', fontSize: '0.8rem', color: '#FF3636' }}>
                <span>※희망 수신일은 최대한 맞추어 드리기 위해 기재해 주셔야 하며,</span><br />
                <span>본사 사정에 의해 조정될 수 있습니다.</span><br />
                <span>기본10일 소요, 밴딩시/돌출8M 이상시 <span style={{ fontWeight: 'bold' }}>14일↑</span> 소요</span>
            </div><br />
            <div id="TopMenu" style={{ padding: '10px', width: '90%', backgroundColor: '#fff', fontWeight: 'bold', border: '2px solid #fff', margin: '0 auto', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)', borderRadius: 5, fontSize: '0.8rem' }}>
                <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ width: '30%', display: 'inline-block' }}>
                        <span>현장명</span>
                    </div>
                    <div style={{ width: '70%', display: 'inline-block' }}>
                        <input type="text" style={{ width: '80%' }} placeholder="SKY TECH" />
                    </div>
                </div>
                <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ width: '30%', display: 'inline-block' }}>
                        <span>발주처</span>
                    </div>
                    <div style={{ width: '70%', display: 'inline-block' }}>
                        <input type="text" style={{ width: '80%' }} placeholder="NAVER" />
                    </div>
                </div>
                <div style={{ width: '90%', margin: '0 auto', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '30%', display: 'inline-block' }}>
                        <span>수신방법</span>
                    </div>
                    <div style={{ width: '70%', display: 'inline-block', fontSize: '0.5rem' }}>
                        <div style={{ width: '100%' }}>
                            <div style={{ width: '50%', display: 'inline-block' }}>
                                <CFormCheck id="flexCheckDefault" label="김포공장 픽업" style={{ display: 'inline-block' }} />
                            </div>
                            <div style={{ width: '50%', display: 'inline-block', textAlign: 'left' }}>
                                <CFormCheck id="flexCheckDefault" label="화물(지점명기재)" style={{ display: 'inline-block' }} />
                            </div>
                        </div>
                        <div style={{ width: '100%' }}>
                            <div style={{ width: '50%', display: 'inline-block' }}>
                                <CFormCheck id="flexCheckDefault" label="현장(주소기재)" style={{ display: 'inline-block' }} />
                            </div>
                            <div style={{ width: '50%', display: 'inline-block', textAlign: 'left' }}>
                                <CFormCheck id="flexCheckDefault" label="발주처" style={{ display: 'inline-block' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ width: '30%', display: 'inline-block' }}>
                        <span>수신지 주소</span>
                    </div>
                    <div style={{ width: '70%', display: 'inline-block' }}>
                        <input type="text" style={{ width: '80%' }} placeholder="서울시 구로구 고척1동 165-12" />
                    </div>
                </div>
                <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ width: '30%', display: 'inline-block' }}>
                        <span>연락처</span>
                    </div>
                    <div style={{ width: '70%', display: 'inline-block' }}>
                        <input type="text" style={{ width: '80%' }} />
                    </div>
                </div>
                <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ width: '30%', display: 'inline-block' }}>
                        <span>희망수신일</span>
                    </div>
                    <div style={{ width: '70%', display: 'inline-block' }}>
                        <input type="text" style={{ width: '80%' }} />
                    </div>
                </div>
                <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ width: '30%', display: 'inline-block' }}>
                        <span>공사예정일</span>
                    </div>
                    <div style={{ width: '70%', display: 'inline-block' }}>
                        <input type="text" style={{ width: '80%' }} />
                    </div>
                </div>
            </div><br />
            <div style={{ width: '90%', margin: '0 auto' }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={groupIcon2} alt="" />&nbsp;
                        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#1245AB' }}>스카이어닝 유형</span>
                    </div>
                </div><br />
                <div style={{ width: '90%', margin: '0 auto', textAlign: 'center', fontSize: '0.8rem', display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'inline-block', width: '33%' }}>
                        <div style={{ width: '90%', margin: '0 auto' }}>
                            <CFormCheck id="flexCheckDefault" label="직선형" style={{ display: 'inline-block' }} />
                            <img src={basic} alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                    <div style={{ display: 'inline-block', width: '33%' }}>
                        <div style={{ width: '90%', margin: '0 auto' }}>
                            <CFormCheck id="flexCheckDefault" label="프라자형" style={{ display: 'inline-block' }} />
                            <img src={plaza} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div style={{ display: 'inline-block', width: '33%' }}>
                        <div style={{ width: '90%', margin: '0 auto' }}>
                            <CFormCheck id="flexCheckDefault" label="아치형" style={{ display: 'inline-block' }} />
                            <img src={arch} alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                </div>
                <div style={{ width: '90%', margin: '0 auto', textAlign: 'center', fontSize: '0.8rem', display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'inline-block', width: '33%' }}>
                        <div style={{ width: '90%', margin: '0 auto' }}>
                            <CFormCheck id="flexCheckDefault" label="돔형(반원)" style={{ display: 'inline-block' }} />
                            <img src={dome} alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                    <div style={{ display: 'inline-block', width: '33%', fontSize: '0.6rem' }}>
                        <div style={{ width: '90%', margin: '0 auto' }}>
                            <CFormCheck id="flexCheckDefault" label="트윈형(아치양개)" style={{ display: 'inline-block' }} />
                            <img src={twin} alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                    <div style={{ display: 'inline-block', width: '33%' }}>
                        <div style={{ width: '90%', margin: '0 auto' }}>
                            <CFormCheck id="flexCheckDefault" label="캔틸레버형" style={{ display: 'inline-block' }} />
                            <img src={can} alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                </div>
            </div><br />
            <OrderDetail /><br />
            <div style={{ width: '90%', margin: '0 auto', textAlign: 'center', marginTop: '3%' }}>
                <div style={{ width: '50%', display: 'inline-block' }}>
                    <button style={{ backgroundColor: '#3669CF', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: 5, padding: '10px' }}>임시저장</button>
                </div>
                <div style={{ width: '50%', display: 'inline-block' }}>
                    <button style={{ backgroundColor: '#3669CF', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: 5, padding: '10px' }}
                        onClick={() => history.push('/details')}>다음</button>
                </div>
            </div><br />
            <Footer />
        </div>
    )
}

export default Order
