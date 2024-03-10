import {Component} from '@angular/core';
import {AlbumsService} from "../albums/albums.service";
import {Photos} from "../../models/photos";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  photos: Photos[] = [];

  constructor(private albumService: AlbumsService, private route: ActivatedRoute, private _location: Location) {
  }

  ngOnInit() {
    const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.albumService.getPhotos(id).subscribe(photos => {
      this.photos = photos;
    });
  }

  backClicked() {
    this._location.back();
  }
}
