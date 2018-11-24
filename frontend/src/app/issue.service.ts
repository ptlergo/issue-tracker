/**
 * @description this service connects to the backend nodejs server that uses the
 * endpoints setup to the mongodb 'issues' collection
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  uri = 'http://localhost/api/v1';

  // test config as to pass an obj instead of multiple items as a param
  defaultIssue = {
    id: String,
    title: String,
    responsible: String,
    description: String,
    severity: String,
    status: String,
  };

  // instance of HttpClient
  constructor(private http: HttpClient) { }

  getIssues() {
    console.log('getIssues route hit!');
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  addIssue(title: string, responsible: string, description: string, severity: string) {
    // object with values of issue
    const issue = {
      title,
      responsible,
      description,
      severity,
    };
    // post object when hitting the backend route
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  updateIssue(id, title: string, responsible: string, description: string, severity: string, status: string) {
    // object with values of issue
    const issue = {
      title,
      responsible,
      description,
      severity,
      status,
    };
    // post object when hitting the backend route
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  testIssue(issue: object) {
    // object with values of issue
    const defaultIssue = this.defaultIssue;
    const issueObj = {...defaultIssue, ...issue};
    // post object when hitting the backend route
    return issueObj;
  }

  deleteIssue(id: string) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
