import { Directive, Input, HostBinding } from '@angular/core';
import { StateOrder } from '../enums/state-order.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective {
  @Input() appState: any;
  @HostBinding('class') nomClass: string;
  constructor() {

  }

  ngOnChanges() {
    console.log(this.appState);
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: string): string {
    return `state-${state.replace(/\s/g, '').toLowerCase()}`;
  }

}

// appState vaut CANCEL => state-cancel
// appState vaut OPTION => state-option
// appState vaut CONFIRMED => state-confirmed
// binder l'attribut class du host element td avec state-cancel, state-option ou state-confirmed
