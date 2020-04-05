import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {map} from "rxjs/operators";
import { HttpRequestsService } from "./http-requests.service";
import { ShareService } from "./share.service";

@Injectable({
  providedIn: 'root'
})

export class MarkFilterItemService {

  constructor(
    private httpRequestsService: HttpRequestsService,
    public shareService: ShareService,
  ) {}

}
