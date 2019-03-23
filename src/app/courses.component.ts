
import { Component } from "@angular/core"


@Component({
    selector:'course',
    template:
    `
    <div [ngSwitch]= "color">
    <p *ngSwitchCase="'red'"> red colour is here</p>
    <p *ngSwitchCase = "'blue'">blue colour is here</p>
    <p *ngSwitchCase = "'green'">green colour is here</p>
    <p *ngSwitchDefault>no color here</p>

    <button class="btn"[ngClass]="{'btn-success':isSelected,'btn-danger':isSelected}">submit</button>
    <div teju>Hello</div>
    `
})
export class courseComponent {
    isSelected=true;
    color='yellow';
    lang=[];
    employeeData=[
        {
            id:1,
            name:"teju",
            age:22,
            salary:30000,
            doj:new Date('2/10/2018'),
            designation:'java developer'
        }
    ];
    addEmp(){
        this.employeeData.push({
            id:2, 
            name:"sneha",
            age:23,
            salary:20000,
            doj:new Date('3/11/2018'),
            designation:'software developer'
        });
    }
}