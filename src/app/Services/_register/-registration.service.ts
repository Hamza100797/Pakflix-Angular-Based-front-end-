import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ToastrService } from 'ngx-toastr';
import {map} from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  private _registerUrl="http://localhost:3000/users/register"


  constructor(private http:HttpClient) { }


  RegisterUser(UserData:any){
    return this.http.post <any>(this._registerUrl,UserData).pipe(map((res:any)=>{
      return res
    }),retry(1),
    catchError(this.handleError))

  }


  // Error Handling Funcation
  handleError(err:any) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = ` Client Error: ${err.error.message}`;
    } else {
        // server-side error
        errorMessage = `${err.error.message} `;
    }
    console.log(` Error From Handeler: ${errorMessage}`);

    return throwError(errorMessage);
}
}
