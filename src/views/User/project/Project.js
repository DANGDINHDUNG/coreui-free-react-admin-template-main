import React from 'react'
import { useState, useRef } from 'react'
import { CSmartTable } from '@coreui/react-pro'
import {
  CCardBody,
  CButton,
  CCollapse,
  CRow,
  CCol,
  CContainer,
  CFormCheck,
  CInputGroup,
  CFormLabel,
  CFormInput,
  CInputGroupText,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CFormSelect,
  CModalFooter,
  CToast,
  CToastHeader,
  CToastBody,
  CToaster,
} from '@coreui/react'

const Project = () => {
  const [details, setDetails] = useState([])
  const [toast, addToast] = useState(0)
  const toaster = useRef()

  const columns = [
    {
      key: 'topicId',
      label: 'Id',
      filter: false,
      _style: { width: '5%' },
    },
    {
      key: 'topicName',
      _style: { width: '40%' },
    },
    {
      key: 'request',
      filter: false,
      sorter: false,
    },
    {
      key: 'description',
      filter: false,
      sorter: false,
    },
    {
      key: 'instructorId',
      sorter: false,
      _style: { width: '10%' },
    },
    {
      key: 'subjectId',
      sorter: false,
      filter: false,
      _style: { width: '10%' },
    },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
    },
  ]
  const usersData = [
    {
      id: 1,
      topic: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      request: 'Yêu thích lập trình Web',
      description: 'Project 1',
      instructor: 1,
      subject: 1,
    },
    {
      id: 2,
      topic: 'Ứng dụng đi chợ trực tuyến',
      request: 'Yêu thích lập trình Web',
      description: 'Project 1',
      instructor: 1,
      subject: 1,
    },
    {
      id: 3,
      topic: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      request: 'Yêu thích lập trình Web',
      description: 'Project 1',
      instructor: 1,
      subject: 1,
    },
    {
      id: 4,
      topic: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ănus',
      request: 'Yêu thích lập trình Web',
      description: 'Project 1',
      instructor: 1,
      subject: 1,
    },
    {
      id: 5,
      topic: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      request: 'Yêu thích lập trình Web',
      description: 'Project 1',
      instructor: 1,
      subject: 1,
    },
    {
      id: 6,
      topic: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ănu',
      request: 'Yêu thích lập trình Web',
      description: 'Project 1',
      instructor: 1,
      subject: 1,
    },
    {
      id: 7,
      topic: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      request: 'Yêu thích lập trình Web',
      description: 'Project 1',
      instructor: 2,
      subject: 1,
    },
    {
      id: 8,
      topic: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      request: 'Yêu thích lập trình Web',
      description: 'Project 1',
      instructor: 1,
      subject: 1,
    },
    {
      id: 9,
      topic: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      request: 'Yêu thích lập trình Web',
      description: 'Project 1',
      instructor: 1,
      subject: 1,
    },
    {
      id: 10,
      topic: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ănš',
      request: 'Yêu thích lập trình Web',
      description: 'Project 1',
      instructor: 1,
      subject: 1,
    },
  ]
  const studentCode = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
  ]

  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }
  const exampleToast = (
    <CToast>
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <div className="fw-bold me-auto">Notifications</div>
      </CToastHeader>
      <CToastBody>
        Đồ án đã được chuyển sang danh sách chờ được xét duyệt. Kiểm tra danh sách đồ án chờ được
        xét duyệt để tránh trường hợp có người đã đăng ký trước.
      </CToastBody>
    </CToast>
  )
  return (
    <div>
      <CContainer>
        <CRow>
          <CCol sm={8}>
            <CFormCheck
              button={{ color: 'success', variant: 'outline' }}
              type="radio"
              name="options-outlined"
              id="success-outlined"
              autoComplete="off"
              label="Project 1"
              defaultChecked
            />
            <CFormCheck
              button={{ color: 'danger', variant: 'outline' }}
              type="radio"
              name="options-outlined"
              id="danger-outlined"
              autoComplete="off"
              label="Project 2"
            />
          </CCol>
        </CRow>
      </CContainer>

      <CSmartTable
        activePage={2}
        columns={columns}
        columnFilter
        columnSorter
        items={usersData}
        itemsPerPageSelect
        itemsPerPage={20}
        pagination
        onFilteredItemsChange={(items) => {
          console.log(items)
        }}
        onSelectedItemsChange={(items) => {
          console.log(items)
        }}
        scopedColumns={{
          name: (item) => <td style={{ fontWeight: 'bold' }}>{item.name}</td>,
          show_details: (item) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    toggleDetails(item.id)
                  }}
                >
                  {details.includes(item.id) ? 'Hide' : 'Show'}
                </CButton>
              </td>
            )
          },
          details: (item) => {
            return (
              <CCollapse visible={details.includes(item.id)}>
                <CCardBody className="p-3">
                  <CFormLabel htmlFor="basic-url">Student&apos;s informations</CFormLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupText id="basic-addon1">Student&apos;s code 1:</CInputGroupText>
                    <CFormSelect
                      placeholder="Student 2"
                      type="comboBox"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="studentCode1"
                    >
                      <option value="">Please select</option>
                      {studentCode.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.id}
                        </option>
                      ))}
                    </CFormSelect>
                    <CInputGroupText id="basic-addon1">Student&apos;s code 2:</CInputGroupText>
                    <CFormSelect
                      placeholder="Student 2"
                      type="comboBox"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="studentCode2"
                    >
                      <option value="">Please select</option>
                      {studentCode.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.id}
                        </option>
                      ))}
                    </CFormSelect>
                  </CInputGroup>
                  <div className="gap-2 d-md-flex justify-content-md-end">
                    <CButton size="sm" color="info" onClick={() => addToast(exampleToast)}>
                      Register
                    </CButton>
                    <CToaster ref={toaster} push={toast} placement="top-end" />
                  </div>
                </CCardBody>
              </CCollapse>
            )
          },
        }}
        selectable
        sorterValue={{ column: 'status', state: 'asc' }}
        tableProps={{
          className: 'add-this-class',
          responsive: true,
          striped: true,
        }}
        tableBodyProps={{
          className: 'align-middle',
        }}
      />
    </div>
  )
}

export default Project
