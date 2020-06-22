import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  api_url = environment.api_url;

  constructor( private httpclient: HttpClient) { }

  getIndustry():Observable<Object>{
   return  this.httpclient.get(this.api_url + "/Industry/GetIndustry").pipe(map(res => {return res}));
  }
  getGlobalData():Observable<Object>{
    return this.httpclient.get(this.api_url + "/Scores/GetNAAIndexScoresCurrent/GLOBAL").pipe(map(res => {return res}));
  }

  getFICatData(cat:any):Observable<Object>{
    return this.httpclient.get(this.api_url + '/Scores/GetBondMappingStocks/' + cat).pipe(map(res => {return res}));
  }

  getFIData():Observable<Object>{
    return this.httpclient.get(this.api_url + '/Scores/GetFixedDataMaster').pipe(map(res => {return res}));
  }

  getETFData():Observable<Object>{
    return this.httpclient.get(this.api_url + "/Scores/GetETFMaster").pipe(map(res => {return res}));
  }

  getETFCatData(CatID:any):Observable<Object>{
    return this.httpclient.get(this.api_url + "/Scores/GetETFCurrent/" + CatID).pipe(map(res => {return res}));
  }

  // handleError(error: HttpErrorResponse){
  //   console.log("lalalalalalalala");
  //   return throwError(error);
  //   }
}
