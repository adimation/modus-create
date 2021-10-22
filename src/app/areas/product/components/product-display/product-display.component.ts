import { Component, Input } from "@angular/core";
import { ApplicationService } from "../../../../core/services/application.service";
import { LoggerService } from "../../../../core/services/logger-service";
import { BaseComponent } from "../../../../core/abstraction/base-component";
import { ProductDTO } from "src/app/models/product/product-dto";

@Component({
  selector: "app-product-display",
  templateUrl: "./product-display.component.html",
  styleUrls: ["./product-display.component.css"]
})
export class ProductDisplayComponent extends BaseComponent {
  @Input() product: ProductDTO;

  constructor(
    protected applicationService: ApplicationService,
    protected loggerService: LoggerService
  ) {
    super(applicationService, loggerService);
    this.loggerService.debug("ProductList");
  }
}
