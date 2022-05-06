import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cypto-precios',
  templateUrl: './cypto-precios.page.html',
  styleUrls: ['./cypto-precios.page.scss'],
})
export class CyptoPreciosPage implements OnInit {
  BTC_ARS: any= {}
  ETH_ARS: any= {}
  constructor(
    private http: HttpClient 
  ) { }

  ngOnInit() {
    this.http.get<any>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=ARS&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .subscribe(
        (res:any[])=>{console.log(res[0])
          this.BTC_ARS =res[0]
          console.log (this.BTC_ARS.id)
        },
        (err)=> console.log(err)
      );
      this.http.get<any>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=ARS&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .subscribe(
        (res:any[])=>{console.log(res[0])
          this.ETH_ARS =res[0]
          console.log (this.ETH_ARS.id)
        },
        (err)=> console.log(err)
      );

  }

}
