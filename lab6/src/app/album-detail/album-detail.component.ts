import { Component } from '@angular/core';
import {Albums} from "../../models/albums";
import {AlbumsService} from "../albums/albums.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  album: Albums = {} as Albums;
  editFlag: boolean = false;
  newTitle: string="";
  constructor(private albumservice: AlbumsService, private route  : ActivatedRoute, private _location: Location) {
  }
  ngOnInit() {
    const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.albumservice.getAlbum(id).subscribe(album => this.album = album);
  }

  editing() {
    this.editFlag = true;
  }

  save() {
    if (this.album && this.newTitle !== undefined) {
      this.album.title = this.newTitle;
      this.editFlag = false;
    }
  }
  backClicked() {
    this._location.back();
  }
}
