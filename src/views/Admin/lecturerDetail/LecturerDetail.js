import React from 'react'
import { useState, useEffect } from 'react'
import { CSmartTable } from '@coreui/react-pro'
import {
  CCardBody,
  CCard,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CContainer,
  CCol,
  CRow,
  CButton,
  CCollapse,
  CInputGroup,
  CFormLabel,
  CFormInput,
  CInputGroupText,
} from '@coreui/react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const LecturerDetail = () => {
  const { id } = useParams()
  const [details, setDetails] = useState([])
  const [item, setItem] = useState(null)
  const [activeKey, setActiveKey] = useState(1)
  const usersData = [
    {
      id: 1,
      name: 'Trần Anh Dũng',
      gender: 'Male',
      birth: '01/01/1999',
      hometown: 'Tp.HCM',
      address: 'xxx-yyy-zzz',
      email: 'adc@uit.edu.vn',
      phonenumber: '0987654321',
      degree: 'Thạc sĩ',
    },
    {
      id: 2,
      name: 'Trần Anh Dũng',
      gender: 'Male',
      birth: '01/01/1999',
      hometown: 'Tp.HCM',
      address: 'xxx-yyy-zzz',
      email: 'adc@uit.edu.vn',
      phonenumber: '0987654321',
      degree: 'Thạc sĩ',
    },
    {
      id: 3,
      name: 'Trần Anh Dũng',
      gender: 'Male',
      birth: '01/01/1999',
      hometown: 'Tp.HCM',
      address: 'xxx-yyy-zzz',
      email: 'Inadc@uit.edu.vn',
      phonenumber: '0987654321',
      degree: 'Thạc sĩ',
    },
    {
      id: 4,
      name: 'Trần Anh Dũng',
      gender: 'Male',
      birth: '01/01/1999',
      hometown: 'Tp.HCM',
      address: 'xxx-yyy-zzz',
      email: 'Padc@uit.edu.vn',
      phonenumber: '0987654321',
      degree: 'Thạc sĩ',
    },
    {
      id: 5,
      name: 'Trần Anh Dũng',
      gender: 'Male',
      birth: '01/01/1999',
      hometown: 'Tp.HCM',
      address: 'xxx-yyy-zzz',
      email: 'adc@uit.edu.vn',
      phonenumber: '0987654321',
      degree: 'Thạc sĩ',
    },
    {
      id: 6,
      name: 'Trần Anh Dũng',
      gender: 'Male',
      birth: '01/01/1999',
      hometown: 'Tp.HCM',
      address: 'xxx-yyy-zzz',
      email: 'adc@uit.edu.vn',
      phonenumber: '0987654321',
      degree: 'Thạc sĩ',
    },
    {
      id: 7,
      name: 'Trần Anh Dũng',
      gender: 'Male',
      birth: '01/01/1999',
      hometown: 'Tp.HCM',
      address: 'xxx-yyy-zzz',
      email: 'adc@uit.edu.vn',
      phonenumber: '0987654321',
      degree: 'Thạc sĩ',
    },
    {
      id: 8,
      name: 'Trần Anh Dũng',
      gender: 'Male',
      birth: '01/01/1999',
      hometown: 'Tp.HCM',
      address: 'xxx-yyy-zzz',
      email: 'Inadc@uit.edu.vn',
      phonenumber: '0987654321',
      degree: 'Thạc sĩ',
    },
    {
      id: 9,
      name: 'Trần Anh Dũng',
      gender: 'Male',
      birth: '01/01/1999',
      hometown: 'Tp.HCM',
      address: 'xxx-yyy-zzz',
      email: 'Padc@uit.edu.vn',
      phonenumber: '0987654321',
      degree: 'Thạc sĩ',
    },
    {
      id: 10,
      name: 'Trần Anh Dũng',
      gender: 'Male',
      birth: '01/01/1999',
      hometown: 'Tp.HCM',
      address: 'xxx-yyy-zzz',
      email: 'adc@uit.edu.vn',
      phonenumber: '0987654321',
      degree: 'Thạc sĩ',
    },
    {
      id: 11,
      name: 'Trần Anh Dũng',
      gender: 'Male',
      birth: '01/01/1999',
      hometown: 'Tp.HCM',
      address: 'xxx-yyy-zzz',
      email: 'adc@uit.edu.vn',
      phonenumber: '0987654321',
      degree: 'Thạc sĩ',
    },
    {
      id: 12,
      name: 'Trần Anh Dũng',
      gender: 'Male',
      birth: '01/01/1999',
      hometown: 'Tp.HCM',
      address: 'xxx-yyy-zzz',
      email: 'adc@uit.edu.vn',
      phonenumber: '0987654321',
      degree: 'Thạc sĩ',
    },
    {
      id: 13,
      name: 'Trần Anh Dũng',
      gender: 'Male',
      birth: '01/01/1999',
      hometown: 'Tp.HCM',
      address: 'xxx-yyy-zzz',
      email: 'Inadc@uit.edu.vn',
      phonenumber: '0987654321',
      degree: 'Thạc sĩ',
    },
    {
      id: 14,
      name: 'Trần Anh Dũng',
      gender: 'Male',
      birth: '01/01/1999',
      hometown: 'Tp.HCM',
      address: 'xxx-yyy-zzz',
      email: 'Padc@uit.edu.vn',
      phonenumber: '0987654321',
      degree: 'Thạc sĩ',
    },
    {
      id: 15,
      name: 'Trần Anh Dũng',
      gender: 'Male',
      birth: '01/01/1999',
      hometown: 'Tp.HCM',
      address: 'xxx-yyy-zzz',
      email: 'adc@uit.edu.vn',
      phonenumber: '0987654321',
      degree: 'Thạc sĩ',
    },
  ]
  const columns = [
    {
      key: 'name',
      _style: { width: '40%', fontSize: 17 },
      filter: false,
      sorter: false,
    },
    {
      key: 'student_1',
      _style: { fontSize: 17 },
      filter: false,
      sorter: false,
    },
    {
      key: 'student_2',
      _style: { fontSize: 17 },
      filter: false,
      sorter: false,
    },
    {
      key: 'description',
      _style: { fontSize: 17 },
      filter: false,
      sorter: false,
    },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
    },
  ]
  const topic = [
    {
      id: 1,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Trần Anh Dũng',
      description: 'Project 1',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'Nguyễn Gia Bảo',
      semester: 1,
      year: 2023,
      point: 10,
      status: 'Registered',
    },
    {
      id: 2,
      name: 'Ứng dụng đi chợ trực tuyến',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Trần Anh Dũng',
      description: 'Project 1',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'Nguyễn Gia Bảo',
      semester: 1,
      year: 2023,
      point: 10,
      status: 'Registered',
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
  useEffect(() => {
    // Find the item in the array based on the ID
    const selectedItem = usersData.find((item) => item.id === parseInt(id))
    setItem(selectedItem)
  }, [id])

  return (
    <div>
      {item ? (
        <div>
          <br />
          <h1 style={{ fontSize: 20 }}>Lecturer profile</h1>
          <CContainer style={{ fontSize: 18 }}>
            <CRow>
              <CCol xs={3} style={{ paddingLeft: 0 }}>
                <CCard>
                  <CCardBody>
                    <p>{item.name}</p>
                    <p>
                      <strong>Degree: </strong>
                      {item.degree}
                    </p>
                    <p>
                      <strong>Gender: </strong>
                      {item.gender}
                    </p>
                    <p>
                      <strong>Birthday: </strong>
                      {item.birth}
                    </p>
                    <p>
                      <strong>Hometown: </strong>
                      {item.hometown}
                    </p>
                    <p>
                      <strong>Address: </strong>
                      {item.address}
                    </p>
                    <p>
                      <strong>Phone Number: </strong>
                      {item.phonenumber}
                    </p>
                    <p>
                      <strong>Email: </strong>
                      {item.email}
                    </p>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs={9}>
                <CCard>
                  <CCardBody>
                    <CNav variant="tabs">
                      <CNavItem>
                        <CNavLink active={activeKey === 1} onClick={() => setActiveKey(1)}>
                          Projects guide
                        </CNavLink>
                      </CNavItem>
                    </CNav>
                    <CTabContent>
                      <CTabPane visible={activeKey === 1}>
                        <CSmartTable
                          columns={columns}
                          items={topic}
                          scopedColumns={{
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
                                    <CFormLabel htmlFor="basic-url">Details</CFormLabel>
                                    <CInputGroup className="mb-3">
                                      <CInputGroupText id="basic-addon1">Semester</CInputGroupText>
                                      <CFormInput
                                        placeholder="Student 1"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        defaultValue={item.semester}
                                        readOnly
                                      />
                                      <CInputGroupText id="basic-addon1">Year</CInputGroupText>
                                      <CFormInput
                                        placeholder="Student 2"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        defaultValue={item.year}
                                        readOnly
                                      />
                                      <CInputGroupText id="basic-addon1">Point</CInputGroupText>
                                      <CFormInput
                                        placeholder="Student 2"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        defaultValue={item.point}
                                        readOnly
                                      />
                                    </CInputGroup>
                                    <CFormLabel htmlFor="basic-url">Project</CFormLabel>
                                    <CInputGroup className="mb-3">
                                      <Link to={`/projectDetail/${item.id}`}>
                                        {/* Use the CoreUI button component */}
                                        <CButton color="primary">More detail</CButton>
                                      </Link>
                                    </CInputGroup>
                                  </CCardBody>
                                </CCollapse>
                              )
                            },
                          }}
                          sorterValue={{ column: 'status', state: 'asc' }}
                          tableProps={{
                            className: 'add-this-class',
                            responsive: true,
                          }}
                          tableBodyProps={{
                            className: 'align-middle',
                          }}
                        />
                      </CTabPane>
                    </CTabContent>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default LecturerDetail
/*  */
