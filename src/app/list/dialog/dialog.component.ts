import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../../shared/data.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  form: FormGroup;
  status = [
    {value: 'Completed'},
    {value: 'Not Completed'}
  ];

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private dataService: DataService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(),
      title: new FormControl('Task', [Validators.required]),
      description: new FormControl('Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
      status: new FormControl('Not Completed'),
      date: new FormControl(new Date()),
      place: new FormControl('USA'),
      address: new FormControl('1234'),
    });
    if (this.data) {
      this.form.setValue(this.data);
      this.form.get('date').setValue(new Date(this.data.date));
    }
  }

  onAdd() {
    this.dataService.postData(this.form.value).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  onSave() {
    this.dataService.patchData(this.form.value.id, this.form.value).subscribe(() => {
      this.dialogRef.close(true);
    });
  }
}
