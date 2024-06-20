import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrarpet',
  templateUrl: './cadastrarpet.page.html',
  styleUrls: ['./cadastrarpet.page.scss'],
})
export class CadastrarpetPage {
  ages: number[] = Array.from({ length: 21 }, (_, i) => i); // Idades de 0 a 20
  hasSpecialNeeds: boolean = false; // Inicializa como false
  castrado: boolean = false;
  vermifugado: boolean = false;
  pedigree: boolean = false;
  vacinado: boolean = false;
  weight: string[] =[
    '1kg a 5kg',
    '6kg a 10kg',
    '11kg a 15kg',
    '16kg a 20kg',
    '21kg a 25kg',
    '26kg a 30kg',
    '31kg a 35kg',
    '36kg a 40kg',
    '41kg a 45kg',
    '46kg a 50kg',
    'Mais de 50Kg'
  ];


  constructor(private navCtrl: NavController,
              ) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);

    }
  }


  cancelar() {
    this.navCtrl.navigateBack('/bemvindo');
  }

}

