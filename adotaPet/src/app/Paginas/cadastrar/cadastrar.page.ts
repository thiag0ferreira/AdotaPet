import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  constructor(private navCtrl: NavController,
              private toastCtrl: ToastController) {}

  registrar() {
    console.log('registrar() chamado'); // Verificar se isso aparece duas vezes no console quando clicado uma vez

    if (!this.nome || !this.email || !this.senha || !this.confirmarSenha) {
      this.presentToast('Por favor, preencha todos os campos.');
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      this.presentToast('As senhas não coincidem.');
      return;
    }

    console.log('Nome:', this.nome);
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);

    this.navCtrl.navigateForward('/informacoes-pessoais');
  }

  cancelar() {
    this.navCtrl.navigateBack('/home');
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
