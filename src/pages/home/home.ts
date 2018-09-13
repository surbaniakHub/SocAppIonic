import { ValueApiProvider } from './../../providers/value-api/value-api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public values = [];

  constructor(private valueApiProvider: ValueApiProvider, public navCtrl: NavController) {

  }
  
  ionViewDidLoad(){
    this.valueApiProvider.getValues()
        .subscribe(allValues => this.values = allValues);    
  }
}
