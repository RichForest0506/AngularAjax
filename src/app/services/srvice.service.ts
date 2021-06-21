import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IData } from '../data';

@Injectable({
  providedIn: 'root'
})
export class SrviceService {

  private _url: string = "/assets/input.json"

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<IData[]>{
    return this.http.get<IData[]>(this._url)
  }
}
