import React from 'react'
import { useState } from 'react'
import { CSmartTable } from '@coreui/react-pro'
import { CCardBody, CButton, CCollapse, CAvatar } from '@coreui/react'

const Lecturer = () => {
  const [details, setDetails] = useState([])
  const columns = [
    {
      key: 'id',
      label: '',
      filter: false,
      sorter: true,
      _style: { width: '3%' },
    },
    {
      key: 'name',
      _style: { width: '20%' },
      sorter: false,
    },
    {
      key: 'gender',
      _style: { width: '9%' },
      filter: false,
    },
    {
      key: 'birth',
      _style: { width: '10%' },
      filter: false,
      sorter: false,
    },
    {
      key: 'hometown',
      _style: { width: '10%' },
      sorter: false,
    },
    {
      key: 'address',
      _style: { width: '20%' },
      filter: false,
      sorter: false,
    },
    {
      key: 'email',
      _style: { width: '15%' },
      filter: false,
      sorter: false,
    },
    {
      key: 'phonenumber',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
    },
    {
      key: 'degree',
      _style: { width: '8%' },
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
  return (
    <div>
      <div className="gap-2 d-md-flex justify-content-md-end">
        <CButton color="info">Add from Excel</CButton>
      </div>
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
          avatar: (item) => (
            <td>
              <CAvatar src={`/images/avatars/${item.avatar}`} />
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
                  <p className="text-muted">User since: {item.name}</p>
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
    </div>
  )
}

export default Lecturer
