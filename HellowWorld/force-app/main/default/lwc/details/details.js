import { LightningElement, api } from 'lwc';
import { products } from 'c/data';

export default class Details extends LightningElement {

    product;

    productoId= undefined;
    set productId(value){
        this.productoId = value;
        this.product = products.find(product => product.Id === value);
    }

    @api get productId(){
        return this.productoId;
    }
}