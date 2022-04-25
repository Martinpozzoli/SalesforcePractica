import { LightningElement } from 'lwc';

export default class BikeCard extends LightningElement {
    name = "Bianchi";
    description = "bici de ruta";
    category = 'Street';
    material = 'Steel';
    price = 35000;
    imageUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
}