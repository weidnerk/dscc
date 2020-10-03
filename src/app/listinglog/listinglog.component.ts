/*
  new listings page
*/

import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ListingLogView } from '../_models/orderhistory';
import { OrderHistoryService } from '../_services/orderhistory.service';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-listinglog',
  templateUrl: './listinglog.component.html',
  styleUrls: ['./listinglog.component.scss']
})
export class ListinglogComponent {
  @Input() listingID: number;
  displayedColumns: string[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  toListingCount: number;
  errorMessage: string | null;
  statusMessage: string | null; // show storeToListing result
  dataSource: MatTableDataSource<ListingLogView> = new MatTableDataSource();
  logErrorCount: number;
  logStatus: string;
  selectedStore: number;
  unlisted = true;
  listed = false;
  private sub: any;

  // status spinner variables
  color: ThemePalette = 'primary';
  mode: "determinate" | "indeterminate" | undefined = 'indeterminate';
  value: number = 50;
  displayProgressSpinner = true;

  constructor(public _service: OrderHistoryService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {

    this.displayProgressSpinner = true;
    this.generateHeaders();
    this.matIconRegistry.addSvgIcon(
      'wmicon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/wm.svg')
    );
  }

  ngOnInit() {
    this.loadData();
  }
 
  loadData() {
    this._service.getListingLog(this.listingID)
      .subscribe(res => {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.data = res;

        this.displayProgressSpinner = false;
      },
        error => {
          this.displayProgressSpinner = false;
          this.errorMessage = error.errMsg;
        });;

  }
  generateHeaders() {
    this.displayedColumns.push("created");
    this.displayedColumns.push("message");
    this.displayedColumns.push("note");
    this.displayedColumns.push("userName");
  }
}
