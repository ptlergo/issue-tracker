import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Issue } from '../../issue.model';
import { IssueService } from '../../issue.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: Issue[];
  displayedColumns = ['title', 'response', 'severity', 'status', 'actions'];

  // inject the service to use it
  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
    this.testIssue();
  }

  fetchIssues(): void {
    this.issueService.getIssues().subscribe((data: Issue[]) => {
      this.issues = data;
      console.log('Data requested...');
      console.log(this.issues);
    });
  }

  editIssue(id: string): void {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id: string): void {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }

  testIssue(): void {
    const obj = {
      id: 21, title: 'string', responsible: 'string', description: 'string', severity: 'string', status: 'string'
    };
   const val = this.issueService.testIssue(obj);
    console.log(val);
  }
}

