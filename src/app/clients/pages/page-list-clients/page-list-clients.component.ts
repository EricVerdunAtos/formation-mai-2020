import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Btn } from 'src/app/shared/interfaces/btn';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public collection$: Observable<Client[]>;
  public headers: string[];
  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;
  public states = Object.values(StateClient);

  public title: string;
  public subtitle: string;

  // sub: Subscription;
  constructor(private os: ClientsService) { }

  ngOnInit(): void {
    this.title = "Clients";
    this.subtitle = "All clients";
    this.btnRoute = {
      label: "Add a client",
      route: "add"
    };
    this.btnHref = {
      label: "Go to Ecosia",
      href: "https://www.ecosia.org/"
    };
    this.btnAction = {
      label: 'Open dialogue',
      action: true
    };
    this.collection$ = this.os.collection;
    // this.sub = this.os.collection.subscribe((datas) => {
    //   this.collection = datas;
    // });
    this.headers = [
      "name",
      "ca",
      "comment",
      "state"
    ];
  }

  public changeState(item: Client, event) {
    this.os.changeState(item, event.target.value).subscribe((res) => {
      console.log(res);

      // traiter la res de l'api, codes erreur etc...
      item.state = res.state;

    });

  }

  public openPopUp() {
    console.log("Open popup from Clients page");
  }


}
