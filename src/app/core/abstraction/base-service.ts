import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { map, catchError, finalize, timeout } from "rxjs/operators";
import { Observable, ObservableInput } from "rxjs";
import { APP_SETTINGS, IAppSettings } from "../app-settings";
import { ApplicationService } from "../services/application.service";
import { AppInjector } from "../../app.injector";
import { ServerException } from "../../models/exceptions/server-exception";

@Injectable()
export class BaseService {
  public static spinnerCounter = 0;
  protected http: HttpClient;
  private self: BaseService;
  private timeoutValue: number = 60000; //will be overridden by config.requestTimeoutValue

  constructor(
    @Inject(APP_SETTINGS) protected config: IAppSettings,
    protected applicationService: ApplicationService
  ) {
    const injector = AppInjector.getInjector();
    this.http = injector.get(HttpClient);
    this.self = this;
    this.timeoutValue = config.requestTimeoutValue;
  }

  protected get<T>(url: string, showSpinner: boolean = true): Observable<T> {
    if (showSpinner) {
      this.addSpinner();
    }
    let options: any = {};
    return this.http.get<Observable<T>>(encodeURI(url), options).pipe(
      timeout(this.timeoutValue),
      map(this.handleResponse),
      catchError((error) => this.handleError(error, this)),
      finalize(() => {
        if (showSpinner) {
          this.removeSpinner();
        }
      })
    );
  }

  private handleError(
    error: HttpErrorResponse,
    that: BaseService
  ): ObservableInput<any> {
    let serverException: ServerException = error.error;
    serverException.HttpCode = error.status;
    if (!serverException.Message) {
      serverException.Message = "Something went wrong. Please try again.";
    }
    throw serverException;
  }

  private handleResponse(value: any): any {
    return value;
  }

  private addSpinner = () => {
    BaseService.spinnerCounter++;
    setTimeout(() => this.applicationService.showLoaderOverlay());
  };

  private removeSpinner = () => {
    BaseService.spinnerCounter--;
    if (BaseService.spinnerCounter <= 0) {
      setTimeout(() => this.applicationService.hideLoaderOverlay());
      BaseService.spinnerCounter = 0;
    }
  };
}
