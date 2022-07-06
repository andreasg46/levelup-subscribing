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
import { isBrowser, isMobile } from 'react-device-detect';
import { cilBell } from '@coreui/icons'


function detectDeviceModel() {
  if (isMobile) {
    return 'Mobile';
  } else if (isBrowser) {
    return 'Browser';
  }
}

function detectBrowser() {
  if (navigator.userAgent.indexOf("Chrome") != -1) {
    return 5;
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    return 7;
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    return 8;
  } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
    return 'IE';//crap
  } else {
    return 'N/A';
  }
}


const Dashboard = () => {
  function Subscribe() {
    const options = {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        app_id: `${process.env.REACT_APP_APP_ID}`,
        device_model: detectDeviceModel(),
        device_type: detectBrowser(),
        identifier: '7abcd558f29d0b1f048083e2834ad8ea4b3d87d8ad9c088b33c132706ff445f0',
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
