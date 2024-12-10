import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-album',
  templateUrl: './details-album.component.html',
  styleUrls: ['./details-album.component.scss']
})
export class DetailsAlbumComponent {
  
  public commentsForm!: FormGroup;
  public isCreateComment: boolean = false;
  public rating: string[] = ['1', '2', '3', '4', '5'];

  @Input() album!: any;
  @Input() isLoading!: boolean | null;

  @Output() emitNewComment: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
  ) {}  

  ngOnInit(): void {
    this.newComment();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['album']) {
      console.log(this.album);
    }
  }

  public newComment(): void {
    this.commentsForm = this.fb.group({
      rating: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  public saveComment(): void {
    if (this.commentsForm.valid) {
      this.emitNewComment.emit(this.commentsForm.value);
      this.commentsForm.reset();
    }
  }
}