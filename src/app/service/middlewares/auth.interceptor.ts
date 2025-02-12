import { HttpInterceptorFn } from '@angular/common/http';
import { LocalStorageService } from '../data/LocalStorage/local-storage.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedRequest = req.clone({
    setHeaders:{
      Authorization: `Bearer ${LocalStorageService.getInstance().getToken()}`
    }
  })
  return next(clonedRequest);
};
