import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  constructor(private http: HttpClient) {}
  gitdataLoad = () => {
    return this.http.get('https://api.github.com/repos/angular/angular/commits');
  }
}
