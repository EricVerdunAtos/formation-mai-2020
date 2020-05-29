import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Btn } from 'src/app/shared/interfaces/btn';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';
@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public collection$: Subject<Order[]> = new Subject();
  public headers: string[];
  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;
  public title: string;
  public subtitle: string;
  public states = Object.values(StateOrder);
  constructor(
    private os: OrdersService,
    public route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.btnRoute = {
      label: 'Add an order',
      route: 'add'
    };
    this.btnHref = {
      label: 'Go to Google',
      href: 'http://www.google.fr'
    };
    this.btnAction = {
      label: 'Open dialogue',
      action: true
    };
    this.os.collection.subscribe((col) => {
      this.collection$.next(col);
    });
    this.headers = [
      'Type',
      'Client',
      'Nb. Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
      'Action'
    ];
  }
  public changeState(item: Order, event) {
    this.os.changeState(item, event.target.value).subscribe((res) => {
      // traiter la res de l'api, codes erreur etc...
      item.state = res.state;
    });
  }
  public openPopUp() {
    console.log('open popup');
  }
  public delete(item: Order) {
    this.os.delete(item).subscribe((res) => {
      // traiter res api
      this.os.collection.subscribe((col) => {
        console.log(col);
        this.collection$.next(col);
      });
    });
  }
  public edit(item: Order) {
    this.router.navigate(['orders', 'edit', item.id]);
  }
}
