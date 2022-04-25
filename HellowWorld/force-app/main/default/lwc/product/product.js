import { LightningElement, api } from 'lwc';

export default class Product extends LightningElement {
    @api name = "Andes";
    @api imageUrl = "";
}