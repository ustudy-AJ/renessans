import { Component, Input } from '@angular/core';
import { IGallery } from '../../../../../shared/models/gallery.model';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-gallery',
  imports: [PaginatorModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  @Input() data!: IGallery[];

  currentData!: IGallery[]

  first: number = 0;
  rows: number = 1;
  rowsCount: number = 0;

  ngOnInit(){
    this.currentData = this.data.filter((v,i) => i<=4);
    this.rowsCount = this.data.length-4;
  }

  onPageChange(event: PaginatorState) {
      this.first = event.first ?? 0;
      this.rows = event.rows ?? this.data.length;
      console.log(event);
      console.log(this.first);
      console.log(this.data);

      this.currentData = this.data.filter((_, i)=> i>=this.first && i<this.first+5);
  }
}
