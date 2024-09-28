import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/user';

  private userId: any;

  constructor(private httpClient: HttpClient) { }

  addUser(user: User): Observable<User> {  
    return this.httpClient.post<User>(`${this.apiUrl}/registerUser`, user);
  }

  
getUsers(): Observable<{ users: User[] }> { // Ενημερώστε την επιστροφή ώστε να περιλαμβάνει το users
  return this.httpClient.get<{ users: User[] }>(`${this.apiUrl}/getUsers`);
}

  getUserById(userId: number): Observable<User> { 
    return this.httpClient.get<User>(`${this.apiUrl}/${userId}`).pipe( 
    catchError(error => {
      console.error('Error fetching user by ID:', error);
      // Μπορείς να επιστρέψεις ένα σφάλμα ή να κάνεις άλλη επεξεργασία
      return throwError(() => new Error('Error fetching user'));
    })
  );
}

  public deleteUser(userId: any) { 
    return this.httpClient.delete(`${this.apiUrl}/deleteUser/${userId}`);
  }

  public updateUser(user: any) {  
    return this.httpClient.put(this.apiUrl + '/updateUser', user);
  }

  setUserId(userId: number) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }

  
}
