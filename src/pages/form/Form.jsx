import './form.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Form() {

    const id = useParams().formId;
    const [form, setForm] = useState({});
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        const getForm = async () => {
            try {
                const res = await axios.get("http://localhost:3300/form/" + id);
                setForm(res.data);
            }catch(err) {
                setForm('error');
            }
        }
        getForm();
    }, []);

    const handleSubmit = () => {
        setSubmit(!submit);
    }

    return (
        <div className='formWrapper'>
        {!submit && form !== 'error' ? <>
            <div className='formTop'>
                <h1>{form.title}</h1>
                <p>{form.desc}</p>
            </div>
            <form className='form'>
         {
            form?.fields?.map((field) => (
                <div className='formElementWrapper' key={field._id}>
                    <span className='formQuestion'>{field.question}</span>
                    {
                    field?.options?.map((option) => (
                        <span className='optionWrapper' key={option._id}>
                            <input
                                className={option.optionsType === 'text' ? 'area' : 'input'} 
                                name={option.optionsType === 'radio' && 'radio'}
                                type={option.optionsType}
                            />
                            <span className='option'>{option.optionLabel}</span>
                        </span>
                    ))
                    }
                </div>
            ))
            }
            <button type='submit' onClick={() => handleSubmit()} className='submitButton'>Sumbit</button>
            </form>
        </>
        : (
            <div className='formSubmit'>
                <span className='submitText'>{submit ? 'Your Response was recorded!' : 'Can\'t find the Form'}</span>
                <span onClick={() => submit && handleSubmit()} className='submitEdit'>{submit ? 'Edit Response' : 'Invalid form id!'}</span>
            </div>
        )
        }
        </div>
    );
}

export default Form;
