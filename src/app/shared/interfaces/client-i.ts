import { StateClient } from '../enums/state-client.enum';

export interface ClientI {
  id: number;
  name: string;
  ca: number;
  comment: string;
  state: StateClient;
}
