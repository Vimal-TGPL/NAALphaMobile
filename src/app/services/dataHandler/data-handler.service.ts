import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError, timer } from 'rxjs';
import { map, catchError, retry, retryWhen, delayWhen, scan } from 'rxjs/operators';
import * as d3 from 'd3';


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

  getRebalanceDates(id){
    if(id != 59 && id != 60 && id != 54){
      return d3.json(this.api_url+'/Indexes/GetRebalanceDates/'+id).then(data=>{
      //  console.log(data);
        return data;
      })
    }else{
      return d3.json(this.api_url+'/Indexes/GetGlobalRebalances/'+id).then(data=>{
      //  console.log(data);
        return data;
      })
    }
  }

  getSignalsByDate(id,tradedate){
    var temp = tradedate.slice(0,4)+'-'+tradedate.slice(4,6)+'-'+tradedate.slice(6,8);
    if(id != 59 && id != 60 && id != 107 && id != 104 && id != 69 && id != 13 && id != 1 && id != 108 && id != 12 && id != 113){
      return d3.json(this.api_url+'/Indexes/GetSignalsByDate/'+temp).then(data=>{
      //  console.log(data);
        return data;
      })
    }else if(id == 107 || id == 104 || id == 69 || id == 13 || id == 1 || id == 108 || id == 12 || id == 113){
      return d3.json(this.api_url+'/Indexes/GetSignalsByDate/'+id+'/'+temp).then(data=>{
      //  console.log(data);
        return data;
      })
    }
    else{
      return d3.json(this.api_url+'/Indexes/GetGlobalSignalsByDate/'+id+'/'+temp).then(data=>{
      //  console.log(data);
        return data;
      })
    }
    
  }

  GetGlobalSignalsByDate(id,tradedate){
    var temp = tradedate.slice(0,4)+'-'+tradedate.slice(4,6)+'-'+tradedate.slice(6,8);
      return d3.json(this.api_url+'/Indexes/GetGlobalSignalsByDate/'+id+'/'+temp).then(data=>{
      //  console.log(data);
        return data;
      })
  }

  getDbGICSData(): Observable<Object> {
    return this.httpclient.get('../../../assets/data/siteGICS.csv', { responseType: 'text' }).pipe(retryWhen(err => err.pipe(
      scan(count => {
        if (count > 5) throw err;
        else {
          count++;
          return count;
        }
      }, 0),
      delayWhen(() => timer(1000))
    ))).pipe(map(res => {
      return res;
    }));
  }

  getIpadGlobalData(): Observable<Object> {
    return this.httpclient.get(this.api_url + "/Scores/GetNAAIndexScoresCurrent/GLOBAL").pipe(retryWhen(err => err.pipe(
      scan(count => {
        if (count > 5) throw err;
        else {
          count++;
          return count;
        }
      }, 0),
      delayWhen(() => timer(1000))
    ))).pipe(map(res => {
      return res;
    }));
  }

  getIpadHistGlobalData(d){
    return this.httpclient.get(this.api_url + "/Scores/GetNAAIndexScoresHist/GLOBAL/" + d).pipe(retryWhen(err => err.pipe(
      scan(count => {
        if (count > 5) throw err;
        else {
          count++;
          return count;
        }
      }, 0),
      delayWhen(() => timer(1000))
    ))).pipe(map(res => {
      return res;
    }));
  }

  getQDateData(selrow, indName, Isin): Observable<Object> {
    var apiUrl
    if (selrow.country == 'USA') {
      apiUrl = this.api_url + "/Scores/GetAnnScoresData/" + indName + "/" + Isin + "/0";
    } else {
      apiUrl = this.api_url + "/Scores/GetQuaterlyScoresData/" + indName + "/" + Isin + "/0";
    }
    return this.httpclient.get(apiUrl).pipe(retryWhen(err => err.pipe(
      scan(count => {
        if (count > 5) throw err;
        else {
          count++;
          return count;
        }
      }, 0),
      delayWhen(() => timer(1000))
    ))).pipe(map(res => {
      return res;
    }));
  }

  getQtrData(trdate, industry, IndId, indName): Observable<Object> {
    return this.httpclient.get(this.api_url + '/Scores/GetNAAIndexScoresHistByIndustryIndex/' + trdate + '/' + industry + '/' + IndId + '/' + indName).pipe(retryWhen(err => err.pipe(
      scan(count => {
        if (count > 5) throw err;
        else {
          count++;
          return count;
        }
      }, 0),
      delayWhen(() => timer(1000))
    ))).pipe(map(res => {
      return res;
    }));
  }

  getIndexRunsData(indexid, GICSid, Ctype): Observable<Object> {
    return this.httpclient.get(this.api_url + "/Indexes/GetIndexRuns/" + "/" + indexid + "/" + GICSid + "/" + Ctype).pipe(retryWhen(err => err.pipe(
      scan(count => {
        if (count > 5) throw err;
        else {
          count++;
          return count;
        }
      }, 0),
      delayWhen(() => timer(1000))
    ))).pipe(map(res => {
      return res;
    }));
  }

  getIndustryList(){
    return this.httpclient.get(this.api_url+"/Industry/GetIndustry").pipe(retryWhen(err => err.pipe(
      scan(count => {
        if (count > 5) throw err;
        else {
          count++;
          return count;
        }
      }, 0),
      delayWhen(() => timer(1000))
    ))).pipe(map(res => {
      return res;
    }));
  }
}
