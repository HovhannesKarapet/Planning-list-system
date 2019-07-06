import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';
import {DataService} from '../shared/data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  form: FormGroup;
  data: any;
  date = new Date();
  search = '';
  status = [
    {value: 'All'},
    {value: 'Completed'},
    {value: 'Not Completed'},
    {value: 'Today'},
    {value: 'Failed'}
  ];

  constructor(public dialog: MatDialog, private dataService: DataService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      status: new FormControl(''),
      from: new FormControl(''),
      to: new FormControl(''),
      place: new FormControl(''),
      address: new FormControl('')
    });
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      let moment = this.date.getDate() + this.date.getMonth() + 1 + this.date.getFullYear();
      this.data.forEach(item => {
        let d = new Date(item.date);
        let dd = d.getDate() + d.getMonth() + 1 + d.getFullYear();
        if (moment > dd && item.status !== 'Completed' && item.status !== 'Failed') {
          item.status = 'Failed';
          this.dataService.patchData(item.id, item).subscribe();
        }
        if (moment === dd && item.status !== 'Completed' && item.status !== 'Today') {
          item.status = 'Today';
          this.dataService.patchData(item.id, item).subscribe();
        }
      });
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.getData().subscribe((data) => {
          this.data = data;
        });
      }
    });
  }

  onChange(i) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.data[i]
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.getData().subscribe((data) => {
          this.data = data;
        });
      }
    });
  }

  onDelete(i) {
    this.dataService.removeData(this.data[i].id).subscribe(() => {
      this.dataService.getData().subscribe((data) => {
        this.data = data;
      });
    });
  }
}
