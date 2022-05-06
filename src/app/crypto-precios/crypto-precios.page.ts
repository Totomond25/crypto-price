import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";




@Component({
  selector: 'app-crypto-precios',
  templateUrl: './crypto-precios.page.html',
  styleUrls: ['./crypto-precios.page.scss'],
})
export class CryptoPreciosPage implements OnInit {

  BTC_USD: any= {}
  ETH_USD: any= {}
  
  constructor(
    
   private http: HttpClient 
  ) { }

  ngOnInit() {

    
    this.http.get<any>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .subscribe(
        (res:any[])=>{console.log(res[0])
          this.BTC_USD =res[0]
          console.log (this.BTC_USD.id)
        },
        (err)=> console.log(err)
      );
      this.http.get<any>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .subscribe(
        (res:any[])=>{console.log(res[0])
          this.ETH_USD =res[0]
          console.log (this.ETH_USD.id)
        },
        (err)=> console.log(err)
      );


    
  }
}