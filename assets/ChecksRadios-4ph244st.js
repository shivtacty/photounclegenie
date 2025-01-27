import{r as D,_ as w,R as x,c as p,b as k,P as i,j as e,D as N,E as a,F as o,J as d,G as t}from"./index-6svv7UbV.js";import{a as S,b as l}from"./DefaultLayout-CrPev1E-.js";import{C as s}from"./CFormCheck-DVRyH4KX.js";import{C as z}from"./CFormLabel-BHOnM8Ww.js";import"./CContainer-BoyOI8tw.js";import"./cil-user-Dlmw-Gem.js";import"./CFormControlValidation-BDeQNVlo.js";var r=D.forwardRef(function(c,C){var n,y=c.className,h=c.id,b=c.invalid,u=c.label,g=c.reverse,m=c.size,j=c.type,v=j===void 0?"checkbox":j,f=c.valid,R=w(c,["className","id","invalid","label","reverse","size","type","valid"]);return x.createElement("div",{className:p("form-check form-switch",(n={"form-check-reverse":g},n["form-switch-".concat(m)]=m,n["is-invalid"]=b,n["is-valid"]=f,n),y)},x.createElement("input",k({type:v,className:p("form-check-input",{"is-invalid":b,"is-valid":f}),id:h},R,{ref:C})),u&&x.createElement(z,k({customClassName:"form-check-label"},h&&{htmlFor:h}),u))});r.propTypes={className:i.string,id:i.string,invalid:i.bool,label:i.oneOfType([i.string,i.node]),reverse:i.bool,size:i.oneOf(["lg","xl"]),type:i.oneOf(["checkbox","radio"]),valid:i.bool};r.displayName="CFormSwitch";const G=()=>e.jsxs(N,{children:[e.jsxs(a,{xs:12,children:[e.jsx(S,{href:"forms/checks-radios/"}),e.jsxs(o,{className:"mb-4",children:[e.jsx(d,{children:e.jsx("strong",{children:"React Checkbox"})}),e.jsx(t,{children:e.jsxs(l,{href:"forms/checks-radios",children:[e.jsx(s,{id:"flexCheckDefault",label:"Default checkbox"}),e.jsx(s,{id:"flexCheckChecked",label:"Checked checkbox",defaultChecked:!0})]})})]})]}),e.jsx(a,{xs:12,children:e.jsxs(o,{className:"mb-4",children:[e.jsxs(d,{children:[e.jsx("strong",{children:"React Checkbox"})," ",e.jsx("small",{children:"Disabled"})]}),e.jsxs(t,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Add the ",e.jsx("code",{children:"disabled"})," attribute and the associated ",e.jsx("code",{children:"<label>"}),"s are automatically styled to match with a lighter color to help indicate the input's state."]}),e.jsxs(l,{href:"forms/checks-radios#disabled",children:[e.jsx(s,{label:"Disabled checkbox",disabled:!0}),e.jsx(s,{label:"Disabled checked checkbox",defaultChecked:!0,disabled:!0})]})]})]})}),e.jsx(a,{xs:12,children:e.jsxs(o,{className:"mb-4",children:[e.jsx(d,{children:e.jsx("strong",{children:"React Radio"})}),e.jsxs(t,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Add the ",e.jsx("code",{children:"disabled"})," attribute and the associated ",e.jsx("code",{children:"<label>"}),"s are automatically styled to match with a lighter color to help indicate the input's state."]}),e.jsxs(l,{href:"forms/checks-radios#radios",children:[e.jsx(s,{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",label:"Default radio"}),e.jsx(s,{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",label:"Checked radio",defaultChecked:!0})]})]})]})}),e.jsx(a,{xs:12,children:e.jsxs(o,{className:"mb-4",children:[e.jsxs(d,{children:[e.jsx("strong",{children:"React Radio"})," ",e.jsx("small",{children:"Disabled"})]}),e.jsx(t,{children:e.jsxs(l,{href:"forms/checks-radios#disabled-1",children:[e.jsx(s,{type:"radio",name:"flexRadioDisabled",id:"flexRadioDisabled",label:"Disabled radio",disabled:!0}),e.jsx(s,{type:"radio",name:"flexRadioDisabled",id:"flexRadioCheckedDisabled",label:"Disabled checked radio",defaultChecked:!0,disabled:!0})]})})]})}),e.jsx(a,{xs:12,children:e.jsxs(o,{className:"mb-4",children:[e.jsx(d,{children:e.jsx("strong",{children:"React Switches"})}),e.jsxs(t,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["A switch has the markup of a custom checkbox but uses the ",e.jsx("code",{children:"switch"})," boolean properly to render a toggle switch. Switches also support the ",e.jsx("code",{children:"disabled"})," ","attribute."]}),e.jsxs(l,{href:"forms/checks-radios#switches",children:[e.jsx(r,{label:"Default switch checkbox input",id:"formSwitchCheckDefault"}),e.jsx(r,{label:"Checked switch checkbox input",id:"formSwitchCheckChecked",defaultChecked:!0}),e.jsx(r,{label:"Disabled switch checkbox input",id:"formSwitchCheckDisabled",disabled:!0}),e.jsx(r,{label:"Disabled checked switch checkbox input",id:"formSwitchCheckCheckedDisabled",defaultChecked:!0,disabled:!0})]})]})]})}),e.jsx(a,{xs:12,children:e.jsxs(o,{className:"mb-4",children:[e.jsxs(d,{children:[e.jsx("strong",{children:"React Switches"})," ",e.jsx("small",{children:"Sizes"})]}),e.jsx(t,{children:e.jsxs(l,{href:"forms/checks-radios#sizes",children:[e.jsx(r,{label:"Default switch checkbox input",id:"formSwitchCheckDefault"}),e.jsx(r,{size:"lg",label:"Large switch checkbox input",id:"formSwitchCheckDefaultLg"}),e.jsx(r,{size:"xl",label:"Extra large switch checkbox input",id:"formSwitchCheckDefaultXL"})]})})]})}),e.jsx(a,{xs:12,children:e.jsxs(o,{className:"mb-4",children:[e.jsxs(d,{children:[e.jsx("strong",{children:"React Checks and Radios"})," ",e.jsx("small",{children:"Default layout (stacked)"})]}),e.jsxs(t,{children:[e.jsx("p",{className:"text-body-secondary small",children:"By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced."}),e.jsxs(l,{href:"forms/checks-radios#default-stacked",children:[e.jsx(s,{id:"defaultCheck1",label:"Default checkbox"}),e.jsx(s,{id:"defaultCheck2",label:"Disabled checkbox",disabled:!0})]}),e.jsxs(l,{href:"forms/checks-radios#default-stacked",children:[e.jsx(s,{type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"option1",label:"Default radio",defaultChecked:!0}),e.jsx(s,{type:"radio",name:"exampleRadios",id:"exampleRadios2",value:"option2",label:"Second default radio"}),e.jsx(s,{type:"radio",name:"exampleRadios",id:"exampleRadios3",value:"option3",label:"Disabled radio",disabled:!0})]})]})]})}),e.jsx(a,{xs:12,children:e.jsxs(o,{className:"mb-4",children:[e.jsxs(d,{children:[e.jsx("strong",{children:"React Checks and Radios"})," ",e.jsx("small",{children:"Inline"})]}),e.jsxs(t,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Group checkboxes or radios on the same horizontal row by adding ",e.jsx("code",{children:"inline"})," ","boolean property to any ",e.jsx("code",{children:"<CFormCheck>"}),"."]}),e.jsxs(l,{href:"forms/checks-radios#inline",children:[e.jsx(s,{inline:!0,id:"inlineCheckbox1",value:"option1",label:"1"}),e.jsx(s,{inline:!0,id:"inlineCheckbox2",value:"option2",label:"2"}),e.jsx(s,{inline:!0,id:"inlineCheckbox3",value:"option3",label:"3 (disabled)",disabled:!0})]}),e.jsxs(l,{href:"forms/checks-radios#inline",children:[e.jsx(s,{inline:!0,type:"radio",name:"inlineRadioOptions",id:"inlineCheckbox1",value:"option1",label:"1"}),e.jsx(s,{inline:!0,type:"radio",name:"inlineRadioOptions",id:"inlineCheckbox2",value:"option2",label:"2"}),e.jsx(s,{inline:!0,type:"radio",name:"inlineRadioOptions",id:"inlineCheckbox3",value:"option3",label:"3 (disabled)",disabled:!0})]})]})]})}),e.jsx(a,{xs:12,children:e.jsxs(o,{className:"mb-4",children:[e.jsxs(d,{children:[e.jsx("strong",{children:"React Checks and Radios"})," ",e.jsx("small",{children:"Without labels"})]}),e.jsxs(t,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Remember to still provide some form of accessible name for assistive technologies (for instance, using ",e.jsx("code",{children:"aria-label"}),")."]}),e.jsxs(l,{href:"forms/checks-radios#without-labels",children:[e.jsx("div",{children:e.jsx(s,{id:"checkboxNoLabel",value:"","aria-label":"..."})}),e.jsx("div",{children:e.jsx(s,{type:"radio",name:"radioNoLabel",id:"radioNoLabel",value:"","aria-label":"..."})})]})]})]})}),e.jsx(a,{xs:12,children:e.jsxs(o,{className:"mb-4",children:[e.jsx(d,{children:e.jsx("strong",{children:"Toggle buttons"})}),e.jsxs(t,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Create button-like checkboxes and radio buttons by using ",e.jsx("code",{children:"button"})," boolean property on the ",e.jsx("code",{children:"<CFormCheck>"})," component. These toggle buttons can further be grouped in a button group if needed."]}),e.jsx(l,{href:"forms/checks-radios#toggle-buttons",children:e.jsx(s,{button:{color:"primary "},id:"btn-check",autoComplete:"off",label:"Single toggle"})}),e.jsx(l,{href:"forms/checks-radios#toggle-buttons",children:e.jsx(s,{button:{color:"primary "},id:"btn-check-2",autoComplete:"off",label:"Checked",defaultChecked:!0})}),e.jsx(l,{href:"forms/checks-radios#toggle-buttons",children:e.jsx(s,{button:{color:"primary "},id:"btn-check-3",autoComplete:"off",label:"Disabled",disabled:!0})}),e.jsx("h3",{children:"Radio toggle buttons"}),e.jsxs(l,{href:"forms/checks-radios#toggle-buttons",children:[e.jsx(s,{button:{color:"secondary"},type:"radio",name:"options",id:"option1",autoComplete:"off",label:"Checked",defaultChecked:!0}),e.jsx(s,{button:{color:"secondary"},type:"radio",name:"options",id:"option2",autoComplete:"off",label:"Radio"}),e.jsx(s,{button:{color:"secondary"},type:"radio",name:"options",id:"option3",autoComplete:"off",label:"Radio",disabled:!0}),e.jsx(s,{button:{color:"secondary"},type:"radio",name:"options",id:"option4",autoComplete:"off",label:"Radio"})]}),e.jsx("h3",{children:"Outlined styles"}),e.jsx("p",{className:"text-body-secondary small",children:"Different variants of button, such at the various outlined styles, are supported."}),e.jsxs(l,{href:"forms/checks-radios#toggle-buttons",children:[e.jsx("div",{children:e.jsx(s,{button:{color:"primary",variant:"outline"},id:"btn-check-outlined",autoComplete:"off",label:"Single toggle"})}),e.jsx("div",{children:e.jsx(s,{button:{color:"secondary",variant:"outline"},id:"btn-check-2-outlined",autoComplete:"off",label:"Checked",defaultChecked:!0})}),e.jsxs("div",{children:[e.jsx(s,{button:{color:"success",variant:"outline"},type:"radio",name:"options-outlined",id:"success-outlined",autoComplete:"off",label:"Radio",defaultChecked:!0}),e.jsx(s,{button:{color:"danger",variant:"outline"},type:"radio",name:"options-outlined",id:"danger-outlined",autoComplete:"off",label:"Radio"})]})]})]})]})})]});export{G as default};
