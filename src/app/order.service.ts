import { Injectable } from '@angular/core';
import { Order } from "./order/order.model";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class OrderService {

    order:orders[] = [
      {id: 1, typeBrush1: 'roller', typeBrush2: 'flat'},
      {id: 2, typeBrush1: 'flat', typeBrush2: 'roller'},
      ];


  constructor() {}
}
