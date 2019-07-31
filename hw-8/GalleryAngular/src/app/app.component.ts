import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'GalleryAngular';

  public gallery: GalleryInterface[] = [
    {
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952"
    },
    {
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796"
    },
    {
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355"
    },
    {
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      url: "https://via.placeholder.com/600/d32776"
    },
    {
      title: "natus nisi omnis corporis facere molestiae rerum in",
      url: "https://via.placeholder.com/600/f66b97"
    },
    {
      title: "accusamus ea aliquid et amet sequi nemo",
      url: "https://via.placeholder.com/600/56a8c2"
    }
  ];

  public selectImageUrl:string = this.gallery[0].url;

  public advancedClick($event): void {
    this.selectImageUrl = $event;
  }

  imageInput: any;
  public image: GalleryInterface;
  public imageURL: any;
  public message: string;

  public uploadImage(files): void {

    this.imageInput = files[0];
    // if (files.length === 0)
    //   return;
    //
    // var mimeType = files[0].type;
    // if (mimeType.match(/image\/*/) == null) {
    //   this.message = "Only images are supported.";
    //   return;
    // }

    const reader = new FileReader();
    reader.readAsDataURL(this.imageInput);
    reader.onload = (e) => {
      this.imageURL = reader.result;
      this.image = {
        title: this.imageInput.name,
        url: this.imageURL
      }
    };

    this.gallery.push(this.image);
  }
}

interface GalleryInterface{
  title: string,
  url: string | any
}
