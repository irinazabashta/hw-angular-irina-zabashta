import { Component , Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-gallery',
    template: `
        <div class="container">
          <div class="row section-gallery">
            <div class="col-2" *ngFor="let item of gallery">
              <div class="card">
                <img (click)="onClick(item.url)" [src]="item.url"
                     class="card-img-top"
                     alt="">
              </div>
            </div>
          </div>
        </div>
    `,
    styleUrls: ['./app.component.scss']
})

export class GalleryComponent {

    @Input()
    public gallery;

    @Output()
    public selectImage = new EventEmitter<string>();

    public onClick(currentUrl: string): void{
        this.selectImage.emit(currentUrl);
    }
}