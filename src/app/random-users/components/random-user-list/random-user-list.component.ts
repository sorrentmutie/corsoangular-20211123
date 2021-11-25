import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RandomUserResult } from '../../models/random-users-result';
import { RandomUsersService } from '../../services/random-users.service';

@Component({
  selector: 'app-random-user-list',
  templateUrl: './random-user-list.component.html',
  styleUrls: ['./random-user-list.component.css']
})
export class RandomUserListComponent implements OnInit, OnDestroy {

  result: RandomUserResult |  null = null;
  constructor(private service: RandomUsersService) { }
  private subscription: Subscription | null = null;

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.service.getRandomUsers()
    .subscribe(result => this.result = result);
  }

}
