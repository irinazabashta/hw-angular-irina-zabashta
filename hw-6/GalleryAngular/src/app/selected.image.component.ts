import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-selected-image',
    template: `
        <div class="container selected-image">
          <div class="row">
            <div class="offset-4 col-4">
              <div class="card">
                <img [src]="selectImageUrl"
                     class="card-img-top"
                     alt="">
              </div>
            </div>
          </div>
        </div>
    `,
    styleUrls: ['./app.component.scss']
})

export class SelectedImageComponent {
    @Input()
    public selectImageUrl;
}