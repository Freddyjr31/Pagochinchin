import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MarketService } from 'src/app/Services/market/market.service';

@Component({
  standalone:true,
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports:[NgIf, NgFor]
})
export class CarouselComponent{
  
  constructor(private market:MarketService) { }
  public coins:any = [];
  public data:any = [];
  public currency:any = []
  public list:any = []
  ngOnInit(){

    this.data = {
      Bs:100.000,
      Euro:35.00,
      PTR:60.00,
    };

    this.market.getCoinData().subscribe((data:any) => {

        this.currency = data.rates;
        this.list = Object.assign({}, this.data, this.currency);

        this.coins = Object.keys(this.list).map(key => ({
          name: key,
          price: this.list[key].toFixed(2)
        }));

    });
  }

}
