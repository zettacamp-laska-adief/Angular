import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { User } from 'src/app/shared/user';
import { UserService } from 'src/app/shared/user.service';
import { UserInputComponent } from '../user-input/user-input.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users!: User[] | any;
  constructor(private dialog: MatDialog, private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((resp) => {
      this.users = resp;
    });

    // json server
    // this.userService.getUsers().subscribe((response) => {
    //   this.users = response;
    // });
  }

  addUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      id: '',
      civility: '',
      first_name: '',
      last_name: '',
      birth: '',
      gender: '',
      edit: '',
    };
    this.dialog.open(UserInputComponent, dialogConfig);
  }

  editUser(user: User) {
    const dialogConfig = new MatDialogConfig();
    const id = user.id;
    const civility = user.civility;
    const first_name = user.first_name;
    const last_name = user.last_name;
    const birth = user.birth;
    const gender = user.gender;
    let edit = true;

    dialogConfig.data = {
      id,
      civility,
      first_name,
      last_name,
      birth,
      gender,
      edit,
    };
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    this.dialog.open(UserInputComponent, dialogConfig);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
  }
}
