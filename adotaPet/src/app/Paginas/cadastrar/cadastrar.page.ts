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

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {}

  registrar() {
    // Verifica se todos os campos estão preenchidos
    if (!this.nome || !this.email || !this.senha || !this.confirmarSenha) {
      this.presentToast('Por favor, preencha todos os campos.');
      return;
    }

    // Verifica se as senhas coincidem
    if (this.senha !== this.confirmarSenha) {
      this.presentToast('As senhas não coincidem.');
      return;
    }

    // Aqui você pode implementar a lógica para registrar o usuário
    // Exemplo simples: exibir os dados registrados
    console.log('Nome:', this.nome);
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);

    // Navegar para a página de login após o registro
    this.navCtrl.navigateForward('/informacoes-pessoais'); // Substitua '/login' pela rota da sua página de login
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
