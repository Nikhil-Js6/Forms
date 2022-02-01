import { useState,useEffect } from 'react';
import './create.css';
import Field from '../../components/Field/Field';
import Header from '../../components/Header/Header';
import axios from 'axios';
import { AddCircleOutline } from '@mui/icons-material';

function Create() {

    const [fields, setFields] = useState([]);
    const [field, setField] = useState({});
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        fields:[],
    });

    const [elements, setelements] = useState(1);
    const [success, setSuccess] = useState(false);
    const [link, setLink] = useState('');
    const [successMsg, setSuccessMsg] = useState({
        heading: 'Creating your Form...',
        p: '',
        link: '',
    });

    useEffect(() => {
        const copyFields = [...fields];
        copyFields[elements-1] = field;
        setFields(copyFields);
        setFormData({...formData,fields:fields})
    },[field])

    const handleSumbit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const res = await axios.post("http://localhost:3300/form/create", formData);
            setSuccess(true);
            setLink(res.data);
            // handleSuccess(res.data);
        }catch(err) {
            console.log(err);
        }
    }
    const handleCreate = () => {
        setField({});
        setelements(elements+1);
        console.log(formData);
    }
    const deleteElement = () => {
        setelements(elements-1);
    }

    return (
    <div className='create'>
       { success 
        ? (
            <div className='successMsg'>
                <h1 className='successHeading'>{successMsg.heading}</h1>
                <span className='linkSpan'>
                    <p>{successMsg.p}</p>
                    <a href={`/form/${link}`} className='successLink'>
                        <span>{successMsg.link}</span>
                    </a>
                </span>
            </div>
          )
       :(<>
            <form>
                <Header setTitle={(title) => setFormData({...formData, title})} setDesc={(desc) => setFormData({ ...formData, desc})}/>
                {
                Array(elements).fill(
                    <Field
                        field={field}
                        setField={setField}
                        fields={fields}
                        setFields={setFields}
                        onDelete={() => deleteElement()}
                    />
                )}
                <div className='buttonWrapper'>
                    <button type='sumbit' className='createButton' onClick={(e) => {handleSumbit(e)}}>Create</button>
                </div>
            </form>
            <div className='addField'>
                <AddCircleOutline onClick={() => handleCreate()} className='addIcon'/>
            </div>
            </>
        )}
    </div>
  );
}

export default Create;

// const handleSuccess = (link) => {
//     setTimeout(() => {
//         setSuccessMsg({heading: 'Form Created Successfully', p: 'Updating..', link: 'link'});
//     }, 1500);
//     setTimeout(() => {
//         setSuccessMsg({heading: 'Form Created Successfully', p: 'Getting Id..', link: 'Updating status..'  });
//     }, 2700);
//     setTimeout(() => {
//         setSuccessMsg({heading: 'Form Created Successfully', p: 'Updating..', link: '**********'  });
//     }, 3700);

//     setTimeout(() => {
//         setSuccessMsg({heading: 'Form Created Successfully', p: 'Generating Password..', link: '###*********'  });
//     }, 4400);

//     setTimeout(() => {
//         setSuccessMsg({heading: 'Form Created Successfully', p: 'Updating..', link: '########*****'  });
//     }, 4900);

//     setTimeout(() => {
//         setSuccessMsg({heading: 'Form Created Successfully', p: 'Generating Hash..', link: '##########***'  });
//     }, 5400);

//     setTimeout(() => {
//         setSuccessMsg({heading: 'Form Created Successfully', p: 'Updating..', link: '###############'  });
//     }, 5900);

//     setTimeout(() => {
//         setSuccessMsg({heading: 'Form Created Successfully', p: 'Getting Link..', link: '$$$$##########'  });
//     }, 6400);

//     setTimeout(() => {
//         setSuccessMsg({heading: 'Form Created Successfully', p: 'Updating..', link: '$$$$$$$$######'  });
//     }, 6800);

//     setTimeout(() => {
//         setSuccessMsg({heading: 'Form Created Successfully', p: 'Updating..', link: '$$$$$$$$$$$$$$'  });
//     }, 6900);
//     setTimeout(() => {
//         setSuccessMsg({heading: 'Form Created Successfully!', p: 'Form link: ', link: `localhost:3000/form/${link}/`});
//     }, 7600);
// }