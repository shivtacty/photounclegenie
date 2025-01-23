import React, { useEffect, useState } from "react";
import {
  CTable,
  CTableRow,
  CTableHead,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CPagination,
  CPaginationItem,
  CTooltip,
  CSpinner,
  CInputGroup,
  CInputGroupText,
  CModal,
  CModalHeader,
  CModalFooter,
  CToast,
  CToastHeader,
  CToastBody
} from '@coreui/react';
import axios from "axios";
import { BASE_URL } from "../../../halper/ApiInfo";
import CIcon from '@coreui/icons-react';
import { cilPaint, cilPencil, cilTrash } from "@coreui/icons";
import { useNavigate } from "react-router-dom";

const ViewLeadDetails = () => {
  const [data, setData] = useState([]);
  const [clientData, setClientData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [clientIdToDelete, setClientIdToDelete] = useState(null);
  const [deletionMessage, setDeletionMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const clientsPerPage = 8;
const navigate =useNavigate()
  // Pagination Logic
  const totalClients = data.length;
  const totalPages = Math.ceil(totalClients / clientsPerPage);
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = data.slice(indexOfFirstClient, indexOfLastClient);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPaginationItems = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <CPaginationItem key={i} onClick={() => paginate(i)} active={i === currentPage}>
          {i}
        </CPaginationItem>
      );
    }

    if (totalPages > maxVisiblePages && endPage < totalPages) {
      pageNumbers.push(
        <CPaginationItem key="ellipsis" disabled>
          ...
        </CPaginationItem>
      );
      pageNumbers.push(
        <CPaginationItem key={totalPages} onClick={() => paginate(totalPages)}>
          {totalPages}
        </CPaginationItem>
      );
    }

    return pageNumbers;
  };
  // console.log(deletionMessage);
  console.log(showToast);
  

  const getAllClients = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}viewproposalclient`);
      console.log(response?.data?.data);

      if (response.status) {
        setData(response?.data?.data);
        setClientData(response?.data?.data)
        setShowToast(false)
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching clients:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllClients();
  }, []);

  const handleSearch = () => {
    if (search.trim() === '') {
      setData(clientData)
    } else {
      const filteredData = data.filter(client =>
        client.name.toLowerCase().includes(search.toLowerCase()) ||
        client.phone.includes(search) ||
        client.source.toLowerCase().includes(search.toLowerCase())
      );
      setData(filteredData);
    }
    setCurrentPage(1); 
  };
  
  const getEditClientData=(id)=>{
    navigate(`/editleadfollowup/${id}`)
    
  }
console.log(showToast);

  const deleteClient = async (id) => {
    try {
      const response = await axios.post(`${BASE_URL}deletePerposal?id=${id}`);
      if (response.data.status) {
        
        setDeletionMessage("Your data has been deleted successfully!"); 
        setShowToast(true)
        getAllClients()
      }
    } catch (error) {
      console.error('There was an error deleting the client:', error);
    }
  }

  const handleDeleteClick = (id) => {
    setClientIdToDelete(id); 
    setDeleteModalVisible(true);
  }

  const handleDeleteConfirm = () => {
    deleteClient(clientIdToDelete); 
    setDeleteModalVisible(false); 
  }

  const handleDeleteCancel = () => {
    setDeleteModalVisible(false); 
  }

  const sendNow=(id)=>{
    navigate(`/sendemail/${id}`)
    
  }

  return (
    <div  className={!loading? 'common_box_shadow list_parent_div':''} >
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <CSpinner color="primary" />
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between flex-column flex-sm-row mb-5 mt-2">
            <CInputGroup className="main_search mb-5 mb-lg-1" >
              <input
                type="text"
                className="form-control"
                placeholder="Search by Name, Phone or Source"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <CInputGroupText>
                <CButton color="primary" style={{height:"40px"}} onClick={handleSearch}>
                  Search
                </CButton>
              </CInputGroupText>
            </CInputGroup>
            <CButton className="btn-xs" color="success" style={{height:"40px"}} >
          Send Emails for Confirmation
        </CButton>
          </div>

          {/* Client Table */}
          <CTable bordered className="mb-5 lead_table"  >
            <CTableHead className="">
              <CTableRow className="border" color="light">
                <CTableHeaderCell scope="col">Date Of entry</CTableHeaderCell>
                <CTableHeaderCell scope="col">Source</CTableHeaderCell>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                {/* <CTableHeaderCell scope="col">Client Id</CTableHeaderCell> */}
                <CTableHeaderCell scope="col" style={{ width: "300px" }}>Interested Shoot</CTableHeaderCell>
                <CTableHeaderCell scope="col">Proposal Status</CTableHeaderCell>
                <CTableHeaderCell scope="col" >Followup Status</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {currentClients.map((clientData) => (
                <CTableRow key={clientData.id}>
                  <CTableDataCell>{clientData.datetime}</CTableDataCell>
                  <CTableDataCell>{clientData.source}</CTableDataCell>
                  <CTableDataCell>{clientData.name}</CTableDataCell>
                  <CTableDataCell>{clientData.phone}</CTableDataCell>
                  {/* <CTableDataCell>{clientData.id}</CTableDataCell> */}
                  <CTableDataCell>{clientData.interestedshoot}</CTableDataCell>
                  <CTableDataCell >
                    <div className="d-flex justify-content-center  flex-column flex-sm-row gap-2">
                    {clientData.mailsent? <CButton id="view_btn" onClick={()=>sendNow(clientData.id)}>View <small >Sent ({clientData.mailsent})</small></CButton>: <CButton id="notsetyet_btn" >Not sent Yet</CButton>}
                     
                     

                      <CButton id="sendnow_btn" onClick={()=>sendNow(clientData.id)}>Send {clientData.mail?'Again':"Now"} </CButton>
                      {/* <CButton lassName="btn-xs" style={{background:"#78CD51",borderColor:"#78CD51",padding: "1px 5px",color:"white"}}> View <small>(SENT @01-06-2015)</small></CButton> */}

                    </div>
                    </CTableDataCell>
                  <CTableDataCell  >
                    <div className="d-flex justify-content-center gap-2 text-center">
                    {clientData.status == "Completed" ? <span  style={{ background: clientData.status == "Completed" ? "#1b9e3e" : "	#f9b115" }} className="custom_table_span">{clientData.status}</span> : <span className="btn btn-warning btn-xs"></span>}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell >

<div className="d-flex justify-content-center gap-2">
  
<CTooltip content="Edit-Followup">

                      <CButton color="primary" onClick={()=>getEditClientData(clientData.id)}>
                        <CIcon icon={cilPencil} />
                      </CButton>
                    </CTooltip>

                    <CTooltip content="Delete">
                      <CButton color="danger"  onClick={() => handleDeleteClick(clientData.id)}>
                        <CIcon icon={cilTrash} />
                      </CButton>
                    </CTooltip>
                   

</div>
                   
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>

          {/* Pagination */}
          <CPagination className="d-flex justify-content-center justify-content-lg-end mt-3 mb-2" aria-label="Page navigation example">
            <CPaginationItem
              aria-label="Previous"
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            >
              <span aria-hidden="true">&laquo;</span>
            </CPaginationItem>
            {renderPaginationItems()}
            {totalPages > 1 && currentPage < totalPages && (
              <CPaginationItem
                aria-label="Next"
                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
              >
                <span aria-hidden="true">&raquo;</span>
              </CPaginationItem>
            )}
          </CPagination>
        </>
      )}

{showToast && (
  <CToast
    visible={showToast}
    autohide={true}
    className="delete_tost"
    
  >
    <CToastHeader
    className="dtoast_header"
      
    >
      Success
    </CToastHeader>
    <CToastBody
    className="dtoast_body"

     
    >
      {deletionMessage}
    </CToastBody>
  </CToast>
)}



<CModal className="centered-modal" visible={deleteModalVisible} onClose={() => setDeleteModalVisible(false)}>
        <CModalHeader>
          Are you sure you want to delete this lead?
        </CModalHeader>
        <CModalFooter>
          <CButton color="secondary" onClick={handleDeleteCancel}>
            Cancel
          </CButton>
          <CButton color="danger" onClick={handleDeleteConfirm}>
            OK
          </CButton>
        </CModalFooter>
      </CModal>


      
    </div>
  );
};

export default ViewLeadDetails;
