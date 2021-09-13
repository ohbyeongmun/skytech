import React from 'react'
import { CFormCheck, CFormSelect } from '@coreui/react';
import './Order.css';

const OrderDetail = () => {
    return (
        <div id="DownMenu" style={{ width: '90%', margin: '0 auto', marginTop: '2%', border: '2px solid #fff', backgroundColor: '#EDEDED', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)', borderRadius: 5, backgroundColor: '#fff', fontWeight: 500 }}>
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
                        <CFormCheck id="LEDCheck" label="디밍기" />
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
                        <span>전면물받이</span>
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        <CFormCheck id="LEDCheck" label="A형(결합형)" />
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        <CFormCheck id="LEDCheck" label="A형(일체형)" />
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
                        <CFormSelect aria-label="Default select example" id="selectCategoryId" style={{ width: "100%" }}>
                            <option>Open this select menu</option>
                            <option value="1">흰색/일반(20183)</option>
                            <option value="2">연회색/일반(20001)</option>
                            <option value="3">아이보리/일반(20387)</option>
                            <option value="4">진회색/일반(20024)</option>
                            <option value="5">쥐색/일반(20205)</option>
                            <option value="6">브라운/일반(20165)</option>
                            <option value="7">검정색/일반(20007)</option>
                            <option value="8">네이비/일반(20189)</option>
                            <option value="9">와인/일반(20186)</option>
                            <option value="10">녹색/일반(20184)</option>
                            <option value="11">흰색/암막(20213)</option>
                            <option value="12">아이보리/암막(20211)</option>
                            <option value="13">연회색/암막(20209)</option>
                        </CFormSelect>
                    </div>
                </div>
            </div>
            <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ display: 'flex', width: '100%', fontSize: '0.6rem', alignItems: 'center', borderBottom: '1px solid grey' }}>
                    <div style={{ width: '20%', display: 'inline-block' }}>
                        <span>전면 브라켓</span><br />
                    </div>
                    <div style={{ width: '80%', display: 'inline-block', textAlign: 'left' }}>
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
                    <div style={{ width: '20%', display: 'inline-block' }}>
                        <span>모터 종류</span><br />
                    </div>
                    <div style={{ width: '80%', display: 'inline-block', textAlign: 'left' }}>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="Sompy 220V" />
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="준쉐이드 120TC" />
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="DKM 220V" />
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="DKM 380V" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ display: 'flex', width: '100%', fontSize: '0.6rem', alignItems: 'center', borderBottom: '1px solid grey' }}>
                    <div style={{ width: '20%', display: 'inline-block' }}>
                        <span>모터 방향</span><br />
                    </div>
                    <div style={{ width: '80%', display: 'inline-block', textAlign: 'left' }}>
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
                    <div style={{ width: '20%', display: 'inline-block' }}>
                        <span>분체도장</span><br />
                    </div>
                    <div style={{ width: '80%', display: 'inline-block', textAlign: 'left' }}>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="백색" />
                            <CFormCheck id="LEDCheck" label="블랙" />
                            <CFormCheck id="LEDCheck" label="지정색" />
                            <input type="text" style={{ width: '40%' }} />
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="전체(메인바, 중간바 포함)" />
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <CFormCheck id="LEDCheck" label="전체(메인바, 중간바 제외)" />
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <span>특이사항</span>
                            <input type="text" style={{ width: '40%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail
