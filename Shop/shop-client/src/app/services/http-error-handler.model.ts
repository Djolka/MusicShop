import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";

export abstract class HttpErrorHandler {
    constructor (private router: Router) { // router omogucava dinamicku redirekciju ka stranicama        
    }

    protected handleError() {
        return (err: HttpErrorResponse): Observable<never> => {
            // U slucaju Angular gresaka -> greska u konzoli
            if (err.error instanceof ErrorEvent) {
                console.log('An error occured: ',  err.error.message)
            } else { // U slucaju gresaka sa servera -> redirekcija na /error
                //http://localhost:4200/error;message=...;statusCode=...
                this.router.navigate(['/error', { message: err.message, statusCode: err.status}])
            }
            return throwError('Something bad happend; please try again later')
        }
    }
}