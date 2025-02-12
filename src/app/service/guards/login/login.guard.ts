import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../../data/LocalStorage/local-storage.service';
import { inject } from '@angular/core';
import { RedirectRoutes } from '../../../redirect.routes';

export const loginGuard: CanActivateFn = (route, state) => {
  if(LocalStorageService.getInstance().getToken()) inject(Router).navigateByUrl(RedirectRoutes.user.home);
  return true;
};
