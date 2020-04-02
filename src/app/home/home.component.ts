import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Employee, Query } from '../types';
import gql from 'graphql-tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  emp: Employee[]

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.watchQuery<Query>({
      query: gql`
        query allEmployees {
          allEmployees {
            employee_id
            firstname
            lastname
            
          }
        }
      `
    }).valueChanges.subscribe(val => {
      this.emp = val.data.allEmployees;
    })
  }

}
