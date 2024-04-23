import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubCategoriesService } from '../../services/SubCategories.service';

@Component({
  selector: 'app-sub-categories-page',
  templateUrl: './sub-categories-page.component.html',
  styleUrl: './sub-categories-page.component.css',
})
export class SubCategoriesPageComponent implements OnInit {
  // subCategoryDetails: any;
  // subCategoryId: any;
  // constructor(
  //   private activatedRoute: ActivatedRoute,
  //   private subCategoriesService: SubCategoriesService
  // ) {}
  // ngOnInit(): void {
  //   this.activatedRoute.paramMap.subscribe((params) => {
  //     this.subCategoryId = params.get('id');
  //   });
  //   this.subCategoriesService
  //     .getSubCategorieDetails(this.subCategoryId)
  //     .subscribe({
  //       next: (response) => {
  //         this.subCategoryDetails = response;
  //       },
  //     });
  // }
  ///////////////////////////////
  subCategoryDetails: any;
  subCategoryId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private subCategoriesService: SubCategoriesService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.subCategoryId = params.get('id');
    });
    this.subCategoriesService
      .getSingleSubCategory(this.subCategoryId)
      .then((response) => {
        this.subCategoryDetails = response.subCategoryData;
        // console.log(this.subCategoryDetails);
      });
  }
}
