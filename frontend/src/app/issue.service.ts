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
  uri = 'http://localhost:4000';

  // instance of HttpClient
  constructor(private http: HttpClient) { }

  getIssues() {
    console.log('getIssues route hit!');
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  addIssue(title, responsible, description, severity,) {
    // object with values of issue
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
    };
    // post object when hitting the backend route
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  updateIssue(id, title, responsible, description, severity, status) {
    // object with values of issue
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status,
    };
    // post object when hitting the backend route
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  deletIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
