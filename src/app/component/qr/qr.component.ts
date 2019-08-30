import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QRComponent implements OnInit {

  @Input()
  public set productId(id) {
    const qr = String(id);
    this.qrValue = qr;
  }
  private qrValue;

  constructor() { }

  ngOnInit() {}
  public get qrCode() {
    return this.qrValue;
  }
}
