import React from 'react'
import { useState, useEffect } from 'react'
import { CSmartTable } from '@coreui/react-pro'
import {
  CCardBody,
  CCard,
  CCollapse,
  CAvatar,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CContainer,
  CCol,
  CRow,
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
  useEffect(() => {
    // Find the item in the array based on the ID
    const selectedItem = usersData.find((item) => item.id === parseInt(id))
    setItem(selectedItem)
  }, [id])

  return (
    <div>
      <CContainer>
        <CRow>
          <CCol xs={5}>
            <CCard>
              <CCardBody>
                <div>
                  {item ? (
                    <div>
                      <p>
                        <strong>Project Name: </strong>
                        {item.name}
                      </p>
                      <p>Request: {item.request}</p>
                      <p>Lecturer: {item.lecturer}</p>
                      <p>Description: {item.description}</p>
                      <p>Student 1: {item.student_1}</p>
                      <p>Student 2: {item.student_2}</p>
                      <p>Point: {item.point}</p>
                    </div>
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs={7}>
            <CCard>
              <CCardBody>
                <div>
                  {item ? (
                    <div>
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu dui,
                          commodo mauris vitae, blandit nulla. Nulla facilisi. Aenean aliquet nunc
                          commodo. Ut sed massa quis urna ullamcorper condimentum.
                        </CTabPane>
                        <CTabPane visible={activeKey === 2}>Content for Tab 2</CTabPane>
                        <CTabPane visible={activeKey === 3}>Content for Tab 3</CTabPane>
                        <CTabPane visible={activeKey === 4}>Content for Tab 4</CTabPane>
                      </CTabContent>
                    </div>
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default ProjectDetail
