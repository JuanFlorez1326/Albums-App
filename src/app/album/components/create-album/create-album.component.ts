import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Album } from '../../interfaces/album.interface';
import { Router } from '@angular/router';

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

  @Input() currentAlbumId!: number;
  @Input() currentAlbum: any;
  @Input() isLoading!: boolean | null;

  @Output() emitNewAlbum: EventEmitter<Album> = new EventEmitter();
  @Output() emitEditAlbum: EventEmitter<any> = new EventEmitter();

  @ViewChild('picker') picker!: MatDatepicker<Date>;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {}  

  ngOnInit(): void {
    this.newAlbumForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      if (this.currentAlbumId) {
        this.isId = true;
        this.setAlbumFormValues();
      } else {
        this.isId = false;
        this.newAlbumForm();
      }
    }
  }

  public openDatePicker(): void {
    this.picker.open();
  }

  public newAlbumForm(): void {
    this.albumForm = this.fb.group({
      name: ['', Validators.required],
      cover: ['', Validators.required],
      releaseDate: ['', Validators.required],
      genre: ['', Validators.required],
      recordLabel: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  public setAlbumFormValues(): void {
    this.albumForm?.patchValue({
      name: this.currentAlbum.name,
      cover: this.currentAlbum.cover,
      releaseDate: this.currentAlbum.releaseDate,
      genre: this.currentAlbum.genre,
      recordLabel: this.currentAlbum.recordLabel,
      description: this.currentAlbum.description,
    });
  }

  public saveAlbum(): void {
    if (this.albumForm.valid) {
      if (this.isId) {
        const album = {
          id: this.currentAlbumId,
          ...this.albumForm.value
        };
        this.emitEditAlbum.emit(album);
      }
      else this.emitNewAlbum.emit(this.albumForm.value);
      this.albumForm.reset();
    }
  }

  public cancelEdit(): void {
    this.albumForm.reset();
    this.router.navigate(['/albums/list']);
  }
}