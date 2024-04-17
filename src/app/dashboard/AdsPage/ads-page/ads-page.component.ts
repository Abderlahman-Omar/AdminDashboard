import { Component, OnInit } from '@angular/core';
import { Ad } from '../../../Interfaces/Ad';
import { BillboardsService } from '../../../services/Billboards.service';

@Component({
  selector: 'app-ads-page',
  templateUrl: './ads-page.component.html',
  styleUrl: './ads-page.component.css',
})
export class AdsPageComponent implements OnInit {
  adsList: Ad[] = [];
  selectedId: number | null = null;
  adTitleInput: string = '';
  adImageInput: string = '';
  isLoadingPage: boolean = true;
  isLoadingModal: boolean = true;
  constructor(private billboardsService: BillboardsService) {}
  ngOnInit(): void {
    this.updateLocalData();
  }

  async updateLocalData() {
    const { billboardsData, error } =
      await this.billboardsService.getAllBillBoards();
    if (billboardsData) {
      this.adsList = billboardsData;
      this.onClear();
      console.log(billboardsData);
    }
  }

  onClear() {
    this.selectedId = null;
    this.adTitleInput = '';
    this.adImageInput = '';
    this.isLoadingPage = false;
    this.isLoadingModal = false;
  }

  setCurrentId(idx: number) {
    this.selectedId = idx;
  }

  onInitAdUpdate() {
    if (this.selectedId !== null) {
      this.isLoadingModal = true;
      this.billboardsService
        .getSingleBillBoard(this.selectedId!)
        .then(({ billboardData, error }) => {
          this.adTitleInput = billboardData.title;
          this.adImageInput = billboardData.imgLink;
          this.isLoadingModal = false;
        });
    } else {
      this.onClear();
    }
  }

  onCreateAd() {
    this.isLoadingPage = true;
    const newAdData: Ad = {
      id: this.adsList.length,
      title: this.adTitleInput,
      imgLink: this.adImageInput,
      href: '',
      query: '',
    };
    this.billboardsService.addNewBillBoard(newAdData).then(() => {
      this.updateLocalData();
    });
  }
  onEditAd() {
    if (this.selectedId) {
      this.isLoadingPage = true;
      const editedAdData = {
        id: this.selectedId,
        title: this.adTitleInput,
        imgLink: this.adImageInput,
        href: '',
        query: '',
      };
      this.billboardsService.updateBillBoard(editedAdData).then(() => {
        this.updateLocalData();
      });
    }
  }

  onSaveAd() {
    if (this.selectedId) {
      this.onEditAd();
    } else {
      this.onCreateAd();
    }
  }

  onDeleteAd() {
    if (confirm('Are you sure you want to delete?')) {
      if (this.selectedId) {
        this.billboardsService.deleteBillBoard(this.selectedId).then(() => {
          console.log('deleted ad');
          this.updateLocalData();
        });
      }
    }
  }
}
