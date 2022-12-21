
import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup } from '@mui/material';

interface CheckBoxView {
    valueSelected: number,
    isCheckedOne: boolean,
    isCheckedTwo: boolean
}

const checkBoxInit: CheckBoxView = {
    valueSelected: 1,
    isCheckedOne: true,
    isCheckedTwo: false
}

const CheckBoxComponent = () => {

    const [checkBoxModel, setCheckBoxModel] = useState<CheckBoxView>(checkBoxInit);



    const onValueChanged = (event: any) => {
        console.log(event)

        if (event.target.value === '1') {

            setCheckBoxModel({
                ...checkBoxModel,
                valueSelected: event.target.value,
                isCheckedOne: true,
                isCheckedTwo: false
            })
        }
        if (event.target.value === '2') {
            setCheckBoxModel({
                ...checkBoxModel,
                valueSelected: event.target.value,
                isCheckedOne: false,
                isCheckedTwo: true
            })
        }
    }

    return (
        <>

            <FormGroup>
                <FormControlLabel label="Check box 1" control={
                    <Checkbox value={1} checked={checkBoxModel.isCheckedOne} onChange={onValueChanged} />
                }  
                />
                <FormControlLabel label="Check box 2" control={
                    <Checkbox value={2} checked={checkBoxModel.isCheckedTwo} onChange={onValueChanged} />
                }  
                />
            </FormGroup>

            <div>Value selected: {checkBoxModel.valueSelected}</div>
        </>
        
    )
}

export default CheckBoxComponent
