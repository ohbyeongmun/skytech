import React, { useState, useEffect } from 'react'
import { CFormCheck, CButton } from '@coreui/react';
import { useHistory } from "react-router-dom";
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import { Footer } from '../index';

const Detail = () => {

    const history = useHistory();

    const sendEmail = () => {
        emailjs.init('user_FCN7Gu15TzKBOJxBMf7Ai');
        let templateParams = {
            info: '오병문',
            phone: '01049678337',
            email: 'dhqudans1234@naver.com',
            message: '발주합니다.',
        }
        console.log(templateParams);
        emailjs.send('service_bjrh581', 'template_8esyell', templateParams).then(function (response) {
            console.log('Success!', response.status, response.text);
        }, function (error) {
            console.log('Failed...', error);
        });
    }

    return (
        <div style={{ width: '100%', backgroundColor: '#EAEAEA' }}>
            <div style={{ width: '90%', margin: '0 auto' }}><br />
                <span style={{ fontWeight: 'bold' }}>※기둥 발주하는 경우, 아래칸 작성은 <span style={{ color: 'red' }}>필수</span> 입니다.</span><br /><br />
                <div style={{ width: '100%' }}>
                    <table id="worldDiv" style={{ width: '100%', margin: '0 auto', border: '1px solid #fff', padding: '10px', fontSize: '0.9rem', borderRadius: 10 }}>
                        <thead>
                            <th>재질</th>
                            <th>규격</th>
                            <th>길이(mm)</th>
                            <th>수량</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>알루미늄</td>
                                <td>100*140</td>
                                <td><input type="text" style={{ width: '90%', border: 'none' }} /></td>
                                <td><input type="text" style={{ width: '90%', border: 'none' }} /></td>
                            </tr>
                            <tr>
                                <td>알루미늄</td>
                                <td>100*140</td>
                                <td><input type="text" style={{ width: '90%', border: 'none' }} /></td>
                                <td><input type="text" style={{ width: '90%', border: 'none' }} /></td>
                            </tr>
                            <tr>
                                <td><input type="text" style={{ width: '90%', border: 'none' }} /></td>
                                <td><input type="text" style={{ width: '90%', border: 'none' }} /></td>
                                <td><input type="text" style={{ width: '90%', border: 'none' }} /></td>
                                <td><input type="text" style={{ width: '90%', border: 'none' }} /></td>
                            </tr>
                        </tbody>
                    </table><br />
                    <table id="worldDiv" style={{ width: '100%', margin: '0 auto', border: '1px solid #fff', padding: '10px', fontSize: '0.8rem', borderRadius: 10, textAlign: 'center' }}>
                        <thead>
                            <th style={{ width: '20%' }}>종류</th>
                            <th style={{ width: '40%' }}>구분</th>
                            <th style={{ width: '40%' }}>수량</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>상부용</td>
                                <td>플레이트 AL 4T</td>
                                <td><input type="text" style={{ width: '90%', border: 'none' }} /></td>
                            </tr>
                            <tr>
                                <td rowSpan="2">하부용</td>
                                <td>A형 (알루미늄)</td>
                                <td><input type="text" style={{ width: '90%', border: 'none' }} /></td>
                            </tr>
                            <tr>
                                <td>B형 (SUS 6T)</td>
                                <td><input type="text" style={{ width: '90%', border: 'none' }} /></td>
                            </tr>
                            <tr>
                                <td>B형 선택시</td>
                                <td>물구멍 필요 기둥수</td>
                                <td><input type="text" style={{ width: '90%', border: 'none' }} /></td>
                            </tr>
                        </tbody>
                    </table><br />
                    <div id="worldDiv" style={{ fontSize: '0.8rem', border: '1px solid #fff', borderRadius: 10 }}>
                        <span style={{ fontSize: '0.6rem', color: 'red' }}>※자세한 시공 계획을 알려주시면 정확한 단면도 작성이 가능합니다.</span><br /><br />
                        <div style={{ borderBottom: '2px solid #fff' }}>
                            <div style={{ display: 'inline-block', width: '50%' }}>
                                <span>전면금속</span>
                                <CFormCheck id="Check" label="없음" style={{ display: 'inline-block' }} />
                                <CFormCheck id="Check" label="설치" style={{ display: 'inline-block' }} />
                            </div>
                            <div style={{ display: 'inline-block', width: '50%' }}>
                                <span>규격</span>
                                <input type="text" placeholder="H:" style={{ display: 'inline-block', width: '30%' }} />
                                <input type="text" placeholder="D:" style={{ display: 'inline-block', width: '30%' }} />
                            </div>
                        </div>
                        <div style={{ borderBottom: '2px solid #fff' }}>
                            <div style={{ display: 'inline-block', width: '50%' }}>
                                <span>후면금속</span>
                                <CFormCheck id="Check" label="없음" style={{ display: 'inline-block' }} />
                                <CFormCheck id="Check" label="설치" style={{ display: 'inline-block' }} />
                            </div>
                            <div style={{ display: 'inline-block', width: '50%' }}>
                                <span>규격</span>
                                <input type="text" placeholder="H:" style={{ display: 'inline-block', width: '30%' }} />
                                <input type="text" placeholder="D:" style={{ display: 'inline-block', width: '30%' }} />
                            </div>
                        </div>
                        <div style={{ borderBottom: '2px solid #fff' }}>
                            <div style={{ display: 'inline-block', width: '50%' }}>
                                <span>ㄱ자앵글</span>
                                <CFormCheck id="Check" label="없음" style={{ display: 'inline-block' }} />
                                <CFormCheck id="Check" label="필요" style={{ display: 'inline-block' }} />
                            </div>
                            <div style={{ display: 'inline-block', width: '50%' }}>
                                <span>수신기형태</span>
                                <CFormCheck id="Check" label="매립형" style={{ display: 'inline-block', fontSize: '0.5rem' }} />
                                <CFormCheck id="Check" label="박스형" style={{ display: 'inline-block', fontSize: '0.5rem' }} />
                            </div>
                        </div>
                        <div style={{ borderBottom: '2px solid #fff' }}>
                            <div style={{ display: 'inline-block', width: '60%' }}>
                                <span>리모컨</span>
                                <CFormCheck id="Check" label="1CH" style={{ display: 'inline-block' }} />
                                <CFormCheck id="Check" label="2CH" style={{ display: 'inline-block' }} />
                                <CFormCheck id="Check" label="4CH" style={{ display: 'inline-block' }} />
                                <CFormCheck id="Check" label="8CH" style={{ display: 'inline-block' }} />
                            </div>
                            <div style={{ display: 'inline-block', width: '40%' }}>
                                <span>수량</span>
                                <input type="text" placeholder="EA" style={{ display: 'inline-block', width: '30%' }} />
                            </div>
                        </div>
                        <div style={{ borderBottom: '2px solid #fff' }}>
                            <div style={{ display: 'inline-block', width: '50%' }}>
                                <span>전면기둥 높이</span>
                                <input type="text" placeholder="mm" style={{ display: 'inline-block', width: '30%' }} />
                            </div>
                            <div style={{ display: 'inline-block', width: '50%' }}>
                                <span>후면기둥/벽 높이</span>
                                <input type="text" placeholder="mm" style={{ display: 'inline-block', width: '30%' }} />
                            </div>
                        </div>
                        <div style={{ borderBottom: '2px solid #fff' }}>
                            <div style={{ display: 'inline-block', width: '100%' }}>
                                <span>IOT 공유기</span>
                                <CFormCheck id="Check" label="포함" style={{ display: 'inline-block' }} />
                                <CFormCheck id="Check" label="불포함" style={{ display: 'inline-block' }} />
                            </div>
                        </div><br />
                        <div style={{ width: '80%', margin: '0 auto' }}>
                            <span>기타 참고사항</span><br />
                            <textarea placeholder="참고내용을 작성해주세요." style={{ width: '100%', height: '100px' }} />
                        </div><br />
                    </div><br />
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ display: "inline-block", width: '50%' }}>
                            <button style={{ backgroundColor: '#3669CF', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: 5, padding: '10px' }}
                                onClick={() => history.push('/Order')}
                            >이전화면</button>
                        </div>
                        <div style={{ display: "inline-block", width: '50%' }}>
                            <button onClick={sendEmail} style={{ backgroundColor: '#3669CF', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: 5, padding: '10px' }}>견적내용 제출</button>
                        </div><br /><br />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Detail
