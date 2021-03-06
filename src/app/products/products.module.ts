/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

/** Custom Components */
import { ProductsComponent } from './products.component';
import { ManageTaxConfigurationsComponent } from './manage-tax-configurations/manage-tax-configurations.component';

/**
 * Products Module
 *
 * All components related to product functions should be declared here.
 */
@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    ManageTaxConfigurationsComponent,
  ],
  entryComponents: [
  ]
})
export class ProductsModule { }
