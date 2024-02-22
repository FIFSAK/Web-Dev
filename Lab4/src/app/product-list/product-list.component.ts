import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product, products} from '../products';
import {fromArrayLike} from "rxjs/internal/observable/innerFrom";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products = [...products];
    category!: string | null;

    constructor(private route: ActivatedRoute) {}
    likedProducts = new Set<number>(); // Предполагаем, что у каждого продукта есть уникальный идентификатор типа number

    ngOnInit() {
        this.category = this.route.snapshot.paramMap.get('category');
        console.log(this.category);
        this.products = this.products.filter(product => product.category === this.category)
        console.log(this.products);
        // Здесь вы можете использовать this.category для фильтрации products по категории
    }

    share(text: string) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Async: Copying to clipboard was successful!');
            window.open('https://web.telegram.org/k/', '_blank');
        }, (err) => {
            console.error('Async: Could not copy text: ', err);
        });
    }

    protected readonly fromArrayLike = fromArrayLike;

    like(product: Product) {
        if (this.likedProducts.has(product.id)) {
            // Если продукт уже в списке лайков, уменьшаем счетчик и удаляем его из Set
            product.like--;
            this.likedProducts.delete(product.id);
        } else {
            // Если продукта нет в списке лайков, увеличиваем счетчик и добавляем его в Set
            product.like++;
            this.likedProducts.add(product.id);
        }
    }

    remove(product: Product) {
        this.products = this.products.filter(p => p !== product);

    }
}
