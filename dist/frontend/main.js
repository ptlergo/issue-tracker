(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\n  <mat-toolbar>\n    <h1>Issue Tracker App</h1>\n  </mat-toolbar>\n\n        <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/components/edit/edit.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./issue.service */ "./src/app/issue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// config. routes
var routes = [
    { path: 'create', component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"] },
    { path: 'list', component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"] },
    { path: 'edit/:id', component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"] },
    { path: '', redirectTo: '/list', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"], _components_create_create_component__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"], _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_issue_service__WEBPACK_IMPORTED_MODULE_11__["IssueService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/create/create.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page__create .create__form {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/create/create.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page__create container\">\n  <div class=\"flat-card \">\n    <mat-card-header>\n      <mat-card-title>\n        <h2 class=\"card-title\">create new issue</h2>\n      </mat-card-title>\n        </mat-card-header>\n    <mat-divider></mat-divider>\n    <form [formGroup]=\"createForm\" class=\"create-form create__form\">\n      <mat-form-field class=\"field-full-width\">\n        <input type=\"text\" matInput placeholder=\"Issue Title\" formControlName=\"title\" #title>\n      </mat-form-field>\n      <mat-form-field class=\"field-full-width\">\n        <input type=\"text\" matInput placeholder=\"Responsible\" formControlName=\"responsible\" #responsible>\n      </mat-form-field>\n      <mat-form-field class=\"field-full-width\">\n        <textarea matInput placeholder=\"Description\" formControlName=\"description\" #description></textarea>\n      </mat-form-field>\n      <mat-form-field class=\"field-full-width\">\n        <mat-select placeholder=\"Severity\" formControlName=\"severity\" #severity>\n          <mat-option value=\"low\">Low</mat-option>\n          <mat-option value=\"Medium\">Medium</mat-option>\n          <mat-option value=\"High\">High</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div class=\"actions-box\">\n\n        <button mat-flat-button color=\"accent\" routerLink=\"/list\">Back</button>\n        <button type=\"submit\" (click)=\"addIssue(title.value, responsible.value, description.value, severity.value)\"\n          [disabled]=\"createForm.pristine || createForm.invalid\" mat-flat-button color=\"primary\">Save</button>\n      </div>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateComponent = /** @class */ (function () {
    function CreateComponent(issueService, fb, router) {
        this.issueService = issueService;
        this.fb = fb;
        this.router = router;
        this.createForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            responsible: '',
            description: '',
            severity: ''
        });
    }
    // event handler to add issue
    CreateComponent.prototype.addIssue = function (title, responsible, description, severity) {
        var _this = this;
        this.issueService.addIssue(title, responsible, description, severity)
            .subscribe(function () {
            _this.router.navigate(['/list']);
        });
    };
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/components/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/components/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_1__["IssueService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/edit/edit.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page__create .edit__form {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/edit/edit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page__create container\">\n  <div class=\"flat-card \">\n    <mat-card-header>\n      <mat-card-title>\n        <h2 class=\"card-title\">Update Issue</h2>\n      </mat-card-title>\n        </mat-card-header>\n    <mat-divider></mat-divider>\n    <form [formGroup]=\"updateForm\" class=\"edit-form edit__form\">\n      <mat-form-field class=\"field-full-width\">\n        <input type=\"text\" matInput placeholder=\"Issue Title\" formControlName=\"title\" #title>\n      </mat-form-field>\n      <mat-form-field class=\"field-full-width\">\n        <input type=\"text\" matInput placeholder=\"Responsible\" formControlName=\"responsible\" #responsible>\n      </mat-form-field>\n      <mat-form-field class=\"field-full-width\">\n        <textarea matInput placeholder=\"Description\" formControlName=\"description\" #description></textarea>\n      </mat-form-field>\n      <mat-form-field class=\"field-full-width\">\n        <mat-select placeholder=\"Severity\" formControlName=\"severity\" #severity>\n          <mat-option value=\"low\">Low</mat-option>\n          <mat-option value=\"Medium\">Medium</mat-option>\n          <mat-option value=\"High\">High</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field class=\"field-full-width\">\n        <mat-select placeholder=\"Status\" formControlName=\"status\" #status>\n          <mat-option value=\"Open\">Open</mat-option>\n          <mat-option value=\"In Progress\">In Progress</mat-option>\n          <mat-option value=\"Done\">Done</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div class=\"actions-box\">\n\n        <button mat-flat-button color=\"accent\" routerLink=\"/list\">Back</button>\n        <button type=\"submit\" (click)=\"updateIssue(title.value, responsible.value, description.value, severity.value, status.value)\"\n          [disabled]=\"updateForm.pristine || updateForm.invalid\" mat-flat-button color=\"primary\">Save</button>\n      </div>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/edit/edit.component.ts ***!
  \***************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = /** @class */ (function () {
    function EditComponent(issueService, router, route, snackbar, fb) {
        this.issueService = issueService;
        this.router = router;
        this.route = route;
        this.snackbar = snackbar;
        this.fb = fb;
        this.issue = {};
        this.createForm();
    }
    EditComponent.prototype.createForm = function () {
        this.updateForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            responsible: '',
            description: '',
            severity: '',
            status: ''
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.issueService.getIssueById(_this.id).subscribe(function (res) {
                _this.issue = res;
                _this.updateForm.get('title').setValue(_this.issue.title);
                _this.updateForm.get('responsible').setValue(_this.issue.responsible);
                _this.updateForm.get('description').setValue(_this.issue.description);
                _this.updateForm.get('severity').setValue(_this.issue.severity);
                _this.updateForm.get('status').setValue(_this.issue.status);
            });
        });
    };
    EditComponent.prototype.updateIssue = function (title, responsible, description, severity, status) {
        var _this = this;
        this.issueService.updateIssue(this.id, title, responsible, description, severity, status)
            .subscribe(function () {
            _this.snackbar.open('issue updated successfully', 'OK', {
                duration: 3000,
            });
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/components/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_4__["IssueService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/list/list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n}\r\n\r\n.mat-column-right {\r\n    text-align: center;\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"flat-card\">\r\n    <mat-card-content>\r\n      <table mat-table [dataSource]=\"issues\">\r\n        <ng-container matColumnDef=\"title\">\r\n          <th mat-header-cell *matHeaderCellDef>Title</th>\r\n          <td mat-cell *matCellDef=\"let element\">{{element.title}}</td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"response\">\r\n          <th mat-header-cell *matHeaderCellDef>Response</th>\r\n          <td mat-cell *matCellDef=\"let element\">{{element.response}}</td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"severity\">\r\n          <th mat-header-cell *matHeaderCellDef>Severity</th>\r\n          <td mat-cell *matCellDef=\"let element\">{{element.severity}}</td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"status\">\r\n          <th mat-header-cell *matHeaderCellDef>Status</th>\r\n          <td mat-cell *matCellDef=\"let element\">{{element.status}}</td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"actions\" class=\"\">\r\n          <th mat-header-cell *matHeaderCellDef class=\"mat-column-right\">Actions</th>\r\n          <td mat-cell *matCellDef=\"let element\" class=\"mat-column-right\">\r\n            <button mat-button color=\"primary\" (click)=\"editIssue(element._id)\">Edit</button>\r\n            <button mat-button color=\"warn\" (click)=\"deleteIssue(element._id)\">Delete</button>\r\n          </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n    </mat-card-content>\r\n    <div class=\"actions-box\">\r\n      <button mat-flat-button color=\"primary\" routerLink=\"/create\">Create New Issue</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    // inject the service to use it
    function ListComponent(issueService, router) {
        this.issueService = issueService;
        this.router = router;
        this.displayedColumns = ['title', 'response', 'severity', 'status', 'actions'];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.fetchIssues();
        this.testIssue();
    };
    ListComponent.prototype.fetchIssues = function () {
        var _this = this;
        this.issueService.getIssues().subscribe(function (data) {
            _this.issues = data;
            console.log('Data requested...');
            console.log(_this.issues);
        });
    };
    ListComponent.prototype.editIssue = function (id) {
        this.router.navigate(["/edit/" + id]);
    };
    ListComponent.prototype.deleteIssue = function (id) {
        var _this = this;
        this.issueService.deleteIssue(id).subscribe(function () {
            _this.fetchIssues();
        });
    };
    ListComponent.prototype.testIssue = function () {
        var obj = {
            id: 21, title: 'string', responsible: 'string', description: 'string', severity: 'string', status: 'string'
        };
        var val = this.issueService.testIssue(obj);
        console.log(val);
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/components/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_2__["IssueService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/issue.service.ts":
/*!**********************************!*\
  !*** ./src/app/issue.service.ts ***!
  \**********************************/
/*! exports provided: IssueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueService", function() { return IssueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @description this service connects to the backend nodejs server that uses the
 * endpoints setup to the mongodb 'issues' collection
 */


var IssueService = /** @class */ (function () {
    // instance of HttpClient
    function IssueService(http) {
        this.http = http;
        this.uri = 'https://my-issue-tracker-app.herokuapp.com/api/v1';
        // test config as to pass an obj instead of multiple items as a param
        this.defaultIssue = {
            id: String,
            title: String,
            responsible: String,
            description: String,
            severity: String,
            status: String,
        };
    }
    IssueService.prototype.getIssues = function () {
        console.log('getIssues route hit!');
        return this.http.get(this.uri + "/issues");
    };
    IssueService.prototype.getIssueById = function (id) {
        return this.http.get(this.uri + "/issues/" + id);
    };
    IssueService.prototype.addIssue = function (title, responsible, description, severity) {
        // object with values of issue
        var issue = {
            title: title,
            responsible: responsible,
            description: description,
            severity: severity,
        };
        // post object when hitting the backend route
        return this.http.post(this.uri + "/issues/add", issue);
    };
    IssueService.prototype.updateIssue = function (id, title, responsible, description, severity, status) {
        // object with values of issue
        var issue = {
            title: title,
            responsible: responsible,
            description: description,
            severity: severity,
            status: status,
        };
        // post object when hitting the backend route
        return this.http.post(this.uri + "/issues/update/" + id, issue);
    };
    IssueService.prototype.testIssue = function (issue) {
        // object with values of issue
        var defaultIssue = this.defaultIssue;
        var issueObj = __assign({}, defaultIssue, issue);
        // post object when hitting the backend route
        return issueObj;
    };
    IssueService.prototype.deleteIssue = function (id) {
        return this.http.get(this.uri + "/issues/delete/" + id);
    };
    IssueService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IssueService);
    return IssueService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Patrick Tunga-Lergo\Documents\_projects\issue-tracker\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map