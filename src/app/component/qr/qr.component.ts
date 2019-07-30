import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QRComponent implements OnInit {

  @Input()
  public set productId(id) {
    this.qrValue = id + '';
    console.log(id);
  }
  public qrValue;

  constructor() { }

  ngOnInit() {}
}
