import { Component, OnInit } from "@angular/core";
import { ApplicationService } from "../../../../core/services/application.service";
import { LoggerService } from "../../../../core/services/logger-service";
import { BaseComponent } from "../../../../core/abstraction/base-component";
import { ProductService } from "../../../../services/product.service";
import { ProductDTO } from "src/app/models/product/product-dto";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent extends BaseComponent implements OnInit {
  public productListFiltered: ProductDTO[] = [];
  public displayProductsCount: number = 5;

  constructor(
    protected applicationService: ApplicationService,
    protected loggerService: LoggerService,
    private productService: ProductService
  ) {
    super(applicationService, loggerService);
    this.loggerService.debug("ProductList");
  }

  public ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts(): void {
    this.productService.getAllProducts().subscribe((resp: ProductDTO[]) => {
      this.loggerService.info(resp);
      if (resp.length > this.displayProductsCount) {
        this.productListFiltered = resp.slice(0, this.displayProductsCount);
      } else {
        this.productListFiltered = resp;
      }
    });
  }
}
