import { useState } from 'react';
import { Segment, Menu, CheckBox, RadioButtonChecked, ArrowDropDown } from '@mui/icons-material';
import './optiontype.css';

function OptionType({ typeNum, setTypeNum }) {

    const [open, setOpen] = useState(false);
    const optionsList = ['Short Answer', 'Paragraph', 'Checkbox', 'Multiple Choices'];

    return (
        <span className='optionSpan'>
            <span className='type' onClick={() => setOpen(true)}>
                {typeNum === 0 
                   ? <Segment />
                   : typeNum === 1 ? <Menu />
                   : typeNum === 2 ? <CheckBox />
                   : <RadioButtonChecked />
                }
                <p>{optionsList[typeNum]}</p>
                <ArrowDropDown/>
            </span>
            {
            open && (
                <div className='select' onClick={() => setOpen(false)}>
                    <span className='option' onClick={() => setTypeNum(0)}>
                        <Segment />
                        <p>Short Answer</p>
                    </span>
                    <span className='option' onClick={() => setTypeNum(1)}>
                        <Menu />
                        <p>Paragraph</p>
                    </span>
                    <span className='option' onClick={() => setTypeNum(2)}>
                        <CheckBox />
                        <p>CheckBoxes</p>
                    </span>
                    <span className='option' onClick={() => setTypeNum(3)}>
                        <RadioButtonChecked />
                        <p>Multi Choices</p>
                    </span>
                </div>
            )}
        </span>
    );
}

export default OptionType;
