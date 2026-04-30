import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, SlicePipe } from '@angular/common';

const client1 = {
  name: 'Euclides',
  gender: 'male',
  age: 29,
  address: ' Calle falsa 123',
}
const client2 = {
  name: 'Maria',
  gender: 'female',
  age: 25,
  address: ' Calle falsa 123',
}
@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe],
  templateUrl: './uncommon-page.component.html',
})

export default class UncommonPageComponent {

  // i18 Select
  client = signal(client1);

  invitarionmap = {
    male: 'invitarlo',
    female: 'invitarla',
  }
  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando'
  })
  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  clients = signal(['Maria', 'Euclides', 'Pepe', 'Juan']);

  deleteClient() {
    const clients = this.clients();
    clients.pop();
    this.clients.set(clients);
  }
}
