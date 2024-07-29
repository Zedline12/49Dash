import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'app/core/services/features/users.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {
  constructor(private router:ActivatedRoute,public userServ:UserService){}
  ngOnInit(): void {
    const userId = this.router.snapshot.paramMap.get('id')
    this.userServ.getUserProfile(userId!)
    this.userServ.userProfile.subscribe((user) => {
      console.log(user)
    })
  }
}
