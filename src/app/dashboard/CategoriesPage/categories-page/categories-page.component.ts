import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { ActivatedRoute } from '@angular/router';
import { SubCategoriesService } from '../../../services/SubCategories.service';

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
  subCategories: any[] = [];
  subCategory: any;
  subCategoryId: any;
  catTitleInput: string = '';
  subTitleInput: string = '';
  selectedCId: number | null = null;
  selectedSId: number | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private subCategoriesService: SubCategoriesService
  ) {}
  ngOnInit(): void {
    this.updateLocalData();
    // this.activatedRoute.paramMap.subscribe((params) => {
    //   this.categoryId = params.get('id');
    // });

    // this.categoriesService
    //   .getSingleCategory(this.categoryId)
    //   .then((response) => {
    //     this.categoryDetails = response.categoryData;
    //     this.subCategories = this.categoryDetails.subCategories;
    //     this.subCategories.map((subCategoryId) => {
    //       console.log(subCategoryId);
    //     });
    //   });
    // this.subCategoriesService.getAllSubCategories().then((response) => {
    //   console.log(response.subCategoriesData);
    // });
  }
  updateLocalData() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.categoryId = params.get('id');
    });

    this.categoriesService
      .getSingleCategory(this.categoryId)
      .then((response) => {
        this.categoryDetails = response.categoryData;
        // this.subCategories = this.categoryDetails.subCategories;
        // this.subCategories.map((subCategoryId) => {
        //   console.log(subCategoryId);
        // });
      });
  }
  setCurrentCId(idx: number) {
    this.selectedCId = idx;
  }
  setCurrentSId(idx: number) {
    this.selectedSId = idx;
  }
  onInitCatUpdate() {
    if (this.selectedCId !== null) {
      this.categoriesService
        .getSingleCategory(this.selectedCId!)
        .then(({ categoryData, error }) => {
          this.catTitleInput = categoryData.title;
        });
    }
  }

  onInitSubUpdate() {
    if (this.selectedSId !== null) {
      this.subCategoriesService
        .getSingleSubCategory(this.selectedSId!)
        .then(({ subCategoryData, error }) => {
          this.subTitleInput = subCategoryData.title;
        });
    }
  }
}
