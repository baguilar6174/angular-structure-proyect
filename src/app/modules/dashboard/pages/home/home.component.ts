import { Component, OnInit } from '@angular/core';
import { CLIENTS_DATA_ITEMS } from '@data/constants/clients.conts';
import { IClient } from '@data/interfaces/iblog-item.metadata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public clients: IClient [] = CLIENTS_DATA_ITEMS;

  ngOnInit(): void {
  }

}
