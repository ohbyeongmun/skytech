import React from 'react'
import { CFormCheck } from '@coreui/react';

const OrderDetail = () => {
    return (
        <div style={{ width: '90%', margin: '0 auto', marginTop: '2%', border: '2px solid #fff', backgroundColor: '#EDEDED', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)', borderRadius: 5, backgroundColor: '#fff', fontWeight: 500 }}>
            <div style={{ width: '90%', margin: '0 auto', textAlign: 'center', borderBottom: '1px solid grey' }}>
                <div style={{ display: 'inline-block', width: '40%', fontSize: '0.6rem' }}>
                    <div style={{ display: 'inline-block', width: '30%' }}>
                        <span>길이</span>
                    </div>
                    <div style={{ display: 'inline-block', width: '70%' }}>
                        <input type="text" style={{ width: '70%' }} />
                    </div>
                </div>
                <div style={{ display: 'inline-block', width: '60%', fontSize: '0.6rem' }}>
                    <span>LED</span>
                    <div style={{ display: 'inline-block' }}>
                        <CFormCheck id="LEDCheck" label="없음" />
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        <CFormCheck id="LEDCheck" label="포함" />
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        <CFormCheck id="LEDCheck" label="더밍기" />
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        <CFormCheck id="LEDCheck" label="타이머" />
                    </div>
                </div>
            </div>
            <div style={{ width: '90%', margin: '0 auto', textAlign: 'center', borderBottom: '1px solid grey', display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'inline-block', width: '40%', fontSize: '0.6rem' }}>
                    <div style={{ display: 'inline-block', width: '30%' }}>
                        <span>돌출</span>
                    </div>
                    <div style={{ display: 'inline-block', width: '70%' }}>
                        <input type="text" style={{ width: '70%' }} />
                    </div>
                </div>
                <div style={{ display: 'inline-block', width: '60%', fontSize: '0.6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span>물받이</span>
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        <CFormCheck id="LEDCheck" label="A형(기본)" />
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        <CFormCheck id="LEDCheck" label="낙수" />
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        <CFormCheck id="LEDCheck" label="별도제작" />
                    </div>
                </div>
            </div>
            <div style={{ width: '90%', margin: '0 auto', textAlign: 'center', borderBottom: '1px solid grey', display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'inline-block', width: '40%', fontSize: '0.6rem' }}>
                    <div style={{ display: 'inline-block', width: '30%' }}>
                        <span>물매높이</span>
                    </div>
                    <div style={{ display: 'inline-block', width: '70%' }}>
                        <input type="text" style={{ width: '70%' }} />
                    </div>
                </div>
                <div style={{ display: 'inline-block', width: '30%', fontSize: '0.6rem' }}>
                    <div style={{ display: 'inline-block', width: '30%' }}>
                        <span>수량</span>
                    </div>
                    <div style={{ display: 'inline-block', width: '70%' }}>
                        <input type="text" style={{ width: '70%' }} />
                    </div>
                </div>
                <div style={{ display: 'inline-block', width: '30%', fontSize: '0.6rem' }}>
                    <div style={{ display: 'inline-block', width: '30%' }}>
                        <span>원단</span>
                    </div>
                    <div style={{ display: 'inline-block', width: '70%' }}>
                        <input type="text" style={{ width: '70%' }} />
                    </div>
                </div>
            </div>
            <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ display: 'flex', width: '100%', fontSize: '0.6rem', alignItems: 'center', borderBottom: '1px solid grey' }}>
                    <div style={{ width: '40%', display: 'inline-block' }}>
                        <span>전면 브라켓</span><br />
                    </div>
                    <div style={{ width: '60%', display: 'inline-block', textAlign: 'left' }}>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="A형(기본)" />
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="C형(낙수형)" />
                        </div><br />
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="D형(중정형)" />
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="N형(트러스고정)" />
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="P형(돌출8m↑아치형)" />
                        </div>                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="별도제작" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ display: 'flex', width: '100%', fontSize: '0.6rem', alignItems: 'center', borderBottom: '1px solid grey' }}>
                    <div style={{ width: '40%', display: 'inline-block' }}>
                        <span>모터 종류</span><br />
                    </div>
                    <div style={{ width: '60%', display: 'inline-block', textAlign: 'left' }}>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="솜피220V" />
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="DKM 380V" />
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="DKM 220V" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ display: 'flex', width: '100%', fontSize: '0.6rem', alignItems: 'center', borderBottom: '1px solid grey' }}>
                    <div style={{ width: '40%', display: 'inline-block' }}>
                        <span>모터 방향</span><br />
                    </div>
                    <div style={{ width: '60%', display: 'inline-block', textAlign: 'left' }}>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="좌" />
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="우" />
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="중앙" />
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="상관없음" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ display: 'flex', width: '100%', fontSize: '0.6rem', alignItems: 'center' }}>
                    <div style={{ width: '40%', display: 'inline-block' }}>
                        <span>도장</span><br />
                    </div>
                    <div style={{ width: '60%', display: 'inline-block', textAlign: 'left' }}>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="기본 백색" />
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="블랙" />
                        </div><br />
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="지정색" />
                            <div style={{ display: 'inline-block' }}>
                                <input type="text" style={{ width: '40%' }} />
                            </div>
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="전체(메인바, 중간바 포함)" />
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="전체(메인바, 중간바 제외)" />
                        </div>                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="부분" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail
