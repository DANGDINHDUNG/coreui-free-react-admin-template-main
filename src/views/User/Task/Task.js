import React from 'react'
import { useState } from 'react'
import { CSmartTable } from '@coreui/react-pro'
import { CCardBody, CButton, CCollapse, CBadge } from '@coreui/react'

const Project = () => {
  const [details, setDetails] = useState([])
  const columns = [
    {
      key: 'id',
      filter: false,
      _style: { width: '5%' },
    },
    {
      key: 'name',
      _style: { width: '30%' },
    },
    {
      key: 'request',
      filter: false,
      sorter: false,
    },
    {
      key: 'lecturer',
      sorter: false,
    },
    {
      key: 'student_1',
      _style: { width: '15%' },
      sorter: false,
    },
    {
      key: 'student_2',
      _style: { width: '15%' },
      sorter: false,
    },
    {
      key: 'status',
      _style: { width: '4%' },
      filter: false,
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
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Trần Anh Dũng',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'Nguyễn Gia Bảo',
      status: 'Registered',
    },
    {
      id: 2,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Trần Anh Dũng',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'Nguyễn Gia Bảo',
      status: 'Registered',
    },
    {
      id: 3,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      avatar: '3.jpg',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Trần Anh Dũng',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'Nguyễn Gia Bảo',
      status: 'Registered',
    },
    {
      id: 4,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ănus',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Trần Anh Dũng',
      student_1: '',
      student_2: '',
      status: 'Unregistered',
    },
    {
      id: 5,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Trần Anh Dũng',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'Nguyễn Gia Bảo',
      status: 'Registered',
    },
    {
      id: 6,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ănu',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Trần Anh Dũng',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'Nguyễn Gia Bảo',
      status: 'Registered',
    },
    {
      id: 7,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Đinh Nguyễn Anh Dũng',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'Nguyễn Gia Bảo',
      status: 'Registered',
    },
    {
      id: 8,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Trần Anh Dũng',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'Nguyễn Gia Bảo',
      status: 'Registered',
    },
    {
      id: 9,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Trần Anh Dũng',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'Nguyễn Gia Bảo',
      status: 'Registered',
    },
    {
      id: 10,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ănš',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Trần Anh Dũng',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'Nguyễn Gia Bảo',
      status: 'Registered',
    },
    {
      id: 11,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Trần Anh Dũng',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'Nguyễn Gia Bảo',
      status: 'Registered',
    },
    {
      id: 12,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăns',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Trần Anh Dũng',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'Nguyễn Gia Bảo',
      status: 'Registered',
    },
    {
      id: 13,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Trần Anh Dũng',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'Nguyễn Gia Bảo',
      status: 'Registered',
    },
    {
      id: 14,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ănlius',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Trần Anh Dũng',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'PNguyễn Gia Bảo',
      status: 'Registered',
    },
    {
      id: 15,
      name: 'Ứng dụng đi chợ trực tuyến tích hợp gợi ý món ăn',
      request: 'Yêu thích lập trình Web',
      lecturer: 'Trần Anh Dũng',
      student_1: 'Nguyễn Huỳnh Gia Huy',
      student_2: 'Nguyễn Gia Bảo',
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
  const getBadge = (status) => {
    switch (status) {
      case 'Unregistered':
        return 'success'
      case 'Registered':
        return 'danger'
      default:
        return 'primary'
    }
  }
  return (
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
        name: (item) => <td style={{ fontSize: '15px', fontWeight: 'bold' }}>{item.name}</td>,
        request: (item) => <td style={{ fontSize: '15px' }}>{item.request}</td>,
        lecturer: (item) => <td style={{ fontSize: '15px' }}>{item.lecturer}</td>,
        student_1: (item) => <td style={{ fontSize: '15px' }}>{item.student_1}</td>,
        student_2: (item) => <td style={{ fontSize: '15px' }}>{item.student_2}</td>,
        status: (item) => (
          <td>
            <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
          </td>
        ),
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
                <h4>{item.username}</h4>
                <p className="text-muted">User since: {item.position}</p>
                <CButton size="sm" color="info">
                  User Settings
                </CButton>
                <CButton size="sm" color="danger" className="ml-1">
                  Delete
                </CButton>
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
        hover: true,
      }}
      tableBodyProps={{
        className: 'align-middle',
      }}
    />
  )
}

export default Project
