import React, { useState } from 'react';
import 'devextreme-react/text-area';

import Form, { ButtonItem, ButtonOptions, Item, SimpleItem } from 'devextreme-react/form';
// import { employee } from './data.js';

const FormEditing = (props: any) => {

    const [isHomeAddressVisible, setHomeAddressVisible] = useState(true);

    const checkBoxOptions = {
        text: 'Show Address',
        value: isHomeAddressVisible,
        onValueChanged: (e: any) => {
        setHomeAddressVisible(e.component.option('value'));
        },
    }  

    console.log('form editing', props)

  return (
    <>
        {/* <div className="long-title"><h3>Personal details</h3></div> */}
        <div className="form-container" style={{width: '652px'}}>
          <Form
            id="form"
            formData={props.employee}>
            <Item itemType="group" colCount={2} colSpan={2}>
                <Item dataField="FirstName" />
                <Item dataField="LastName" />
                <Item dataField="Prefix" />
                <Item dataField="BirthDate" />
                <Item dataField="Position" />
                <Item dataField="HireDate" />
                <Item
                  dataField="Notes"
                  editorType="dxTextArea"
                  colSpan={2}
                //   editorOptions={notesEditorOptions} 
                  />
                  <SimpleItem editorType="dxCheckBox" editorOptions={checkBoxOptions} />
                    
              </Item>
              
              <Item itemType="group" caption="Home Address" colCount={2} colSpan={2}
                visible={isHomeAddressVisible}
                >
                <Item dataField="StateID" />
                <Item dataField="Address" />
              </Item>
          </Form>
        </div>
    </>
  )
}

export default FormEditing