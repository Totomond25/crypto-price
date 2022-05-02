import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-crypto-precios',
  templateUrl: './crypto-precios.page.html',
  styleUrls: ['./crypto-precios.page.scss'],
})
export class CryptoPreciosPage implements OnInit {

  BTC: [] = []

  constructor(
   private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .subscribe(
        (res)=>{console.log(res)
          this.BTC =res
        },
        (err)=> console.log(err)
      );
      
  }
}