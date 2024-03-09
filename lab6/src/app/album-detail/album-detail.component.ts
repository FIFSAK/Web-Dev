import { Component } from '@angular/core';
import {Albums} from "../../models/albums";
import {AlbumsService} from "../albums/albums.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  album: Albums | undefined;
  constructor(private albumservice: AlbumsService, private route  : ActivatedRoute) {
  }
  ngOnInit() {
    const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.albumservice.getAlbum(id).subscribe(album => this.album = album);
  }
}
