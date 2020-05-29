import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public item$: Observable<Order>;

  constructor(
    private os: OrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.os.getItemById(params.get('id')))
    );


    this.route.data.subscribe(datas => {
      this.title = datas.title;
      this.subtitle = datas.subtitle;
      console.log(datas);

    })
  }

  public edit(item: Order) {
    this.os.updateItem(item)
      .subscribe(res => {
      this.router.navigate(['../../'], {relativeTo: this.route});
    });

  }

}
