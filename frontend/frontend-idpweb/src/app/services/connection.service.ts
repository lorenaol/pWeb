import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

import {environment} from "../../environments/environment";
import {Connection} from "../entities/connection";
import {Refugee} from "../entities/refugee";

type EntityResponseType = HttpResponse<Connection>;
type EntityArrayResponseType = HttpResponse<Connection[]>;

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private readonly CONNECTION_URL = environment.apiUrl + 'connections';
  password: any;
  constructor(private http: HttpClient) {
  }

  public addConnection(location: Connection): Observable<EntityResponseType> {
    return this.http.post<Connection>(this.CONNECTION_URL, location, {observe: 'response'})
      .pipe(map((res: EntityResponseType) => res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<Connection>(`${this.CONNECTION_URL}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => res));
  }

  public getConnections(): Observable<EntityArrayResponseType> {
    return this.http.get<Connection[]>(this.CONNECTION_URL, {observe: 'response'})
      .pipe(map((res: EntityArrayResponseType) => res));
  }
  public getConnectionRefugee(ref:number): Observable<EntityResponseType> {
    return this.http.get<Connection>(`${this.CONNECTION_URL+'/refugee'}/${ref}`, {observe: 'response'})
      .pipe(map((res: EntityResponseType) => res));
  }


  public updateConnections(user: Connection | null): Observable<EntityResponseType> {
    return this.http.put<Connection>(this.CONNECTION_URL, user, {observe: 'response'})
      .pipe(map((res: EntityResponseType) => res));
  }


  public deleteConnection(user: Connection): Observable<EntityResponseType> {
    return this.http.delete<Connection>(this.CONNECTION_URL, {body: user, observe: 'response'})
      .pipe(map((res: EntityResponseType) => res));
  }


}
