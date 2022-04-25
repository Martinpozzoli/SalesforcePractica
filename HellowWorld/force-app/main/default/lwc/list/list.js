import { LightningElement } from 'lwc';

export default class List extends LightningElement {

    handleTileClick(event){
        const evt = new CustomEvent('selected', {
            productId: event.detail
        });
        this.dispatchEvent(event);
    }
    /*
    handleProductSelected(event) {
        // Published ProductSelected message
        publish(this.messageContext, PRODUCT_SELECTED_MESSAGE, {
            productId: event.detail
        });
    }*/
}