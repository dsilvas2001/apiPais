import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn =
    localStorage.getItem('isLoggedIn') === 'true' ? true : false;
  const router = inject(Router);
  if (isLoggedIn) {
    return true;
  } else {
    return router.navigate(['Auth/login']);
  }
};

export const publicGuard: CanActivateFn = () => {
  const isLoggedIn =
    localStorage.getItem('isLoggedIn') === 'true' ? true : false;
  const router = inject(Router);

  if (isLoggedIn) {
    return true;
  } else {
    // Si el usuario no está autenticado, redirigir al login
    return router.navigate(['Auth/login']);
  }
};
