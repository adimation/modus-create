import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "../core/abstraction/base-service";
import { APP_SETTINGS, IAppSettings } from "../core/app-settings";
import { ApplicationService } from "../core/services/application.service";
import { ProductDTO } from "../models/product/product-dto";

@Injectable()
export class ProductService extends BaseService {
  constructor(
    @Inject(APP_SETTINGS) protected config: IAppSettings,
    protected applicationService: ApplicationService
  ) {
    super(config, applicationService);
  }

  public getAllProducts(): Observable<ProductDTO[]> {
    return this.get<ProductDTO[]>(this.config.productApiEndpoint, false);
  }
}
