import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user.model';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }
}
