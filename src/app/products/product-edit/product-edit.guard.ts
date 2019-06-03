import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductEditComponent } from './product-edit.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {
  canDeactivate(
    component: ProductEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot,
  ): Observable<boolean>|Promise<boolean>|boolean {

    if (component.isDirty) {
      const productName = component.product.productName || 'New Product';
      return confirm(`Navigate away and lose all changes to ${productName}?`);
    }

    return true;
  }
}
