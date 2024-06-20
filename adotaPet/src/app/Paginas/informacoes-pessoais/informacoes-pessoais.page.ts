import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController, ToastController} from '@ionic/angular'; // Importe o AlertController e o ToastController

@Component({
  selector: 'app-informacoes-pessoais',
  templateUrl: './informacoes-pessoais.page.html',
  styleUrls: ['./informacoes-pessoais.page.scss'],
})
export class InformacoesPessoaisPage implements OnInit, AfterViewInit {
  cep: string = '';
  endereco: string = '';
  numero: string = '';
  complemento: string = '';
  telefone: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController, // Injete o AlertController
    private renderer: Renderer2,
    private toastCtrl: ToastController // Injete o ToastController
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const telefoneInput = this.renderer.selectRootElement('ion-input[ngModel="telefone"]', true);

    this.renderer.listen(telefoneInput, 'input', (event) => {
      const input = event.target;
      let value = input.value.replace(/\D/g, '');
      const length = value.length;

      if (length <= 10) {
        value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
      } else {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      }

      // Atualize o valor do input
      this.renderer.setProperty(input, 'value', value);
    });
  }

  voltar() {
    this.router.navigate(['/cadastrar']); // Navega de volta para a página de cadastro
  }

  async registrar() {
    if (!this.cep || !this.endereco || !this.numero || !this.telefone) {
      this.presentToast('Por favor, preencha todos os campos.');
      return;
    }
     {
      // Aqui você pode implementar a lógica para registrar as informações pessoais
      // Por exemplo, enviar os dados para um serviço backend ou salvar localmente

      // Exemplo de registro simulado com console.log
      console.log('Dados a serem registrados:');
      console.log('CEP:', this.cep);
      console.log('Endereço:', this.endereco);
      console.log('Número:', this.numero);
      console.log('Complemento:', this.complemento);
      console.log('Telefone:', this.telefone);

      // Exemplo de navegação para a próxima página após o registro


      // Exibir alerta de sucesso
      const alert = await this.alertController.create({
        header: 'Sucesso!',
        message: 'Cadastro realizado com sucesso.',
        buttons: ['OK']

      });
       this.router.navigate(['/home']); // Navega para a página de login após o registro

      await alert.present();

    }
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
