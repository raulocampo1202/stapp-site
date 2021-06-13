import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from './subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
    this.getSubscriptions();
  }

  getSubscriptions() {
    this.subscriptionService.getSusbcriptions().subscribe();
  }

}
