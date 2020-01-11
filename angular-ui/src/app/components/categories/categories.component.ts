import { Component, OnInit } from '@angular/core';
import { ActionService } from "../../services/action.service";
import { ActivatedRoute } from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private _actionService: ActionService, private _route: ActivatedRoute, private _flashMessagesService: FlashMessagesService) { }

  categoryList: any;
  productList: any;
  showcat: boolean = false;
  showProduct: boolean = false;
  ngOnInit() {
    this._actionService.getCategories().subscribe(res => {
      this.categoryList = res;
      if (this.categoryList.length == 0) {
        this.showcat = false;
        this._flashMessagesService.show(`There are no categories. Please create categories.`, { cssClass: 'alert-danger', timeout: 3000 });
      } else {
        this.showcat = true;
      }
      console.log(this.categoryList);
    });
  }

  onSelect(category) {
    this._actionService.getProducts(category).subscribe(res => {
      this.productList = res;
      if (this.productList.length !== 0) {
        this.showProduct = true;
      }
    });
  }

  onDelete(category) {
    this._actionService.deleteProducts(category).subscribe(res => {
      this._flashMessagesService.show(`Products are deleted for category ${category}!`, { cssClass: 'alert-danger', timeout: 3000 });
      this.showProduct = false;
      this.ngOnInit();
    })
  }

}
