import { Injectable } from '@angular/core';
import alertify from 'alertifyjs';

@Injectable()
export class AlertifyService {
  constructor() {}

  success(message: string) {
    alertify.success(message)
  }

  error(message: string) {
    alertify.error(message);
    (message)
  }

  warning(message: string) {
    alertify.warning(message)
  }
}
