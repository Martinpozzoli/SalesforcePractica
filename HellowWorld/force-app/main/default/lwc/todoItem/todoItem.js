import { LightningElement, api } from 'lwc';

export default class TodoItem extends LightningElement {
    
    @api itemName;
    
    nextHandler(){
        this.dispatchEvent(new CustomEvent('next'));
    }
}