import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError, timer } from 'rxjs';
import { map, catchError, retry, retryWhen, delayWhen, scan } from 'rxjs/operators';
import { count } from 'console';


@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  api_url = environment.api_url;

  constructor( private httpclient: HttpClient) { }

  getIndustry():Observable<Object>{
   return  this.httpclient.get(this.api_url + "/Industry/GetIndustry").pipe(retryWhen(err=> err.pipe(
    scan(count=>{
       if(count > 5) throw err;
       else{
         count++;
         return count;
       }
    },0),
    delayWhen(()=> timer(1000))
  ))).pipe(map(res => {return res}));
  }
  getGlobalData():Observable<Object>{
    return this.httpclient.get(this.api_url + "/Scores/GetNAAIndexScoresCurrent/GLOBAL").pipe(retryWhen(err=> err.pipe(
      scan(count=>{
         if(count > 5) throw err;
         else{
           count++;
           return count;
         }
      },0),
      delayWhen(()=> timer(1000))
    ))).pipe(map(res => {return res}));
  }

  getFICatData(cat:any):Observable<Object>{
    return this.httpclient.get(this.api_url + '/Scores/GetBondMappingStocks/' + cat).pipe(retryWhen(err=> err.pipe(
      scan(count=>{
         if(count > 5) throw err;
         else{
           count++;
           return count;
         }
      },0),
      delayWhen(()=> timer(1000))
    ))).pipe(map(res => {return res}));
  }

  getFIData():Observable<Object>{
    return this.httpclient.get(this.api_url + '/Scores/GetFixedDataMaster').pipe(retryWhen(err=> err.pipe(
      scan(count=>{
         if(count > 5) throw err;
         else{
           count++;
           return count;
         }
      },0),
      delayWhen(()=> timer(1000))
    ))).pipe(map(res => {return res}));
  }

  getETFData():Observable<Object>{
    return this.httpclient.get(this.api_url + "/Scores/GetETFMaster").pipe(retryWhen(err=> err.pipe(
      scan(count=>{
         if(count > 5) throw err;
         else{
           count++;
           return count;
         }
      },0),
      delayWhen(()=> timer(1000))
    ))).pipe(map(res => {return res}));
  }

  getETFCatData(CatID:any):Observable<Object>{
    return this.httpclient.get(this.api_url + "/Scores/GetETFCurrent/" + CatID).pipe(retryWhen(err=> err.pipe(
      scan(count=>{
         if(count > 5) throw err;
         else{
           count++;
           return count;
         }
      },0),
      delayWhen(()=> timer(1000))
    ))).pipe(map(res => {return res}));
  }

  filterGlobalIndexData(arr,i){
    var temp = arr;
    return temp.filter(item => item.indexName == i);
  }

  getEsgPerfData(){
    return this.httpclient.get(this.api_url+"/Indexes/GetESGDetails").pipe(retryWhen(err=> err.pipe(
      scan(count =>{
        if(count > 5) throw err;
        else{
          count++;
          return count;
        }
      },0),
      delayWhen(()=> timer(1000))
    ))).pipe(map(res => {return res}));
  }

  getFIPerfData(){
    return this.httpclient.get(this.api_url+'/Indexes/GetFIDetails').pipe(retryWhen(err=> err.pipe(
      scan(count =>{
        if(count > 5) throw err;
        else{
          count++;
          return count;
        }
      },0),
      delayWhen(()=> timer(1000))
    ))).pipe(map(res=> {return res}));
  }

  getPerfData(){
    return this.httpclient.get(this.api_url+'/Indexes/GetIndexPerformance').pipe(retryWhen(err=> err.pipe(
      scan(count =>{
        if(count > 5) throw err;
        else{
          count++;
          return count;
        }
      },0),
      delayWhen(()=> timer(1000))
    ))).pipe(map(res=> {return res}));
  }

  getEquityPerfIndData(){
    return this.httpclient.get(this.api_url+'/Indexes/GetIndexDetails').pipe(retryWhen(err=> err.pipe(
      scan(count =>{
        if(count > 5) throw err;
        else{
          count++;
          return count;
        }
      },0),
      delayWhen(()=> timer(1000))
    ))).pipe(map(res=> {return res}));
  }
}
