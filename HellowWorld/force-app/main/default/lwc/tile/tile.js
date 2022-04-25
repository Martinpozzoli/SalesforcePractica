import { LightningElement, api } from 'lwc';

export default class Tile extends LightningElement {
    @api product;

    tileClick(){
        const event = new CustomEvent('tileclick', {
            detail: this.product.Id
        });
        this.dispatchEvent(event);
    }
}