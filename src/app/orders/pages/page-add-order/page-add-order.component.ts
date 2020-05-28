import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public title: string;
  public subtitle: string;
  constructor(
    private os: OrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.title = "Orders";
    this.subtitle = "Add an order";
  }

  public add(item: Order) {
    this.os.add(item)
      .subscribe(res => {

      // redirection vers la route orders
      // this.router.navigate(['orders']);
      // redirection relative par rapport à la route sur laquelle je suis
      this.router.navigate(['../'], {relativeTo: this.route});
      });

  }

}
