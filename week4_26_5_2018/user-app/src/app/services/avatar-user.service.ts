import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IAvatarUser } from '../models/AvatarUser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AvatarUserService {

  constructor(private _http: Http) { }
  getAvatarUser():Observable<IAvatarUser>{
    return this._http.get('https://reqres.in/api/users?page=1')
    .pipe(map(response => response.json().data));
  }
}
