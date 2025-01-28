import{r as m,m as P,j as e,D as i,E as l,H as g,ab as q,ac as D}from"./index-DQXswQPt.js";import{C as z}from"./CForm-DjWH9To9.js";import{C as d}from"./CFormSelect-DBjLUJKA.js";import{C as t}from"./CFormInput-fAWc4V4O.js";import{C as h}from"./CFormCheck-B0srXSMl.js";import{C as E}from"./CFormTextarea-nQWSdHJu.js";import{C as A,a as w}from"./CModalFooter-pO9Bmz0d.js";import{C as L}from"./CModalBody-DGQ-ucOf.js";import{C as v}from"./CAlert-BGWR-uPw.js";import"./CFormControlWrapper-5zEUAUUE.js";import"./CFormControlValidation-BpEwPjpW.js";import"./CFormLabel-Dr1K1tTu.js";import"./DefaultLayout-ei7h0Yif.js";import"./CContainer-Cusoi-oJ.js";import"./cil-user-Dlmw-Gem.js";const K=()=>{const[a,N]=m.useState({source:"",shootPackege:"",leadname:"",phone:"",email:"",location:"",ShootFinalDate:"",start_time:"",PhotographerAssigned:"",FinalizedDeliverablesDate:"",ShootLocation:"",album_requested:"No",album_size:"",album_pages:"",video_requested:"No",how_many_minute:"",deliverables:"",finalized_amount:"",numberofpicforselection:"",numberofimagescommittedinalbum:""}),[_,r]=m.useState(!1),[u,p]=m.useState(""),[x,b]=m.useState(!1),o=c=>{const{name:s,value:n}=c.target;N(S=>({...S,[s]:n}))},C=P(),f=localStorage.getItem("authToken"),j=JSON==null?void 0:JSON.parse(f),F=c=>{c.preventDefault();let s=new FormData;s.append("source",a.source),s.append("name",a.leadname),s.append("interestedshoot",a.shootPackege),s.append("phone",a.phone),s.append("email",a.email),s.append("location",a.location),s.append("ShootFinalDate",a.ShootFinalDate),s.append("start_time",a.start_time),s.append("PhotographerAssigned",a.PhotographerAssigned),s.append("FinalizedDeliverablesDate",a.FinalizedDeliverablesDate),s.append("ShootLocation",a.ShootLocation),s.append("album_requested",a.album_requested),s.append("album_size",a.album_size),s.append("album_pages",a.album_pages),s.append("pic_selection",a.numberofpicforselection),s.append("no_images_comitted",a.numberofimagescommittedinalbum),s.append("video_requested",a.video_requested),s.append("how_many_minute",a.how_many_minute),s.append("deliverables",a.deliverables),s.append("finalAmount",a.finalized_amount),s.append("EmpId",j.EmployeeId),s.append("EmpName",j.firstName),q.post(`${D}proposalclient`,s,{}).then(n=>{console.log(n),n.data.status,r(!0),console.log("Form submitted successfully:",n),p(n.data.message),b(n.data.status)}).catch(n=>{console.error("There was an error submitting the form:",n)})},y=()=>{r(!1),x&&C("/proposalclient")};return e.jsxs("div",{className:"form_container2",children:[e.jsx("div",{className:"form_header ",children:e.jsx("p",{className:"px-3 py-2",style:{fontSize:"20px",textTransform:"uppercase"},children:"Follow up Chart"})}),e.jsxs(z,{onSubmit:F,className:"form_container",style:{padding:"15px"},children:[e.jsxs(i,{children:[e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsxs("label",{htmlFor:"source",children:["Source ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsxs(d,{name:"source",id:"source",value:a.source,onChange:o,required:!0,children:[e.jsx("option",{value:"",children:"--SELECT--"}),e.jsx("option",{value:"UrbanClap",children:"Urban Clap"}),e.jsx("option",{value:"Google",children:"Google Ads"}),e.jsx("option",{value:"Toll-Free-Number",children:"Toll-Free-Number"}),e.jsx("option",{value:"8130-Number",children:"8130-Number"}),e.jsx("option",{value:"Chat",children:"Chat"}),e.jsx("option",{value:"Exisiting Hospital Client",children:"Exisiting Hospital Client"}),e.jsx("option",{value:"World Children Expo",children:"World Children Expo"}),e.jsx("option",{value:"Indiamart",children:"Indiamart"})]})]}),e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsxs("label",{htmlFor:"shootPackege",children:["Interested Package ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsxs(d,{name:"shootPackege",id:"shoot",value:a.shootPackege,onChange:o,required:!0,children:[e.jsx("option",{value:"",children:"--SELECT--"}),e.jsx("option",{value:"Maternity Photoshoot & Newborn Combo Shoot",children:"Maternity Photoshoot & Newborn Combo Shoot"}),e.jsx("option",{value:"Maternity Photoshoot",children:"Maternity Photoshoot"}),e.jsx("option",{value:"Birthday Photoshoot",children:"Birthday Photoshoot"}),e.jsx("option",{value:"New Born Photoshoot",children:"New Born Photoshoot"}),e.jsx("option",{value:"Event Shoot",children:"Event Shoot"}),e.jsx("option",{value:"Creative Photoshoot",children:"Creative Photoshoot"}),e.jsx("option",{value:"Infant Photoshoot",children:"Infant Photoshoot"}),e.jsx("option",{value:"Family Photoshoot",children:"Family Photoshoot"}),e.jsx("option",{value:"Product Photoshoot",children:"Product Photoshoot"}),e.jsx("option",{value:"Headshots",children:"Headshots"})]})]}),e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsxs("label",{htmlFor:"leadname",children:["Name ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx(t,{type:"text",id:"leadname",name:"leadname",value:a.leadname,onChange:o,required:!0})]})]}),e.jsxs(i,{children:[e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsxs("label",{htmlFor:"phone",children:["Phone ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx(t,{type:"number",id:"phone",name:"phone",value:a.phone,onChange:o,required:!0})]}),e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsxs("label",{htmlFor:"email",children:["Email ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx(t,{type:"email",id:"email",name:"email",value:a.email,onChange:o,required:!0})]}),e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsxs("label",{htmlFor:"location",children:["Location ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsxs(d,{id:"location",name:"location",value:a.location,onChange:o,required:!0,children:[e.jsx("option",{value:"",children:"Select A Location"}),e.jsx("option",{value:"In Studio",children:"In Studio"}),e.jsx("option",{value:"Outdoor",children:"Outdoor"}),e.jsx("option",{value:"Event Venue",children:"Event Venue"}),e.jsx("option",{value:"At Home",children:"At Home"})]})]})]}),e.jsxs(i,{children:[e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsxs("label",{htmlFor:"ShootLocation",children:["Shoot Location ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx(t,{type:"text",id:"ShootLocation",name:"ShootLocation",value:a.ShootLocation,onChange:o,required:!0})]}),e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsxs("label",{htmlFor:"ShootFinalDate",children:["Shoot Finalized Date ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx(t,{type:"date",id:"ShootFinalDate",name:"ShootFinalDate",value:a.ShootFinalDate,onChange:o,required:!0})]}),e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsx("label",{htmlFor:"start_time",children:"Start Time"}),e.jsx(t,{type:"time",id:"start_time",name:"start_time",value:a.start_time,onChange:o})]})]}),e.jsxs(i,{children:[e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsxs("label",{htmlFor:"PhotographerAssigned",children:["Photographer Assigned ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsxs(d,{name:"PhotographerAssigned",id:"PhotographerAssigned",value:a.PhotographerAssigned,onChange:o,required:!0,children:[e.jsx("option",{value:"",children:"Select Photographer..."}),e.jsx("option",{value:"Photo Demo",children:"Photo Demo"})]})]}),e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsxs("label",{htmlFor:"ShootFinalDate",children:["Finalized Deliverables Date",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx(t,{type:"date",id:"FinalizedDeliverablesDate",name:"FinalizedDeliverablesDate",value:a.FinalizedDeliverablesDate,onChange:o,required:!0})]}),e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsx("label",{htmlFor:"FinalizedAmount",children:"Finalized Amount"}),e.jsx(t,{type:"number",id:"FinalizedAmount",name:"finalized_amount",value:a.finalized_amount,onChange:o})]})]}),e.jsxs(i,{children:[e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsxs("label",{htmlFor:"Numberofpicforselection",children:["Number of pic for selection ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx(t,{type:"number",id:"Numberofpicforselection",name:"numberofpicforselection",value:a.numberofpicforselection,onChange:o,required:!0})]}),e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsx("label",{children:"Album Requested"}),e.jsxs("div",{children:[e.jsx(h,{type:"radio",name:"album_requested",id:"album_requested1",value:"Yes",checked:a.album_requested==="Yes",onChange:o}),e.jsx("span",{className:"mx-2",children:"Yes"}),e.jsx(h,{type:"radio",name:"album_requested",id:"album_requested2",value:"No",checked:a.album_requested==="No",onChange:o})," ",e.jsx("span",{className:"mx-2",children:"No"})]})]}),e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsx("label",{children:"Video Requested"}),e.jsxs("div",{children:[e.jsx(h,{type:"radio",name:"video_requested",id:"video_requested1",value:"Yes",checked:a.video_requested==="Yes",onChange:o})," ",e.jsx("span",{className:"mx-2",children:"Yes"}),e.jsx(h,{type:"radio",name:"video_requested",id:"video_requested2",value:"No",checked:a.video_requested==="No",onChange:o}),e.jsx("span",{className:"mx-2",children:"No"})]})]})]}),(a==null?void 0:a.album_requested)=="Yes"?e.jsxs(i,{children:[e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsx("label",{htmlFor:"album_size",children:"Album Size"}),e.jsx(t,{type:"text",id:"album_size",name:"album_size",value:a.album_size,onChange:o})]}),e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsx("label",{htmlFor:"album_pages",children:"Album Pages"}),e.jsx(t,{type:"number",id:"album_pages",name:"album_pages",value:a.album_pages,onChange:o})]}),e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsx("label",{htmlFor:"Numberofimagescommittedinalbum",children:"Number of images committed in album"}),e.jsx(t,{type:"number",id:"Numberofimagescommittedinalbum",name:"numberofimagescommittedinalbum",value:a.numberofimagescommittedinalbum,onChange:o})]})]}):"",e.jsxs(i,{children:[(a==null?void 0:a.video_requested)=="Yes"?e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsx("label",{htmlFor:"how_many_minute",children:"How many minutes for video"}),e.jsx(t,{type:"number",id:"how_many_minute",name:"how_many_minute",value:a.how_many_minute,onChange:o})]}):"",e.jsxs(l,{sm:"4",className:"mb-3",children:[e.jsxs("label",{htmlFor:"deliverables",children:["What are the deliverables? ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx(E,{id:"deliverables",name:"deliverables",rows:"3",value:a.deliverables,onChange:o,required:!0})]})]}),e.jsx(g,{type:"submit",color:"danger",className:"mb-4 mt-2",children:"Add Lead"}),e.jsxs(A,{className:"centered-modal",visible:_,onClose:()=>r(!1),children:[e.jsx(L,{children:x?e.jsx(v,{color:"success",children:u}):e.jsx(v,{color:"danger",children:u})}),e.jsx(w,{children:e.jsx(g,{color:"secondary",onClick:y,children:"Close"})})]})]})]})};export{K as default};
