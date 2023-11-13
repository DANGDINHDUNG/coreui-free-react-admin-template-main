import React from 'react'
import { useState, useEffect } from 'react'
import { CSmartTable } from '@coreui/react-pro'
import readXlsxFile from 'read-excel-file'
import * as topicServices from '../../../apiServices/topicServices'
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
} from '@coreui/react'

const Topic = () => {
  const [details, setDetails] = useState([])
  const [items, setItems] = useState([])
  const [topic, setTopic] = useState([])
  const [visibleXL, setVisibleXL] = useState(false)
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
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
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
  const handleFileUpload = async (event) => {
    const file = event.target.files[0]
    const rows = await readXlsxFile(file)
    const headers = rows[0]
    const data = rows.slice(1).map((row) => {
      return headers.reduce((obj, header, index) => {
        obj[header] = row[index]
        return obj
      }, {})
    })
    setItems(data)
    console.log(data)
  }
  const handleClick = () => {
    setTopic(items)
  }
  useEffect(() => {
    const fetchApi = async () => {
      const result = await topicServices.getTopic()
      console.log(result)
      setTopic(result)
    }
    fetchApi()
  }, [])
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
          <CCol sm={4}>
            <div className="gap-2 d-md-flex justify-content-md-end">
              <CButton onClick={() => setVisibleXL(!visibleXL)}>Add from Excel</CButton>
              <CModal
                size="xl"
                visible={visibleXL}
                onClose={() => setVisibleXL(false)}
                aria-labelledby="OptionalSizesExample1"
              >
                <CModalHeader>
                  <CModalTitle id="OptionalSizesExample1">List of topics</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <div className="gap-2 d-md-flex justify-content-md-end">
                    <CRow>
                      <CCol sm={12}>
                        <CFormInput type="file" onChange={handleFileUpload} />
                      </CCol>
                    </CRow>
                  </div>
                  <CSmartTable
                    columns={columns}
                    columnFilter
                    columnSorter
                    items={items}
                    itemsPerPageSelect
                    onFilteredItemsChange={(items) => {}}
                    onSelectedItemsChange={(items) => {}}
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
                                toggleDetails(item.index)
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
                              <h4>{item.name}</h4>
                              <p className="text-muted">User since: ${item.name}</p>
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
                    }}
                    tableBodyProps={{
                      className: 'align-middle',
                    }}
                  />
                  <div className="gap-2 d-md-flex justify-content-md-end">
                    <CButton color="info" onClick={handleClick}>
                      Save
                    </CButton>
                  </div>
                </CModalBody>
              </CModal>
            </div>
          </CCol>
        </CRow>
      </CContainer>
      <CSmartTable
        activePage={2}
        columns={columns}
        columnFilter
        columnSorter
        items={topic}
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
                    toggleDetails(item.topicId)
                  }}
                >
                  {details.includes(item.topicId) ? 'Hide' : 'Show'}
                </CButton>
              </td>
            )
          },
          details: (item) => {
            return (
              <CCollapse visible={details.includes(item.topicId)}>
                <CCardBody className="p-3">
                  <h4>{item.topicName}</h4>
                  <p className="text-muted">User since: {item.topicName}</p>
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
        }}
        tableBodyProps={{
          className: 'align-middle',
        }}
      />
    </div>
  )
}

export default Topic
