import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {
  @Input() collection: Order[];
  @Input() headers: string[];
  constructor() {
    console.log(this.collection);
  }

  ngOnChanges(): void {
    console.log(this.collection);

  }

  ngOnInit(): void {
    console.log(this.collection);
    console.log(this.headers);

  }

}
