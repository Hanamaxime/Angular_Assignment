import { Injectable } from '@angular/core';
import { Order } from "./order/order.model";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class OrderService {


// will display previous orders
    orders:Order[] = [
      {sizeBrush: "Paint-Brush-Large", numBrush: 5, typeBrush: ["wood", "plastic"], subNews: true },
      {sizeBrush: "Paint-Brush-Extra-Small", numBrush: 2, typeBrush: ["wood", "plastic"], subNews: false },
      ];


  constructor() {}

  getOrders():Observable<Order[]>{
    return of(this.orders);
  }

  addOrder(o:Order){
    this.orders.push(o);
  }


}
