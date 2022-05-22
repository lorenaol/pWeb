import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
// import {Observable} from "rxjs";
import {map} from "rxjs/operators";



import {Refugee} from "../entities/refugee";
import {environment} from "../../environments/environment";
import { Observable } from 'rxjs';
import {Connection} from "../entities/connection";

type EntityResponseType = HttpResponse<Refugee>;
type EntityArrayResponseType = HttpResponse<Refugee[]>;

@Injectable({
  providedIn: 'root'
})
export class RefugeeService {

  private readonly REFUGEE_URL = environment.apiUrl + 'refugees';
  password: any;
  constructor(private http: HttpClient) {
  }

  public addRefugee(refugee: Refugee): Observable<EntityResponseType> {
    console.log(refugee)
    return this.http.post<Refugee>(this.REFUGEE_URL, refugee, {observe: 'response'})
      .pipe(map((res: EntityResponseType) => res));
  }

  public getRefugee(): Observable<EntityArrayResponseType> {
    return this.http.get<Refugee[]>(this.REFUGEE_URL, {observe: 'response'})
      .pipe(map((res: EntityArrayResponseType) => res));
  }
  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<Refugee>(`${this.REFUGEE_URL}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => res));
  }
  public getRefugeeNotAccepted(nr: number): Observable<EntityArrayResponseType> {
    return this.http.get<Refugee[]>(`${this.REFUGEE_URL+'/not_accepted'}/${nr}`, {observe: 'response'})
      .pipe(map((res: EntityArrayResponseType) => res));
  }


  public updateRefugee(refugee: Refugee | null): Observable<EntityResponseType> {
    return this.http.put<Refugee>(this.REFUGEE_URL, refugee, {observe: 'response'})
      .pipe(map((res: EntityResponseType) => res));
  }


  public deleteRefugee(refugee: Refugee): Observable<EntityResponseType> {
    return this.http.delete<Refugee>(this.REFUGEE_URL, {body: refugee, observe: 'response'})
      .pipe(map((res: EntityResponseType) => res));
  }

  // public getUsersByEmail(userName: string): Observable<EntityResponseType> {
  //   const params = new HttpParams().set('email',userName);
  //
  //   return this.http.get<REf>(this.USER_URL + '/findByEmail', {params, observe: 'response'})
  //     .pipe(map((res: EntityResponseType) => res));
  // }

}
