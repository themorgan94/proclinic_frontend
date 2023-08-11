import { Component, OnInit, ViewChild } from '@angular/core';

import { TokenStorageService } from '../../core/services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

/**
 * Profile Component
 */
export class ProfileComponent implements OnInit {
  userData:any;

  constructor(private TokenStorageService : TokenStorageService) { }

  ngOnInit(): void {
    this.userData =  this.TokenStorageService.getUser();  
  }
}
