import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  gallery: Array<Object> = [
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
    },
    {
      title: "officia delectus consequatur vero aut veniam explicabo molestias",
      url: "https://via.placeholder.com/600/b0f7cc"
    },
    {
      title: "aut porro officiis laborum odit ea laudantium corporis",
      url: "https://via.placeholder.com/600/54176f"
    },
    {
      title: "qui eius qui autem sed",
      url: "https://via.placeholder.com/600/51aa97"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
