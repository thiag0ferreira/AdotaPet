import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}


  bemvindo() {
    this.navCtrl.navigateForward('/bemvindo');
  }

  login($event: SubmitEvent) {

  }
}
