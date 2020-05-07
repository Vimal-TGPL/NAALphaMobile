import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Observable, observable, merge } from 'rxjs';
import { mapTo, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private online: Observable<boolean> = undefined;

  constructor(private network: Network) {
    this.online = Observable.create(observer =>{
      observer.next(true);
    }).pipe(mapTo(true));

    this.online = merge(
                this.network.onConnect().pipe(mapTo(true)),
                this.network.onDisconnect().pipe(mapTo(false))
              );
   }

   getNetworkType():string{
     console.log(this.network.type);
     return this.network.type;
   }

   getNetworkStatus():Observable<boolean>{
     this.online.pipe(debounceTime(300)).subscribe((con)=>{
       console.log(con);
     })
     return this.online;
   }
}
