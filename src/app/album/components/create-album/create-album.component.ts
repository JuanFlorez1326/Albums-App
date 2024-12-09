import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss']
})
export class CreateAlbumComponent {

  @ViewChild('picker') picker!: MatDatepicker<Date>;

  public albumForm!: FormGroup;
  public isId: boolean = false;
  public genderItems: string[] = ['Classical', 'Salsa', 'Rock', 'Folk'];
  public recordLabelItems: string[] = ['Sony Music', 'Discos Fuentes', 'Elektra', 'Fania Records']; 

  constructor(
    private fb: FormBuilder,
  ) {}  

  ngOnInit(): void {
    this.newAlbumForm();
  }

  public openDatePicker(): void {
    this.picker.open();
  }

  public newAlbumForm(): void {
    this.albumForm = this.fb.group({
      id: [String(Math.floor(Math.random() * 1) + Date.now())],
      name: ['', Validators.required],
      deck: ['', Validators.required],
      releaseDate: ['', Validators.required],
      gender: ['', Validators.required],
      recordLabel: ['', Validators.required],
    });
  }
}
