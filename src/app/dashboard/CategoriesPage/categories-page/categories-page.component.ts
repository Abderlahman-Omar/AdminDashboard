import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.css',
})
export class CategoriesPageComponent implements OnInit {
  // categoryDetails: any;
  // categoryId: any;
  // constructor(
  //   private activatedRoute: ActivatedRoute,
  //   private categoriesService: CategoriesService
  // ) {}
  // ngOnInit(): void {
  //   this.activatedRoute.paramMap.subscribe((params) => {
  //     this.categoryId = params.get('id');
  //   });
  //   // this.categoriesService
  //   //   .getSingleCategory(this.categoryId)
  //   //   .then(({ subCategoryData, error }) => {
  //   //     this.subTitleInput = subCategoryData.title;
  //   //     this.isLoadingModal = false;
  //   //   });
  //   this.categoriesService.getCategoryDetails(this.categoryId).subscribe({
  //     next: (response) => {
  //       this.categoryDetails = response;
  //     },
  //   });
  // }
  //////////////////////
  categoryDetails: any;
  categoryId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.categoryId = params.get('id');
    });
    // this.categoriesService
    //   .getSingleCategory(this.categoryId)
    //   .then(({ subCategoryData, error }) => {
    //     this.subTitleInput = subCategoryData.title;
    //     this.isLoadingModal = false;
    //   });
    this.categoriesService
      .getSingleCategory(this.categoryId)
      .then((response) => {
        this.categoryDetails = response.categoryData;
      });
  }
}
