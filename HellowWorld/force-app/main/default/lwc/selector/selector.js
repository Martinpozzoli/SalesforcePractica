import { LightningElement} from 'lwc';
/* import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
const fields = [NAME_FIELD]; */
//https://trailhead.salesforce.com/es-MX/content/learn/modules/lightning-web-components-basics/add-styles-and-data-to-a-lightning-web-component
export default class Selector extends LightningElement {

    selectedProductId;
    handleProductSelected(evt){
        this.selectedProductId = evt.detail;
    }
  /*   userId = Id; */

  /*   @wire(getRecord, {recordId: '$userId', fields})
    user;
    get name(){
        return getFieldValue(this.user.data, NAME_FIELD);
    } */
}