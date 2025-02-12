import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../../data/LocalStorage/local-storage.service';
import { inject } from '@angular/core';
import { RedirectRoutes } from '../../../redirect.routes';

export const authGuard: CanActivateFn = (route, state) => {
  if(!LocalStorageService.getInstance().getToken()) inject(Router).navigateByUrl(RedirectRoutes.auth.base)
  return true;
};
