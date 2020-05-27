import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableLightComponent implements OnInit {
  @Input() headers: string[];
  constructor() {
  }

  ngOnInit(): void {
  }

}
