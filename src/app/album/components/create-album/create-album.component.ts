import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Album } from '../../interfaces/album.interface';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss']
})
export class CreateAlbumComponent {

  public albumForm!: FormGroup;
  public isId: boolean = false;
  public genderItems: string[] = ['Classical', 'Salsa', 'Rock', 'Folk'];
  public recordLabelItems: string[] = ['Sony Music', 'Discos Fuentes', 'Elektra', 'Fania Records']; 

  @ViewChild('picker') picker!: MatDatepicker<Date>;

  @Output() emitNewAlbum: EventEmitter<Album> = new EventEmitter();

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
      cover: ['', Validators.required],
      releaseDate: ['', Validators.required],
      genre: ['', Validators.required],
      recordLabel: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  public saveAlbum(): void {
    if (this.albumForm.valid) {
      this.emitNewAlbum.emit(this.albumForm.value);
      this.albumForm.reset();
    }
  }
}
