import'./field.css';
import { useState } from 'react';
import Options from '../Options/Options';

function Field({ field, setField, fields, setFields, onDelete }) {

    const [ques, setQues] = useState('');
    const handleQues = (q) => {
        setQues(q);
        setField({...field, question: q});
        setFields([...fields, field]);
    }

return(
    <div className='fieldWrapper'>
        <span className='inputSpan'>
            <input type='text' placeholder='Question' required value={ques} onChange={(e) => handleQues(e.target.value)} />
        </span>
        <Options onDelete={onDelete} field={field} setField={setField}/>
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