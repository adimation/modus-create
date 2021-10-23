import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpinnerComponent } from "./spinner/spinner.component";
import { BaseComponent } from "./abstraction/base-component";
import { ApplicationService } from "./services/application.service";
import { AppSettings, APP_SETTINGS } from "./app-settings";
import { throwIfAlreadyLoaded } from "./module-import-guard";
import { LoggerService } from "./services/logger-service";
import { SpinnerService } from "./spinner/spinner.service";
import { BaseService } from "./abstraction/base-service";
import { NzSpinModule } from "ng-zorro-antd/spin";

@NgModule({
  declarations: [SpinnerComponent, BaseComponent],
  imports: [CommonModule, NzSpinModule],
  exports: [SpinnerComponent, BaseComponent],
  providers: [
    BaseService,
    LoggerService,
    SpinnerService,
    ApplicationService,
    { provide: APP_SETTINGS, useValue: AppSettings }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}
