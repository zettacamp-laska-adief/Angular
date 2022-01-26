import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { User } from 'src/app/shared/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit {
  form!: FormGroup;
  id: number;
  edit!: boolean;
  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserInputComponent>,
    @Inject(MAT_DIALOG_DATA)
    { id, civility, first_name, last_name, birth, gender, edit }: User | any
  ) {
    this.id = id;
    console.log(id);

    this.edit = edit;
    if (edit) {
      this.form = fb.group({
        civility: [civility, Validators.required],
        first_name: [first_name, Validators.required],
        last_name: [last_name, Validators.required],
        birth: [birth, Validators.required],
        gender: [gender, Validators.required],
      });
    } else {
      this.form = fb.group({
        civility: ['mr', Validators.required],
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        gender: ['male', Validators.required],
        birth: [moment(), Validators.required],
      });
    }
  }
  ngOnInit(): void {}

  save() {
    let id;
    if (this.edit) {
      id = this.id;
    } else {
      id = Math.random();
    }
    const civility = this.form.value.civility;
    const first_name = this.form.value.first_name;
    const last_name = this.form.value.last_name;
    const gender = this.form.value.gender;
    const birth = this.form.value.birth;

    const user: User = {
      id: id,
      civility: civility,
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      birth: birth,
    };

    if (this.edit) {
      this.userService.editUser(user);
      // json server
      // this.userService.editUser(user).subscribe((response) => {
      //   console.log(response);
      // });
    } else {
      this.userService.addUser(user);
      // json server
      // this.userService.addUser(user).subscribe((response) => {
      //   console.log(response);
      // });
    }

    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
