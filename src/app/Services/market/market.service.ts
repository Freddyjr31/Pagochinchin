import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  public DataResponse:any;

    private apiUrl = 'http://api.coinlayer.com/live?access_key=49edc4cdbe0bdc2b8bd3af653a7c5c4d&symbols=BTC,BNB,USDT,ETH';

    constructor(private http: HttpClient) { }
  
    getCoinData(): Observable<any> {
      return this.http.get<any>(this.apiUrl);
    }
  
}
