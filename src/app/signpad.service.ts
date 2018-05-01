import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SignpadService {

  constructor(private http: HttpClient) { }

  //saveSignImage(): Observable<String> {
  //  return of(HEROES);
  //}

  /** PUT: update the hero on the server */
  //updateHero (hero: String): Observable<any> {
    // return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
    //   tap(_ => this.log(`updated hero id=${hero.id}`)),
    //   catchError(this.handleError<any>('updateHero'))
    // );
  //}

}
