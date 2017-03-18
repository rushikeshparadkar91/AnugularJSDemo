import { Component } from '@angular/core';
import { Customer } from './model';
@Component({
  moduleId: module.id,
  selector: 'my-app', // to use me do this <my-app>.
  templateUrl: `app.component.html`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  regions: ['east','mid-west','west','north','south'];
  image = 'favicon.ico';
  color = 'red';
  hideaddress = false;
  customer: Customer = {
    id: 1,
    name: 'Rushikesh Paradkar',
    address: {
      street: '4910 W 108th St',
      city: 'Leawood',
      state: 'Kansas',
      region: 'east'
    }
  };

  cars = [
    {model : "Ford Mustang", color : "red"},
    {model : "Fiat 500", color : "white"},
    {model : "Volvo XC90", color : "black"}
];

  clicked() {
    this.color = this.color == 'red' ? 'blue' : 'red';
  }
  colorChange(color: string) {
    this.color = color;
  }
  addressClick() {
    this.hideaddress = !this.hideaddress;
  }
}
