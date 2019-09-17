import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../model/user.model';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {


  @Input()
  idUser: number;
  @Input()
  password: string;
  @Output()
  ModalClose = new EventEmitter();

  public visible = false;
  public cambiado = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  openModal() {
    this.visible = true;
  }

  closeModal() {
    // this.ModalClose.emit();
    this.visible = false;
  }

  changePass() {
    console.log(this.password);
    console.log(this.idUser);

    this.userService.changePass(this.idUser, this.password).subscribe(valor => {
      console.log('estamos aki dentro');
      this.cambiado = true;
      if (this.cambiado) {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
      }
    });
    console.log(this.cambiado);

  }

}
