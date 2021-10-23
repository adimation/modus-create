import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./container/product-list/product-list.component";
import { ProductRoutesModule } from "./product-routes.module";
import { ProductDisplayComponent } from "./components/product-display/product-display.component";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzCardModule } from "ng-zorro-antd/card";

@NgModule({
  imports: [
    CommonModule,
    ProductRoutesModule,
    NzGridModule,
    NzLayoutModule,
    NzCardModule
  ],
  declarations: [ProductListComponent, ProductDisplayComponent],
  providers: [],
  entryComponents: []
})
export class ProductModule {}
