import React from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CRow,
} from '@coreui/react-pro'
import OneSignal from 'react-onesignal';

OneSignal.on('subscriptionChange', function (isSubscribed) {
  console.log("The user's subscription state is now:", isSubscribed);
});

const Landing = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCard className="p-4">
              <CCardBody>
                <h1>Landing Page</h1>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>

  )
}

export default Landing

