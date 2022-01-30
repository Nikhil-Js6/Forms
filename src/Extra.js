import React, { useState } from 'react';

function Extra() {
   const style={
      width: '90px',height: '30px',marginLeft: '10px',
   }
   const [form, setForm] = React.useState({
      title: '',
      desc: '',
      fields: [],
   });

   // fields: [{ ques: '', options: [{ optTyp: '', optLbl: ''}] }],
   // let fields = []; let field = {}; 
   // let options = []; let option = { };

   // let opt1 = 'in'; let opl1 = 'o1';
   // let opt2 = 'in'; let opl2 = 'o2';
   // let opt3 = 'in'; let opl3 = 'o3';
   // let opt4 = 'in'; let opl4 = 'o4';

   // option = {...option, opl1};
   // option = {...option, opt1};   // At option
   // options = [...options, option];   // At options
   // option = {opl2};
   // option = {...option, opt2};
   // options =  [...options, option];
   // option = {opl3};
   // option = {...option, opt3}
   // options =  [...options, option];
   // option = {opl4};
   // option = {...option, opt4};
   // options =  [...options, option];

   // let q = 'Q1';   //At input
   // field = {...field, ques: q};  // At fields    
   // field = {...field, options};

   // fields = [...fields, field];   // At fields

   // let q2 = 'Q2';
   // field = {ques: q2};   // new ques

   // let optq1 = 'c'; let oplq1 = 't1';   // new options
   // let optq2 = 'c'; let oplq2 = 't2';
   // let optq3 = 'c'; let oplq3 = 't3';
   // let optq4 = 'c'; let oplq4 = 't4';

   // option = {oplq1};
   // option = {...option, optq1};   // add options
   //    options = [option];
   // option = {oplq2};
   // option = {...option, optq2};
   //    options =  [...options, option];
   // option = {oplq3};
   // option = {...option, optq3}
   //    options =  [...options, option];
   // option = {oplq4};
   // option = {...option, optq4};
   //    options =  [...options, option];

   // field = {...field, options};    // set field
   // fields = [...fields, field];    // set fields

   // let title = 'Form title';     // At header
   // let desc = 'Form desc';    // At header

  // const formData = {title, desc, fields};   // complete form
   const [formData, setformData] = useState({});
   const [fields, setfields] = useState([]);
   const [field, setfield] = useState({}); const [fldN, setfldN] = useState(1);
   const [ques, setques] = useState('');
   const [option, setoption] = useState({}); const [optN, setOptN] = useState(1);
   const [options, setoptions] = useState([]);
   function addOption() {
      setoptions([...options, option]);setOptN(optN+1);
   }
   function setOptions() {
      setoptions([...options, option]);
      setfield({ques, options});
   }
   function setField() {
      setfields([...fields, field]);setfldN(fldN+1);setOptN(0);
   }
   

  return <div style={{marginTop: '100px'}}>
{Array(fldN).fill(<>
   <input placeholder='ques' onChange={(e) => setques(e.target.value)}/>
   <button onClick={() => addOption()}>+</button>
   {Array(optN).fill(<input placeholder='option' onChange={(e) => setoption({opt: 'in', opl: e.target.value})}/>)}
   <button onClick={() => setOptions()}>Add</button> 
   <button onClick={() => setField()}>New Field</button>
</>)}
   <button style={style} onClick={() => console.log(formData)}>form</button>
   <button style={style} onClick={() => console.log(fields)}>fields</button>
   <button style={style} onClick={() => console.log(field)}>field</button>
   <button style={style} onClick={() => console.log(options)}>options</button>
   <button style={style} onClick={() => console.log(option)}>option</button>
  </div>;
}

export default Extra;