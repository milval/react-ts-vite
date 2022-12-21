import { TagBox } from 'devextreme-react/tag-box';
import { useEffect, useState } from 'react';
import { products } from './data.js';

const filterData = products.filter((item: any) => {
    return [1,2].includes(item.ID)
}).map((item: any) => item.ID)

const TagBoxComponent = () => {

    const [productData, setProductData] = useState<Array<any>>([]);
    const [ids, setIds] = useState<Array<string>>([]);

    

    useEffect(() => {

        setProductData(products);
        setIds(filterData)

    }, []);

    

    const onValueChanged = (event: any) => {

        console.log(event);

        setIds(event.value)

    }

    return (
        <div className="dx-fieldset">
          <div className="dx-field">
            <div className="dx-field-label">Multi-tag for several items</div>
            <div className="dx-field-value">
              <TagBox
                items={productData}
                value={ids}
                showSelectionControls={true}
                maxDisplayedTags={10}
                displayExpr="Name"
                valueExpr="ID"
                selectAllMode="allPages"
                onValueChanged={onValueChanged}
              />
            </div>
          </div>
        </div>
    )
}

export default TagBoxComponent;