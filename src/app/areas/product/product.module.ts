import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./container/product-list/product-list.component";
import { ProductRoutesModule } from "./product-routes.module";
import { ProductDisplayComponent } from "./components/product-display/product-display.component";

@NgModule({
  imports: [CommonModule, ProductRoutesModule],
  declarations: [ProductListComponent, ProductDisplayComponent],
  providers: [],
  entryComponents: []
})
export class ProductModule {}
