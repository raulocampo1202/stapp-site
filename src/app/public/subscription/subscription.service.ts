import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private apiService: ApiService) {
  }

  getSusbcriptions(): Observable<any>{
    return this.apiService.get('');
  }
}
