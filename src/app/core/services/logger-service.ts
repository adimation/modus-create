import { Injectable, Inject } from "@angular/core";
import { APP_SETTINGS, IAppSettings } from "../app-settings";
import { ApplicationService } from "./application.service";

@Injectable()
export class LoggerService {
  public currentMethod: string;

  constructor(
    @Inject(APP_SETTINGS) protected config: IAppSettings,
    protected applicationService: ApplicationService
  ) {
    this.currentMethod = "";
    console.log("Logger Service Created");
  }

  public info(...msg: any[]): void {
    if (this.config.loggerEnabled) {
      console.info(msg);
    }
  }

  public debug(...msg: any[]): void {
    if (this.config.loggerEnabled) {
      console.debug(msg);
    }
  }

  public warn(...msg: any[]): void {
    if (this.config.loggerEnabled) {
      console.error(msg);
    }
  }

  public error(...msg: any[]): void {
    if (this.config.loggerEnabled) {
      console.error(msg);
    }
  }
}
