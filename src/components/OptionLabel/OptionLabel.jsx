import { useState, useRef} from 'react';
import { RadioButtonUnchecked, CheckBoxOutlineBlank } from '@mui/icons-material';
import './optionlabel.css';

function OptionLabel({ typeNum, optionNum, setNewOption, options, setOptions }) {

    const optionType = (typeNum === 0
        ? 'text' : typeNum === 1
        ? 'textarea' : typeNum === 2
        ? 'checkbox' : 'radio');

    const inputRef = useRef();
    const [option, setOption] = useState({});

    const handleInput = () => {
        let newValue = inputRef.current.value;
        setOption({optionType, newValue});
        setNewOption(option);
        if(optionNum === 5){
            setOptions([...options, {optionType, newValue}]);
        }
    }
    return (
        <div className='optionElementWrap'>
            {typeNum === 2 ? <CheckBoxOutlineBlank /> : <RadioButtonUnchecked />}
            <input placeholder='Option' required ref={inputRef} onChange={() => handleInput()}/>
        </div>
    );
}

export default OptionLabel;
