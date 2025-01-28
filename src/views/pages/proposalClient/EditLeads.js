import React, { useEffect, useState } from 'react';
import { CForm, CFormInput, CFormSelect, CButton, CRow, CCol, CFormCheck, CFormTextarea, CModal, CModalHeader, CModalBody, CAlert, CModalFooter } from '@coreui/react';
import { BASE_URL } from '../../../halper/ApiInfo';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProposalForm = () => {
  const [formData, setFormData] = useState({
    source: '',
    shootPackege: '',
    leadname: '',
    phone: '',
    email: '',
    location: '',
    ShootFinalDate: '',
    start_time: '',
    PhotographerAssigned: [],
    FinalizedDeliverablesDate:"",
    ShootLocation: '',
    // pic_selection: '',
    album_requested: 'No',
    album_size: '',
    album_pages: '',
    // no_images_comitted: '',
    video_requested: 'No',
    how_many_minute: '',
    deliverables: '',
    finalized_amount:'',
    numberofpicforselection:"",
    numberofimagescommittedinalbum:"",
    followperson:""
    
  });

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
    const [errors, setErrors] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    if (id) {
      axios.get(`${BASE_URL}editleadfollowup?id=${id}`)
        .then(response => {
          const data = response?.data?.data[0];
          console.log(data);
          
          setFormData({
            source: data?.source || '',
            shootPackege: data?.interestedshoot || '',
            leadname: data?.name || '',
            phone: data?.phone || '',
            email: data?.email || '',
            location: data?.location || '',
            ShootFinalDate: data?.ShootFinalDate || '',
            start_time: data?.start_time || '',
            PhotographerAssigned: data?.PhotographerAssigned || '' ,
            FinalizedDeliverablesDate: data?.FinalizedDeliverablesDate || '',
            ShootLocation: data?.ShootLocation || '',
            album_requested: data?.album_requested || 'No',
            album_size: data?.album_size || '',
            album_pages: data?.album_pages || '',
            video_requested: data?.video_requested || 'No',
            how_many_minute: data.how_many_minute || '',
            deliverables: data?.deliverables || '',
            finalized_amount: data?.finalAmount || '',
            numberofpicforselection: data?.pic_selection || "",
            numberofimagescommittedinalbum: data?.no_images_comitted || "",
            followperson: data?.followperson || "",
          });
        })
        .catch(error => {
          console.error("There was an error fetching the data:", error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(formData);
  
  const handleMultiSelectChange = (e) => {
    const { name, options } = e.target;
    const selectedValues = Array.from(options).filter(option => option.selected).map(option => option.value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: selectedValues,
    }));
  };
//   const loggedEmp=localStorage.getItem("authToken")
//  const ConvertLoggedEmp=JSON?.parse(loggedEmp)
//  console.log(ConvertLoggedEmp);
 
  const handleSubmit = (e) => {
    
    
    e.preventDefault();
  
    let formDataObj = new FormData();
  
    // formDataObj.append('datetime', new Date().toISOString().split('T')[0]); 
    formDataObj.append('source', formData.source);
    formDataObj.append('name', formData.leadname);

    formDataObj.append('interestedshoot', formData.shootPackege);
    formDataObj.append('phone', formData.phone);
    formDataObj.append('email', formData.email);
    formDataObj.append('location', formData.location);
    formDataObj.append('ShootFinalDate', formData.ShootFinalDate);
    formDataObj.append('start_time', formData.start_time);
    formDataObj.append('PhotographerAssigned', formData.PhotographerAssigned); 
    formDataObj.append('FinalizedDeliverablesDate', formData.FinalizedDeliverablesDate);
    formDataObj.append('ShootLocation', formData.ShootLocation);
    formDataObj.append('album_requested', formData.album_requested);
    formDataObj.append('album_size', formData.album_size);
    formDataObj.append('album_pages', formData.album_pages);
    formDataObj.append('pic_selection', formData.numberofpicforselection);
    formDataObj.append('no_images_comitted', formData.numberofimagescommittedinalbum);
    formDataObj.append('video_requested', formData.video_requested);
    formDataObj.append('how_many_minute', formData.how_many_minute);
    formDataObj.append('deliverables', formData.deliverables);
    formDataObj.append('finalAmount', formData.finalized_amount);
    formDataObj.append('id', id);
    formDataObj.append('EmpName', formData.followperson);
  
    axios.post(`${BASE_URL}proposalclientupdate`, formDataObj, {
     
    })
    .then(response => {
      if(response.data.status){
      setShowModal(true); 
      setMessage(response?.data?.message)
      setErrors(response.data.status)

      console.log('Form submitted successfully:', response);

      }
      else{
        setShowModal(true); 
        setMessage(response.data.message)
        setErrors(response.data.status)
      }
    })
    .catch(error => {
      console.error('There was an error submitting the form:', error);
    });
  };
  
const closeModel=()=>{
  setShowModal(false); 
if(errors){
  navigate('/proposalclient')

}

}

if(message){
console.log("test1");

}else{
  console.log("test");
  
}


  return (
    <div className='form_container2'>
       <div className="form_header ">
    <p className='px-3 py-2' style={{fontSize:"20px",textTransform:"uppercase"}}>Follow up Chart of <span style={{fontWeight:'600',fontSize:"20px"}}>{formData.leadname}</span></p>
  </div>
      <CForm onSubmit={handleSubmit} className='form_container' style={{padding:'15px'}}>
        <CRow>
          <CCol sm="4" className="mb-3">
            <label htmlFor="source">Source <span className="text-danger">*</span></label>
            <CFormSelect name="source" id="source" value={formData.source} onChange={handleChange} required>
              <option value="">--SELECT--</option>
              <option value="UrbanClap">Urban Clap</option>
              <option value="Google">Google Ads</option>
              <option value="Toll-Free-Number">Toll-Free-Number</option>
              <option value="8130-Number">8130-Number</option>
              <option value="Chat">Chat</option>
              <option value="Exisiting Hospital Client">Exisiting Hospital Client</option>
              <option value="World Children Expo">World Children Expo</option>
              <option value="Indiamart">Indiamart</option>
            </CFormSelect>
          </CCol>
  
          <CCol sm="4" className="mb-3">
            <label htmlFor="shootPackege">Interested Package <span className="text-danger">*</span></label>
            <CFormSelect name="shootPackege" id="shoot" value={formData.shootPackege} onChange={handleChange} required>
              <option value="">--SELECT--</option>
              <option value="Maternity Photoshoot & Newborn Combo Shoot">Maternity Photoshoot & Newborn Combo Shoot</option>
              <option value="Maternity Photoshoot">Maternity Photoshoot</option>
              <option value="Birthday Photoshoot">Birthday Photoshoot</option>
              <option value="New Born Photoshoot">New Born Photoshoot</option>
              <option value="Event Shoot">Event Shoot</option>
              <option value="Creative Photoshoot">Creative Photoshoot</option>
              <option value="Infant Photoshoot">Infant Photoshoot</option>
              <option value="Family Photoshoot">Family Photoshoot</option>
              <option value="Product Photoshoot">Product Photoshoot</option>
              <option value="Headshots">Headshots</option>
            </CFormSelect>
          </CCol>
  
          <CCol sm="4" className="mb-3">
            <label htmlFor="leadname">Name <span className="text-danger">*</span></label>
            <CFormInput
              type="text"
              id="leadname"
              name="leadname"
              value={formData.leadname}
              onChange={handleChange}
              required
            />
          </CCol>
        </CRow>
  
        <CRow>
        
  
          <CCol sm="4" className="mb-3">
            <label htmlFor="phone">Phone <span className="text-danger">*</span></label>
            <CFormInput
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </CCol>
  
          <CCol sm="4" className="mb-3">
            <label htmlFor="email">Email <span className="text-danger">*</span></label>
            <CFormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </CCol>
          <CCol sm="4" className="mb-3">
            <label htmlFor="location">Location <span className="text-danger">*</span></label>
            <CFormSelect
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="">Select A Location</option>
              <option value="In Studio">In Studio</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Event Venue">Event Venue</option>
              <option value="At Home">At Home</option>
            </CFormSelect>
          </CCol>
        </CRow>
  
  
        <CRow>
         
  
       
          <CCol sm="4" className="mb-3">
            <label htmlFor="ShootLocation">Shoot Location <span className="text-danger">*</span></label>
            <CFormInput
              type="text"
              id="ShootLocation"
              name="ShootLocation"
              value={formData.ShootLocation}
              onChange={handleChange}
              required
            />
          </CCol>
          <CCol sm="4" className="mb-3">
            <label htmlFor="ShootFinalDate">Shoot Finalized Date <span className="text-danger">*</span></label>
            <CFormInput
              type="date"
              id="ShootFinalDate"
              name="ShootFinalDate"
              value={formData.ShootFinalDate}
              onChange={handleChange}
              required
            />
          </CCol>
          <CCol sm="4" className="mb-3">
            <label htmlFor="start_time">Start Time</label>
            <CFormInput
              type="time"
              id="start_time"
              name="start_time"
              value={formData.start_time}
              onChange={handleChange}
            />
          </CCol>
        </CRow>
  
       
  
  
  
  
  
  <CRow>
  
  
  {/* <CCol sm="3" className="mb-3">
            <label htmlFor="PhotographerAssigned">Photographer Assigned <span className="text-danger">*</span></label>
            <CFormSelect
              id="PhotographerAssigned"
              name="PhotographerAssigned"
              multiple
              value={formData.PhotographerAssigned}
              onChange={handleMultiSelectChange}
              required
            >
              <option value="">Select Photographer...</option>
              <option value="Photo Demo">Photo Demo</option>
            </CFormSelect>
          </CCol> */}
          
  
          <CCol sm="4" className="mb-3">
            <label htmlFor="PhotographerAssigned">Photographer Assigned <span className="text-danger">*</span></label>
            <CFormSelect name="PhotographerAssigned" id="PhotographerAssigned" value={formData.PhotographerAssigned} onChange={handleChange} required>
              <option value="">Select Photographer...</option>
              <option value="Photo Demo">Photo Demo</option>
              
            </CFormSelect>
          </CCol>
  
          <CCol sm="4" className="mb-3">
            <label htmlFor="ShootFinalDate">Finalized Deliverables Date<span className="text-danger">*</span></label>
            <CFormInput
              type="date"
              id="FinalizedDeliverablesDate"
              name="FinalizedDeliverablesDate"
              value={formData.FinalizedDeliverablesDate}
              onChange={handleChange}
              required
            />
          </CCol>
  
          <CCol sm="4" className="mb-3">
            <label htmlFor="FinalizedAmount">Finalized Amount</label>
            <CFormInput
              type="number"
              id="FinalizedAmount"
              name="finalized_amount"
              value={formData.finalized_amount}
              onChange={handleChange}
            />
          </CCol>
  
         
  
  </CRow>
      
  
        
          
          <CRow>
          <CCol sm="4" className="mb-3">
            <label htmlFor="Numberofpicforselection">Number of pic for selection <span className="text-danger">*</span></label>
            <CFormInput
              type="number"
              id="Numberofpicforselection"
              name="numberofpicforselection"
              value={formData.numberofpicforselection}
              onChange={handleChange}
             required
            />
          </CCol>
          <CCol sm="4" className="mb-3">
            <label>Album Requested</label>
            <div>
              <CFormCheck
                type="radio"
                name="album_requested"
                id="album_requested1"
                value="Yes"
                checked={formData.album_requested === 'Yes'}
                onChange={handleChange}
              /><span className='mx-2'>Yes</span> 
              <CFormCheck
                type="radio"
                name="album_requested"
                id="album_requested2"
                value="No"
                checked={formData.album_requested === 'No'}
                onChange={handleChange}
              /> <span className='mx-2'>No</span> 
            </div>
          </CCol>
        
  
          <CCol sm="4" className="mb-3">
            <label>Video Requested</label>
            <div>
              <CFormCheck
                type="radio"
                name="video_requested"
                id="video_requested1"
                value="Yes"
                checked={formData.video_requested === 'Yes'}
                onChange={handleChange}
              /> <span className='mx-2'>Yes</span> 
              <CFormCheck
                type="radio"
                name="video_requested"
                id="video_requested2"
                value="No"
                checked={formData.video_requested === 'No'}
                onChange={handleChange}
              /><span className='mx-2'>No</span> 
            </div>
          </CCol>
        </CRow>
  
        {
          formData?.album_requested =="Yes"?<CRow>
          <CCol sm="4" className="mb-3">
                    <label htmlFor="album_size">Album Size</label>
                    <CFormInput
                      type="text"
                      id="album_size"
                      name="album_size"
                      value={formData.album_size}
                      onChange={handleChange}
                    />
                  </CCol>
          
                  <CCol sm="4" className="mb-3">
                    <label htmlFor="album_pages">Album Pages</label>
                    <CFormInput
                      type="number"
                      id="album_pages"
                      name="album_pages"
                      value={formData.album_pages}
                      onChange={handleChange}
                    />
                  </CCol>
          
                  <CCol sm="4" className="mb-3">
                    <label htmlFor="Numberofimagescommittedinalbum">Number of images committed in album</label>
                    <CFormInput
                      type="number"
                      id="Numberofimagescommittedinalbum"
                      name="numberofimagescommittedinalbum"
                      value={formData.numberofimagescommittedinalbum}
                      onChange={handleChange}
                     
                    />
                  </CCol>
          </CRow>:""
        }
  
  
        <CRow>
         
  {formData?.video_requested =="Yes"?  <CCol sm="4" className="mb-3">
            <label htmlFor="how_many_minute">How many minutes for video</label>
            <CFormInput
              type="number"
              id="how_many_minute"
              name="how_many_minute"
              value={formData.how_many_minute}
              onChange={handleChange}
            />
          </CCol>:""}
         
          <CCol sm="4" className="mb-3">
            <label htmlFor="deliverables">What are the deliverables? <span className="text-danger">*</span></label>
            <CFormTextarea
              id="deliverables"
              name="deliverables"
              rows="3"
              value={formData.deliverables}
              onChange={handleChange}
              required
            />
          </CCol>
        </CRow>
  
        <CButton type="submit" color="danger" className='mb-4 mt-2'>Update Lead</CButton>
  
        <CModal className="centered-modal" visible={showModal} onClose={() => setShowModal(false)}>
          {/* <CModalHeader closeButton>
            <h5>Form Submitted Successfully!</h5>
          </CModalHeader> */}
          <CModalBody>          
            {
              errors?<CAlert color="success">{message}</CAlert>:
              <CAlert color="danger">{message}</CAlert>
            }
            {/* <CAlert color="success">Your proposal has been successfully submitted. We will contact you shortly!</CAlert> */}
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={closeModel}>
              Close
            </CButton>
          </CModalFooter>
        </CModal>
  
      </CForm>
    </div>
   
  );
};

export default EditProposalForm;
