import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";



import {User} from "../entities/user";
import {environment} from "../../environments/environment";

type EntityResponseType = HttpResponse<User>;
type EntityArrayResponseType = HttpResponse<User[]>;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly USER_URL = environment.apiUrl + 'users';
  password: any;
  constructor(private http: HttpClient) {
  }

  public addUser(user: User): Observable<EntityResponseType> {
    console.log(user)
    return this.http.post<User>(this.USER_URL, user, {observe: 'response'})
      .pipe(map((res: EntityResponseType) => res));
  }

  public getUsers(): Observable<EntityArrayResponseType> {
    return this.http.get<User[]>(this.USER_URL, {observe: 'response'})
      .pipe(map((res: EntityArrayResponseType) => res));
  }


  public updateUser(user: User | null): Observable<EntityResponseType> {
    return this.http.put<User>(this.USER_URL, user, {observe: 'response'})
      .pipe(map((res: EntityResponseType) => res));
  }


  public deleteUser(user: User): Observable<EntityResponseType> {
    return this.http.delete<User>(this.USER_URL, {body: user, observe: 'response'})
      .pipe(map((res: EntityResponseType) => res));
  }

  public getUsersByEmail(userName: string): Observable<EntityResponseType> {
    console.log(userName)
    const params = new HttpParams().set('email',userName);

    return this.http.get<User>(this.USER_URL + '/findByEmail', {params, observe: 'response'})
      .pipe(map((res: EntityResponseType) => res));
  }

}
