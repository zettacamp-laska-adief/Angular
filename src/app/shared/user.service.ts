import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // apiURL = '../../assets/user.json';
  // apiURL = 'http://localhost:3000/users';

  users: User[] = [
    {
      id: 1,
      civility: 'mr',
      first_name: 'laska',
      last_name: 'adief',
      birth: new Date('2000-07-13'),
      gender: 'male',
    },
    {
      id: 2,
      civility: 'mrs',
      first_name: 'michael',
      last_name: 'phelp',
      birth: new Date('1972-06-26'),
      gender: 'male',
    },
  ];

  dataUser = new BehaviorSubject<User[]>(this.users);
  data = this.dataUser.asObservable();

  getUsers() {
    return this.data;
  }

  addUser(user: User) {
    const newUser = this.users;
    newUser.push(user);
    this.dataUser.next(newUser);
  }

  editUser(user: User) {
    const getUser = this.users;
    const updateUser: any = getUser.find((u) => {
      return u.id == user.id;
    });
    updateUser.civility = user.civility;
    updateUser.first_name = user.first_name;
    updateUser.last_name = user.last_name;
    updateUser.birth = user.birth;
    updateUser.gender = user.gender;
  }

  deleteUser(id: number) {
    const user: any = this.users.find((u) => {
      return u.id == id;
    });

    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }

  // json server
  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.apiURL);
  // }
  // addUser(user: User): Observable<User[]> {
  //   return this.http.post<User[]>(this.apiURL, user);
  // }

  // editUser(user: User): Observable<User[]> {
  //   return this.http.patch<User[]>(`${this.apiURL}/${user.id}`, user);
  // }
}
