import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MentorService } from '../shared/mentor.service';
import * as _ from 'lodash';
import { RemoveAccentsPipe } from '../shared/remove-accents.pipe';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css'],
  providers: [RemoveAccentsPipe],
})
export class MentorComponent implements OnInit {
  dataSource: any = new MatTableDataSource([]);
  displayedColumns = ['name', 'user_type', 'email', 'user_status'];
  dataResponse: any = [];

  constructor(
    private mentorService: MentorService,
    private removeAccent: RemoveAccentsPipe
  ) {}

  ngOnInit(): void {
    this.getMentors();
  }

  getMentors(): void {
    this.mentorService.getMentors().subscribe((response) => {
      this.dataSource.data = response;
      this.dataResponse = response;
      // console.log(this.dataResponse);
    });
  }

  searchMentor(event: Event) {
    const filterValue = this.removeAccent.transform(
      (event.target as HTMLInputElement).value
    );
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  nameFilter(event: Event) {
    const filterValue = this.removeAccent.transform(
      (event.target as HTMLInputElement).value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '')
    );
    let filteredName = this.dataResponse.filter((item: any) => {
      const civility = this.removeAccent.transform(
        item.civility.trim().toLowerCase()
      );
      const firstName = this.removeAccent.transform(
        item.first_name.trim().toLowerCase()
      );
      const lastName = this.removeAccent.transform(
        item.last_name.trim().toLowerCase()
      );
      return (
        civility.includes(filterValue) |
        firstName.includes(filterValue) |
        lastName.includes(filterValue)
      );
    });
    this.dataSource.data = filteredName;
  }

  userTypeFilter(event: Event) {
    const filterValue = this.removeAccent.transform(
      (event.target as HTMLInputElement).value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '')
    );
    // let filteredUserType = _.filter(this.dataResponse, (item: any) => {
    //   const userType = item.company.user_type.trim().toLowerCase();
    //   return userType.includes(filterValue);
    // });
    let filteredUserType = this.dataResponse.filter((item: any) => {
      const userType = item.company.user_type.trim().toLowerCase();
      return userType.includes(filterValue);
    });
    this.dataSource.data = filteredUserType;
  }

  emailFilter(event: Event) {
    const filterValue = this.removeAccent.transform(
      (event.target as HTMLInputElement).value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '')
    );
    // let filteredEmail = _.filter(this.dataResponse, (item: any) => {
    //   const email = item.email.trim().toLowerCase();
    //   return email.includes(filterValue);
    // });
    let filteredEmail = this.dataResponse.filter((item: any) => {
      const email = item.email.trim().toLowerCase();
      return email.includes(filterValue);
    });
    this.dataSource.data = filteredEmail;
  }

  statusFilter(event: any) {
    if (event.value !== undefined) {
      let filteredStatus = this.dataResponse.filter((item: any) => {
        return item.user_status.toLowerCase() == event.value.toLowerCase();
      });

      this.dataSource = new MatTableDataSource(filteredStatus);
    } else {
      this.getMentors();
    }
  }
}
