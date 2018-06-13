import { Component, OnInit } from '@angular/core';
import { Order } from "./order.model";
import {OrderService} from '../order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  orders:Order[];

  num_brush: number;
  brush_size: string;
  brush_type1: string;
  brush_type2: string;
  brush_type: string[];
  news_letter: boolean;


  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.getOrder();
  }

  getOrder(){
    this.orderService
    .getOrders()
    .subscribe(data => this.orders = data);
  }

 onSubmit(){

  let wood = this.brush_type1?"wood":"";
  let plastic = this.brush_type2?"plastic":"";

   this.brush_type = [wood, plastic];
   const o = new Order (this.brush_size, this.num_brush, this.brush_type, this.news_letter);
   console.log (o);
   this.orderService.addOrder(o);
 }



}

//
// public sizeBrush: string;
// public numBrush: number;
// public typeBrush: string[];
// public subNews: boolean;
