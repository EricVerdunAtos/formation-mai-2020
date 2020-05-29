import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Btn } from 'src/app/shared/interfaces/btn';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  // public collection: Order[];
  // public collection$: Observable<Order[]>;
  public collection$: Subject<Order[]> = new Subject();
  public headers: string[];
  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;
  public states = Object.values(StateOrder);

  public title: string;
  public subtitle: string;

  public datas: Observable<Data>;

  // sub: Subscription;
  constructor(
    private os: OrdersService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.title = "Orders";
    // this.subtitle = "All orders";
    this.btnRoute = {
      label: "Add an order",
      route: "add"
    };
    this.btnHref = {
      label: "Go to Google",
      href: "http://www.google.fr"
    };
    this.btnAction = {
      label: 'Open dialogue',
      action: true
    };
    this.os.collection.subscribe(col => {
      this.collection$.next(col);
    });
    // this.sub = this.os.collection.subscribe((datas) => {
    //   this.collection = datas;
    // });
    this.headers = [
      'Type',
      'Client',
      'Nb jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }

  public changeState(item: Order, event) {
    this.os.changeState(item, event.target.value).subscribe((res) => {
      console.log(res);

      // traiter la res de l'api, codes erreur etc...
      item.state = res.state;

    });

  }

  public openPopUp() {
    console.log("Open popup");
  }

  public delete(item: Order) {

    this.os.delete(item).subscribe(res => {

      this.os.collection.subscribe(col => {
        this.collection$.next(col);
      })

    })
  }

  ngOnDestroy() {
        // this.sub.unsubscribe();
  }

}
