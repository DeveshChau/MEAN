import { Component, OnInit } from '@angular/core';
import { AvatarUserService } from '../../services/avatar-user.service';
import { IAvatarUser } from '../../models/AvatarUser'

@Component({
  selector: 'app-avatar-user',
  templateUrl: './avatar-user.component.html',
  styleUrls: ['./avatar-user.component.css'],
  providers: [AvatarUserService]
})
export class AvatarUserComponent implements OnInit {

  avatarUser: IAvatarUser
  constructor(private _avatarUser: AvatarUserService) { }

  ngOnInit() {
    this._avatarUser.getAvatarUser().subscribe(data => this.avatarUser = data)
  }

}
