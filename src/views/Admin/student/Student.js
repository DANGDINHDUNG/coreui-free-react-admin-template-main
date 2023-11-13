import React from 'react'
import { useState } from 'react'
import { CSmartTable } from '@coreui/react-pro'
import { CCardBody, CButton, CCollapse } from '@coreui/react'

const Student = () => {
  const [details, setDetails] = useState([])
  const columns = [
    {
      key: 'id',
      label: '',
      filter: false,
      sorter: true,
      _style: { width: '2%' },
    },
    {
      key: 'code',
      filter: true,
      sorter: false,
      _style: { width: '5%' },
    },
    {
      key: 'name',
      _style: { width: '20%' },
      sorter: false,
      filter: false,
    },
    {
      key: 'gender',
      filter: false,
      sorter: false,
    },
    {
      key: 'birth',
      filter: false,
      sorter: false,
    },
    {
      key: 'hometown',
      sorter: false,
      filter: false,
    },
    {
      key: 'address',
      filter: false,
      sorter: false,
    },
    {
      key: 'email',
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
      key: 'term',
      _style: { width: '6%' },
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
      code: 20520544,
      name: 'Nguyễn Huỳnh Gia Huy',
      gender: 'Male',
      birth: '1/1/2002',
      hometown: 'Bình Dương',
      address: 'Dĩ An, Bình Dương',
      phonenumber: '0987654321',
      term: 'K15',
      password: '128822195123',
      email: '20520544@gm.uit.edu.vn',
    },
    {
      id: 2,
      code: 20520544,
      name: 'Nguyễn Huỳnh Gia Huy',
      gender: 'Male',
      birth: '1/1/2002',
      hometown: 'Bình Dương',
      address: 'Dĩ An, Bình Dương',
      phonenumber: '0987654321',
      term: 'K15',
      password: '128822195123',
      email: '20520544@gm.uit.edu.vn',
    },
    {
      id: 3,
      code: 20520544,
      name: 'Nguyễn Huỳnh Gia Huy',
      gender: 'Male',
      birth: '1/1/2002',
      hometown: 'Bình Dương',
      address: 'Dĩ An, Bình Dương',
      phonenumber: '0987654321',
      term: 'K15',
      password: '128822195123',
      email: 'In20520544@gm.uit.edu.vn',
    },
    {
      id: 4,
      code: 20520544,
      name: 'Nguyễn Huỳnh Gia Huy',
      gender: 'Male',
      birth: '1/1/2002',
      hometown: 'Bình Dương',
      address: 'Dĩ An, Bình Dương',
      phonenumber: '0987654321',
      term: 'K15',
      password: '128822195123',
      email: 'P20520544@gm.uit.edu.vn',
    },
    {
      id: 5,
      code: 20520544,
      name: 'Nguyễn Huỳnh Gia Huy',
      gender: 'Male',
      birth: '1/1/2002',
      hometown: 'Bình Dương',
      address: 'Dĩ An, Bình Dương',
      phonenumber: '0987654321',
      term: 'K15',
      password: '128822195123',
      email: '20520544@gm.uit.edu.vn',
    },
    {
      id: 6,
      code: 20520544,
      name: 'Nguyễn Huỳnh Gia Huy',
      gender: 'Male',
      birth: '1/1/2002',
      hometown: 'Bình Dương',
      address: 'Dĩ An, Bình Dương',
      phonenumber: '0987654321',
      term: 'K15',
      password: '128822195123',
      email: '20520544@gm.uit.edu.vn',
    },
    {
      id: 7,
      code: 20520544,
      name: 'Nguyễn Huỳnh Gia Huy',
      gender: 'Male',
      birth: '1/1/2002',
      hometown: 'Bình Dương',
      address: 'Dĩ An, Bình Dương',
      phonenumber: '0987654321',
      term: 'K15',
      password: '128822195123',
      email: '20520544@gm.uit.edu.vn',
    },
    {
      id: 8,
      code: 20520544,
      name: 'Nguyễn Huỳnh Gia Huy',
      gender: 'Male',
      birth: '1/1/2002',
      hometown: 'Bình Dương',
      address: 'Dĩ An, Bình Dương',
      phonenumber: '0987654321',
      term: 'K15',
      password: '128822195123',
      email: 'In20520544@gm.uit.edu.vn',
    },
    {
      id: 9,
      code: 20520544,
      name: 'Nguyễn Huỳnh Gia Huy',
      gender: 'Male',
      birth: '1/1/2002',
      hometown: 'Bình Dương',
      address: 'Dĩ An, Bình Dương',
      phonenumber: '0987654321',
      term: 'K15',
      password: '128822195123',
      email: 'P20520544@gm.uit.edu.vn',
    },
    {
      id: 10,
      code: 20520544,
      name: 'Nguyễn Huỳnh Gia Huy',
      gender: 'Male',
      birth: '1/1/2002',
      hometown: 'Bình Dương',
      address: 'Dĩ An, Bình Dương',
      phonenumber: '0987654321',
      term: 'K15',
      password: '128822195123',
      email: '20520544@gm.uit.edu.vn',
    },
    {
      id: 11,
      code: 20520544,
      name: 'Nguyễn Huỳnh Gia Huy',
      gender: 'Male',
      birth: '1/1/2002',
      hometown: 'Bình Dương',
      address: 'Dĩ An, Bình Dương',
      phonenumber: '0987654321',
      term: 'K15',
      password: '128822195123',
      email: '20520544@gm.uit.edu.vn',
    },
    {
      id: 12,
      code: 20520544,
      name: 'Nguyễn Huỳnh Gia Huy',
      gender: 'Male',
      birth: '1/1/2002',
      hometown: 'Bình Dương',
      address: 'Dĩ An, Bình Dương',
      phonenumber: '0987654321',
      term: 'K15',
      password: '128822195123',
      email: '20520544@gm.uit.edu.vn',
    },
    {
      id: 13,
      code: 20520544,
      name: 'Nguyễn Huỳnh Gia Huy',
      gender: 'Male',
      birth: '1/1/2002',
      hometown: 'Bình Dương',
      address: 'Dĩ An, Bình Dương',
      phonenumber: '0987654321',
      term: 'K15',
      password: '128822195123',
      email: 'In20520544@gm.uit.edu.vn',
    },
    {
      id: 14,
      code: 20520544,
      name: 'Nguyễn Huỳnh Gia Huy',
      gender: 'Male',
      birth: '1/1/2002',
      hometown: 'Bình Dương',
      address: 'Dĩ An, Bình Dương',
      phonenumber: '0987654321',
      term: 'K15',
      password: '128822195123',
      email: 'P20520544@gm.uit.edu.vn',
    },
    {
      id: 15,
      code: 20520544,
      name: 'Nguyễn Huỳnh Gia Huy',
      gender: 'Male',
      birth: '1/1/2002',
      hometown: 'Bình Dương',
      address: 'Dĩ An, Bình Dương',
      phonenumber: '0987654321',
      term: 'K15',
      password: '128822195123',
      email: '20520544@gm.uit.edu.vn',
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
                  <p className="text-muted">User since: {item.email}</p>
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

export default Student
