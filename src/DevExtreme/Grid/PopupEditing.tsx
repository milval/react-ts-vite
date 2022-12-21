
import React, { useState, useRef } from 'react'
import DataGrid, {
    Column,
    Editing,
    Popup,
    Paging,
    Lookup,
    Form,
  } from 'devextreme-react/data-grid';
  import 'devextreme-react/text-area';
  import { ButtonItem, ButtonOptions, Item, SimpleItem } from 'devextreme-react/form';
  import { CheckBox } from 'devextreme-react/check-box';
  import { employees, states } from './data.js';
import FormEditing from './FormEditing.js';

const PopupEditing = () => {

  const [isHomeAddressVisible, setHomeAddressVisible] = useState(true)
  const [employee, setEmployee] = useState<any>({})
  

  const checkBoxOptions = {
    text: 'Show Address',
    value: isHomeAddressVisible,
    onValueChanged: (e: any) => {
      setHomeAddressVisible(e.component.option('value'));
    },
  };

  const rednerFormEditing = (data: any) => {
    return <FormEditing employee={employee} />;
  }

  const onEditingStart = (event: any) => {
    setEmployee(event.data);
  }


  return (
    <div id="data-grid-demo">
        <DataGrid
          dataSource={employees}
          keyExpr="ID"
          showBorders={true}
          onEditingStart={onEditingStart}
        >
          <Paging enabled={false} />
          <Editing
            mode="popup"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}>
            <Popup title="Employee Info" showTitle={true} width={700} height={525} />
            {/* <FormEditing employee={employee} /> */}
            
            <Form>
            <Item colCount={1} colSpan={1} render={rednerFormEditing} />
               {/* <Item itemType="group" colCount={2} colSpan={2}>
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
              </Item>  */}
            </Form>
          </Editing>
          <Column dataField="Prefix" caption="Title" width={70} />
          <Column dataField="FirstName" />
          <Column dataField="LastName" />
          <Column dataField="BirthDate" dataType="date" />
          <Column dataField="Position" width={170} />
          <Column dataField="HireDate" dataType="date" />
          <Column dataField="StateID" caption="State" width={125}>
            <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
          </Column>
          <Column dataField="Address" visible={false} />
          <Column dataField="Notes" visible={false} />
        </DataGrid>
      </div>
  )
}



export default PopupEditing
