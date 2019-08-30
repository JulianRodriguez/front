import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-selector',
  templateUrl: 'photo-selector.html',
  styleUrls: ['./photo-selector.scss']
})
export class PhotoSelectorComponent {

  @Input()
  public photo: string;

  @Output()
  public photoSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  setPhoto(photo: string) {
    this.photo = photo;
    console.log(this.photo);
  }

  public photoLoaded(event: any): void {
    const reader: FileReader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const files: FileList = event.target.files;
      this.convertImageToBase64(reader, files);
    }
  }

  public removePhoto(): void {
    this.photo = null;
    this.photoSelected.emit(this.photo);
  }

  private convertImageToBase64(reader: FileReader, files: FileList): void {
    if (files[0]) {
      reader.readAsDataURL(files[0]);

      reader.onload = () => {
        if (!this.photo) {
          this.photo = null;
        }
        this.photo = (reader.result as any);
        this.photoSelected.emit(this.photo);
      };
    }
  }
}
