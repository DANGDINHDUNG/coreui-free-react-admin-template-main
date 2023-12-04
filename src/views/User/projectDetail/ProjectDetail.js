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
  CBadge,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'
import { useParams } from 'react-router-dom'

const ProjectDetail = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [activeKey, setActiveKey] = useState(1)
  const usersData = [
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
    {
      id: 3,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      avatar: '3.jpg',
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
      id: 4,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ănus',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Trần Anh Dũng',
      description: 'Project 1',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'Nguyễn Gia Bảo',
      semester: 1,
      year: 2023,
      point: 10,
      status: 'Unregistered',
    },
    {
      id: 5,
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
      id: 6,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ănu',
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
      id: 7,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Đinh Nguyễn Anh Dũng',
      description: 'Project 1',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'Nguyễn Gia Bảo',
      semester: 1,
      year: 2023,
      point: 10,
      status: 'Registered',
    },
    {
      id: 8,
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
      id: 9,
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
      id: 10,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ănš',
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
      id: 11,
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
      id: 12,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăns',
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
      id: 13,
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
      id: 14,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ănlius',
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
      id: 15,
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
  ]
  const tasks = [
    { id: 1, title: 'Task 1', date: '2023-11-01' },
    { id: 2, title: 'Task 2', date: '2023-11-05' },
    { id: 3, title: 'Task 3', date: '2023-11-10' },
    // Add more tasks as needed
  ]
  useEffect(() => {
    // Find the item in the array based on the ID
    const selectedItem = usersData.find((item) => item.id === parseInt(id))
    setItem(selectedItem)
  }, [id])

  return (
    <div>
      {item ? (
        <div>
          <CCard>
            <CCardBody>
              <h1 style={{ fontSize: 24 }}>{item.name}</h1>
              <CContainer>
                <CRow>
                  <CCol xs="1" style={{ paddingLeft: 0 }}>
                    <CBadge color="success" style={{ fontSize: 14 }}>
                      {item.description}
                    </CBadge>
                  </CCol>
                  <CCol xs="11">
                    <p>Lecturer: {item.lecturer}</p>
                  </CCol>
                </CRow>
              </CContainer>
            </CCardBody>
          </CCard>
          <br />
          <h1 style={{ fontSize: 20 }}>Students participate</h1>
          <CContainer style={{ fontSize: 18 }}>
            <CRow>
              <CCol xs={6} style={{ paddingLeft: 0 }}>
                <CCard>
                  <CCardBody>
                    <p>Student 1: {item.student_1}</p>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs={6}>
                <CCard>
                  <CCardBody>
                    <p>Student 2: {item.student_2}</p>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CContainer>
          <br />
          <CCard>
            <CCardBody>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink active={activeKey === 1} onClick={() => setActiveKey(1)}>
                    About
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink active={activeKey === 2} onClick={() => setActiveKey(2)}>
                    Progress Task
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink active={activeKey === 3} onClick={() => setActiveKey(3)}>
                    Technology
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink active={activeKey === 4} onClick={() => setActiveKey(4)}>
                    File
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane visible={activeKey === 1}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan a
                    tellus eget placerat. Maecenas accumsan sed risus et porta. Vivamus id aliquam
                    lorem. Fusce felis mi, sodales eu nibh ut, ultricies dignissim odio. Donec ac
                    enim eget magna aliquet viverra. Sed laoreet ullamcorper turpis, in posuere leo
                    iaculis at. Integer viverra, felis a pretium bibendum, quam urna volutpat risus,
                    nec fringilla diam quam sed tortor. Aenean eleifend cursus lacus vel tempor.
                    Aenean et leo purus. Mauris tristique sapien hendrerit, tempor massa eget,
                    venenatis quam. Etiam cursus mollis ante, vitae fermentum dui lacinia sit amet.
                    Phasellus hendrerit ante orci. Cras sit amet dolor malesuada risus luctus
                    lobortis. Nulla rhoncus dolor sed diam eleifend lacinia.
                  </p>
                </CTabPane>
                <CTabPane visible={activeKey === 2}>
                  <CListGroup accent="success">
                    {tasks.map((task) => (
                      <CListGroupItem key={task.id}>
                        <div className="d-flex">
                          <div className="me-3">{/* <CIcon name="cil-check-circle" /> */}</div>
                          <div>
                            <div>{task.title}</div>
                            <small>{task.date}</small>
                          </div>
                        </div>
                      </CListGroupItem>
                    ))}
                  </CListGroup>
                </CTabPane>
                <CTabPane visible={activeKey === 3}>Content for Tab 3</CTabPane>
                <CTabPane visible={activeKey === 4}>Content for Tab 4</CTabPane>
              </CTabContent>
            </CCardBody>
          </CCard>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ProjectDetail
/*  */
