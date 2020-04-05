import { Injectable } from '@angular/core';
import { HttpRequestsService } from './http-requests.service';
import { ShareService } from './share.service';

@Injectable({
  providedIn: 'root'
})

export class MarkFilterItemService {

  constructor(
    private httpRequestsService: HttpRequestsService,
    public shareService: ShareService,
  ) {}

}
