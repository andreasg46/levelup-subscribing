import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CImage,
  CRow,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilBell } from '@coreui/icons'
const Dashboard = () => {
  function Subscribe() {
    const options = {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        app_id: `${process.env.REACT_APP_APP_ID}`,
        device_type: 0,
        tags: {
          email: 'test@gmail.com',
          status: 'active',
        },
      })
    };

    fetch('https://onesignal.com/api/v1/players', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Welcome to Level Up</h1>
                    <p className="text-medium-emphasis">Please subscribe to our notifications service</p>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={Subscribe}>
                          Subscribe <CIcon icon={cilBell} />
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-dark py-5" style={{ width: '34%' }}>
                <CCardBody className="text-center">
                  <div>
                    <CImage src={'favicon.png'} style={{ width: '50%' }} />
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
