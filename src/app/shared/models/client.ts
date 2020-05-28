import { StateClient } from '../enums/state-client.enum';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  id: number;
  name: string;
  ca: number;
  comment: string;
  state= StateClient.ACTIVE;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

  getCa(): number {
    return this.ca;
  }

  // totalHt(): number {
  //   return this.tjmHt * this.nbJours;
  // }
  // totalTtc(): number {
  //   return this.totalHt() * (1 + this.tva / 100);
  // }
}
