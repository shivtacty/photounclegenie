import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'; 
import { CAlert, CButton, CHeader, CHeaderBrand, CInputGroup, CInputGroupText, CModal, CModalBody, CModalFooter, CModalHeader } from '@coreui/react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../halper/ApiInfo";

const EmailForm = ({ onSendEmail }) => {
  const [currentClient, setCurrentClient] = useState({});
// console.log(currentClient);
const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [sentEmail, setSentEmail] = useState(null);

 

  // Dynamic state data
  const [emailSubject, setEmailSubject] = useState("");
  const [emailRecipient, setEmailRecipient] = useState("");
  const [emailBody, setEmailBody] = useState('');
  
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`${BASE_URL}editleadfollowup?id=${id}`)
        .then(response => {
          const data = response?.data?.data[0];
          // console.log(data.mail);
          
          if (data) {
            setCurrentClient(data);
            setEmailSubject(`Discussion regarding ${data.interestedshoot}  - MyBaby247.com `); 
            setEmailRecipient(data.email); 
            setEmailBody(data.mail? data.mail:`
               <p> <p>Dear ${data.name}</p>
                <p>Greetings from MyBaby247.com!</p>
                <p>First of all thanks for reaching out to us for your ${data.interestedshoot}</p>
                <p>Mybaby247.com is a group of technology driven professional photographers, dealing with direct parents, schools & hospitals with over 2500+ satisfied clients in/around Delhi / NCR.</p>
                <p>Below are the details and next steps about your upcoming photo shoot session:</p>
                <h4>Deliverables:</h4>
                <ul>
                  <li>2 – 3 Hours shoot session</li>
                  <li>Unlimited clicks with all digital high definition photos on CD</li>
                  <li>Touch-up included for the 15 photos of your choice (covering color & light correction with basic skin retouching)</li>
                  <li>2 (12 x 10) Professional quality photo prints</li>
                  <li>Online Gallery Access</li>
                </ul>
                <h4>Add-ons:</h4>
                <ul>
                  <li>Rs. 3000 (A3 size album with 20 pages covering up to 50 images)</li>
                  <li>2 - 3 hours videography Rs. 8999</li>
                </ul>
                <p>Please feel free to reach out to us for any further query on above deliverables.</p>
                <h4>Pricing:</h4>
                <p>The total amount of the session will be +taxes.</p>
                <p>You can make the payment online, via cheque or cash (our staff member can come for collection with some additional charges). Deposits are required prior to confirming your appointment. The balance is due on the day of appointment. Please note, no portion of your order will be delivered until the balance is paid in full. Please note the committed time duration of the photo shoot, time spent beyond it will be charged by Rs. 1000/hour.</p>
                <h4>Booking fee:</h4>
                <p>To confirm your photo shoot session, please make a booking payment of Rs 500 and remaining balance can be paid on the day of the shoot.</p>
                <p>Payment link for booking amount: <a href="http://imojo.in/dkf43z">http://imojo.in/dkf43z</a></p>
                <p>Besides this, we will appreciate if you can let us know below details as well for the photo shoot session:</p>
                <ul>
                  <li>Date:</li>
                  <li>Time:</li>
                  <li>Photo Shoot Session (type):</li>
                  <li>Location (if other than our studio):</li>
                </ul>
                <p>If you haven't done so already, please take a few minutes and visit our Facebook page and “Like” us.</p>
                <p><a href="https://www.facebook.com/mybaby247">https://www.facebook.com/mybaby247</a></p>
                <p>Smiles,</p>
                <p>MyBaby247 - Celebrating Parenthood</p>
                <p><a href="http://www.mybaby247.com">www.mybaby247.com</a></p>
                <p>(A unit of HumGenie Pvt. Ltd.)</p>
                <p>mybaby247.com | MyPictures247.com | Humgenie.com</p>
                <p>J-9/13 Rajouri Garden,</p>
                <p>New Delhi – 110027</p>
                <p>Mobile: 8130591978</p></p>
              `); 
            // setCurrentName(data?.name)
          }
        })
        .catch(error => {
          console.error("There was an error fetching the data:", error);
        });
    }
  }, [id]);

 

  const handleSendEmail = (e) => {
    
    
    e.preventDefault();
  
    let formDataObj = new FormData();
  
    // formDataObj.append('datetime', new Date().toISOString().split('T')[0]); 
    formDataObj.append('id', id);
    formDataObj.append('email',emailRecipient);
    formDataObj.append('subject', emailSubject);

    formDataObj.append('message', emailBody);
   
    axios.post(`${BASE_URL}sendmail`, formDataObj, {
    })
    .then(response => {
      console.log(response);
      if(response?.data?.status){
        console.log('Form submitted successfully:', response.data);
        setShowModal(true); 
        setMessage(response?.data?.messages)
        setSentEmail(response?.data?.status)
      }else{
        setShowModal(true); 
        setMessage(response?.data?.messages)
        setSentEmail(response?.data?.status)
      }
      
    })
    .catch(error => {
      console.error('There was an error submitting the form:', error);
    });
  };

  const closeModel=()=>{
    setShowModal(false); 
 
    // navigate('/proposalclient')
  
  
  
  }

  return (
    <div className='form_container2'>
    <div className="form_header ">
 <p className='px-3 py-2' style={{fontSize:"20px",textTransform:"uppercase"}}>SEND COVER LETTER FOR <span style={{fontWeight:'600',fontSize:"20px"}}>{currentClient?.interestedshoot}</span></p>
</div>
    <div className="email-form common_box_shadow list_parent_div">
        {/* <CHeaderBrand className="mb-3">SEND COVER LETTER FOR {currentClient?.interestedshoot} </CHeaderBrand> */}
      <div className="mb-3">
        <label>Email Subject</label>
        <input
          type="text"
          className="form-control"
          value={emailSubject}
          onChange={(e) => setEmailSubject(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Recipient Email</label>
        <input
          type="email"
          className="form-control"
          value={emailRecipient}
          onChange={(e) => setEmailRecipient(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Email Body</label>
        <ReactQuill
          value={emailBody}
          onChange={setEmailBody}
          modules={{
            toolbar: [
              [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              ['bold', 'italic', 'underline'],
              ['link'],
              [{ 'align': [] }],
              ['image'],
            ],
          }}
          style={{ height: '300px' }} 
        />
      </div>

      <CButton className="mt-5" color="primary" onClick={handleSendEmail}>
        Send Email
      </CButton>
    </div>
     <CModal className="centered-modal" visible={showModal} onClose={() => setShowModal(false)}>
            
              <CModalBody>
                {
                             sentEmail?<CAlert color="success">{message}</CAlert>:
                             <CAlert color="danger">{message}</CAlert>
                           }
              </CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={closeModel}>
                  Close
                </CButton>
              </CModalFooter>
            </CModal>
    </div>
  );
};

export default EmailForm;
