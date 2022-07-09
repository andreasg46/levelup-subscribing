import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CImage,
  CRow,
} from '@coreui/react-pro'
import OneSignal from 'react-onesignal';
import { AddTags } from './OneSignal';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');

  OneSignal.getUserId(function (userId) {
    setUserId(userId);
  });

  async function handleSubmit(event) {
    event.preventDefault();

    alert('Email Submitted!');
    await AddTags(userId, email);
    navigate("/landing");
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <h1>Welcome to Level Up</h1>
                  <p className="text-medium-emphasis">Please subscribe to our notifications service</p>
                  <CForm onSubmit={handleSubmit}>
                    <CCol xs={12}>
                      <CFormLabel htmlFor="inputState">Email</CFormLabel>
                      <CFormInput placeholder="Enter your email" aria-label="Email"
                        onChange={(e) => setEmail(e.target.value)} />
                    </CCol>
                    <br></br>
                    <CRow>
                      <CCol xs={8} ><CButton type='submit'>Submit email</CButton></CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard xs={12} className="p-4 bg-dark">
                <CCardBody>
                  <div className="text-center" style={{ marginTop: '30px' }}>
                    <CImage src={'favicon.png'} style={{ width: '60%' }} />
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>

  )
}

export default Dashboard
