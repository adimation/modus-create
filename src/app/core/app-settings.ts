import { InjectionToken } from "@angular/core";
import { environment } from "../../environments/environment";

export let APP_SETTINGS = new InjectionToken<IAppSettings>("app.settings");

export interface IAppSettings {
  productApiEndpoint: string;
  requestTimeoutValue: number;
  loggerEnabled: boolean;
}

export const AppSettings: IAppSettings = {
  productApiEndpoint: environment.apiURL,
  requestTimeoutValue: 2 * 60 * 1000,
  loggerEnabled: environment.loggerEnabled
};
