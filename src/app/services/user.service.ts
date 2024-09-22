import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private httpClient: HttpClient) { }

  // addUser(user: User): Observable<User> {  //maybe needed array Observable<User[]>
  //   return this.httpClient.post<User>(this.apiUrl, user);
  // }
  // getUsers(): Observable<User[]> {
  //   return this.httpClient.get<User[]>(this.apiUrl);
  // }

  public addUser(user: User) {  //maybe needed array Observable<User[]>
    return this.httpClient.post(this.apiUrl+ '/register-user', user);
  }

  public getUsers() {
    return this.httpClient.get(this.apiUrl + '/getUsers');
  }

  getUserById(id: any): Observable<User> {  // TODO
    return this.httpClient.get<User>(`${this.apiUrl}/${id}`);
  }

  public deleteUser(id: any) { // TODO
    return this.httpClient.delete(this.apiUrl + '/deleteUser?id=' + id);
  }

  public updateStudents(student: any) {  // TODO
    return this.httpClient.put(this.apiUrl + '/updateUser', student);
  }

  
}
