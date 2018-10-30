import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // inject the service to use it
  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.issueService.getIssues().subscribe((issues) => {
      console.log('ssd');
      console.log(issues);
    });
  }

}
