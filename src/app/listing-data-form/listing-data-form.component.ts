import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {
  name: string;
  description: string = '';
  price: number;

  @Input() buttonText='';
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentprice = 0;


  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.name = this.currentName
    this.description = this.currentDescription
    this.price = this.currentprice
  }

  onSubmitClicked(): void {
    this.onSubmit.emit({
      id:'',
      name:this.name,
      description:this.description,
      price:Number(this.price)
    })
  }
}
