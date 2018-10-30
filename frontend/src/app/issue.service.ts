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
  uri = 'http://localhost:4000/api/v1';

  // instance of HttpClient
  constructor(private http: HttpClient) { }

  getIssues() {
    console.log('getIssues route hit!');
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id: number) {
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

  updateIssue(id: number, title: string, responsible: string, description: string, severity: string, status: string) {
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

  deleteIssue(id: number) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
