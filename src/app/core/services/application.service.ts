import { Injectable, Inject } from "@angular/core";
import { APP_SETTINGS, IAppSettings } from "../app-settings";
import { SpinnerService } from "../spinner/spinner.service";

@Injectable()
export class ApplicationService {
  constructor(
    @Inject(APP_SETTINGS) protected config: IAppSettings,
    public spinnerService: SpinnerService
  ) {}

  public showLoaderOverlay(): void {
    this.spinnerService.show();
  }

  public hideLoaderOverlay(): void {
    this.spinnerService.hide();
  }

  public cloneObject<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }
}
