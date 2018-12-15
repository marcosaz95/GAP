import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { apiUrl } from "src/app/common/constants";

@Injectable()
export class CarService {
    private _apiUrl = apiUrl;

    constructor(private _http: HttpClient) { }

    getCars(): Observable<any> {
        return this._http.get(`${this._apiUrl}`);
    }
}