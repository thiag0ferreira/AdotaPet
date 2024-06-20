import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  bemvindo() {
    this.navCtrl.navigateForward('/bemvindo');
  }

  adocoes() {
    this.navCtrl.navigateForward('/adocoes');
  }

  buscar() {
    this.navCtrl.navigateForward('/buscar');
  }

  perfil() {
    this.navCtrl.navigateForward('/perfil');
  }
}
