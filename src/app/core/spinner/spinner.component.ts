import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { LoggerService } from "../services/logger-service";
import { SpinnerState, SpinnerService } from "./spinner.service";

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.css"]
})
export class SpinnerComponent implements OnDestroy, OnInit {
  public visible = false;

  private spinnerStateChanged: Subscription = new Subscription();

  constructor(
    private loggerService: LoggerService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    this.loggerService.debug(`${this.visible}`);
    this.spinnerStateChanged = this.spinnerService.spinnerState.subscribe(
      (state: SpinnerState) => {
        this.visible = state.show;
        this.loggerService.debug(`visible=${this.visible}`);
      }
    );
  }

  ngOnDestroy() {
    this.spinnerStateChanged.unsubscribe();
  }
}
