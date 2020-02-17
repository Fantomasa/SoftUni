import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrServiceExport {

  constructor(private toastr: ToastrService) { }

  showSuccess(mainMessage: string, message: string) {
    this.toastr.success(mainMessage, message);
  }
}
