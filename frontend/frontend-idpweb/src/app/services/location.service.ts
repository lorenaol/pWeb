import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";



import {Location} from "../entities/location";
import {environment} from "../../environments/environment";
import {User} from "../entities/user";

type EntityResponseType = HttpResponse<Location>;
type EntityArrayResponseType = HttpResponse<Location[]>;

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private readonly LOCATION_URL = environment.apiUrl + 'locations';
  password: any;
  constructor(private http: HttpClient) {
  }

  public addLocation(location: Location): Observable<EntityResponseType> {
    return this.http.post<Location>(this.LOCATION_URL, location, {observe: 'response'})
      .pipe(map((res: EntityResponseType) => res));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<Location>(`${this.LOCATION_URL}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => res));
  }

  public getLocations(): Observable<EntityArrayResponseType> {
    return this.http.get<Location[]>(this.LOCATION_URL, {observe: 'response'})
      .pipe(map((res: EntityArrayResponseType) => res));
  }


  public updateLocation(user: Location | null): Observable<EntityResponseType> {
    return this.http.put<Location>(this.LOCATION_URL, user, {observe: 'response'})
      .pipe(map((res: EntityResponseType) => res));
  }


  public deleteLocation(user: Location): Observable<EntityResponseType> {
    return this.http.delete<Location>(this.LOCATION_URL, {body: user, observe: 'response'})
      .pipe(map((res: EntityResponseType) => res));
  }
  public getLocationsByUser(user: any): Observable<EntityResponseType> {
    // console.log(userName)
    const params = new HttpParams().set('user',user);

    return this.http.get<Location>(this.LOCATION_URL + '/findByUser', {params, observe: 'response'})
      .pipe(map((res: EntityResponseType) => res));
  }


}
