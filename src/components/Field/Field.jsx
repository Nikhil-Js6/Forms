import'./field.css';
import { useState } from 'react';
import Options from '../Options/Options';
import { ConstructionOutlined } from '@mui/icons-material';

function Field({ field, setField, fields, setFields, onDelete }) {

    const [ques, setQues] = useState('');
    const handleQues = (q) => {
        setQues(q);
        const quesObject = {...field,question:q}
        setField(quesObject);
    }

return(
    <div className='fieldWrapper'>
        <span className='inputSpan'>
            <input type='text' placeholder='Question' required value={ques} onChange={(e) => handleQues(e.target.value)} />
        </span>
        <Options onDelete={onDelete} field={field} setField={setField} fields={fields} setFields={setFields}/>
    </div>
    );
}

export default Field;

// form = {
//     title: '',
//     desc: '',
//     fields: [
//         {
//             ques: '',
//             options: [],
//         }
//     ]
// }