import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CRow,
} from '@coreui/react-pro'

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

