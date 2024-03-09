import {Component} from '@angular/core';
import {Albums} from '../../models/albums';
import {AlbumsService} from "./albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albums: Albums[] | undefined;
  constructor(private albumservice: AlbumsService) {
    albumservice.getAlbums().subscribe(albums => this.albums = albums);
  }
  ngOnInit() {
    this.albumservice.getAlbums().subscribe(albums => this.albums = albums);
    console.log(this.albums);
  }

  deleteAlbum(id: number) {
    this.albums = this.albums?.filter(album => album.id !== id);
  }
}
