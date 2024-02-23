import {Component, OnInit} from '@angular/core';
import {Product} from "../products";
import {ProductListComponent} from "../product-list/product-list.component";

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['../product-list/product-list.component.css', './product-item.component.css']
})
export class ProductItemComponent extends ProductListComponent implements OnInit {
    item!: Product;
    id!: number | null;


    override ngOnInit() {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        this.item = this.products.filter(product => product.id === this.id)[0];
        console.log(this.item);

    }

    override share(text: string) {
        super.share(text);
    }

    override like(product: Product) {
        super.like(product);
    }
}
