import { useState } from 'react';
import { CheckBoxOutlineBlank, Close, Delete, RadioButtonUnchecked, TextFields } from '@mui/icons-material';
import './options.css';
import OptionType from '../OptionType/OptionType';

function Options({ onDelete, field, setField }) {

    const [options, setOptions] = useState([]);
    const [option, setOption] = useState({});
    const [typeNum, setTypeNum] = useState(0);
    const [optionNum, setOptionNum] = useState(1);
    const optionsList = ['Short Answer', 'Paragraph', 'Checkbox', 'Multiple Choices'];
    const optionType = (typeNum === 0
        ? 'text' : typeNum === 1
        ? 'textarea' : typeNum === 2
        ? 'checkbox' : 'radio');

    const addOption = () => {
        if(optionNum <= 5){
            setOptions([...options, option]);
            setField({...field, options });
            setOptionNum(optionNum === 6 ? 5 : optionNum + 1);
            setOption({});
        }
    }
    const handleDelete = () => {
        setOptionNum(optionNum - 1);
    }

    return (
        <div>
            <span className='fieldTop'>
                <OptionType typeNum={typeNum} setTypeNum={setTypeNum}/>
            </span>
            <div className='fieldBottom'>
                <span className={(typeNum < 2 && 'typeName')}>{optionsList[typeNum]}</span>
            {typeNum > 1 && Array(optionNum < 6 ? optionNum : 5).fill(
                <div className='optionWrap'>
                    <div className='optionElementWrap'>
                        {typeNum === 2 ? <CheckBoxOutlineBlank /> : <RadioButtonUnchecked />}
                        <input placeholder='Option' onChange={(e) => setOption({ optionType, optionLabel: e.target.value })}/>
                    </div>
                    {optionNum > 1 && <Close className='remove' onClick={() => handleDelete()} />}
                </div>
            )}
            { typeNum > 1 &&
                <span 
                    className={(optionNum <= 5 ? 'addText' : 'addText limit')}
                    onClick={() => optionNum <= 5 && addOption()}
                >
                    {optionNum > 5 ? 'You can add maximum 5 Options..' : 'Add Option..'}
                </span>
            }
            </div>
            <span className='deleteIcon' onClick={() => onDelete()}><Delete/></span>
        </div>
    );
}

export default Options;
