import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async tabAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar',
      subHeader: 'Tabs',
      message: 'Você quer ir mesmo para pagina Tabs?',
      buttons: [{
        text: "SIM",
        handler: () => {
          window.location.href = "/tabs";
        }
      }, {
          text: 'NÃO',
          role: 'cancel',
          cssClass: 'secondary'
      }]
    });

    await alert.present();
  }

  async searchAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar',
      subHeader: 'Search',
      message: 'Você quer ir mesmo para pagina Search?',
      buttons: [{
        text: "SIM",
        handler: () => {
          window.location.href = "/list";
        }
      }, {
          text: 'NÃO',
          role: 'cancel',
          cssClass: 'secondary'
      }]
    });

    await alert.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
