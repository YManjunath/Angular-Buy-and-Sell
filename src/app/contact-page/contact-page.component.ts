import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings, fakeMyListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit{

  email: string = 'heisenbergbb11@gmail.com';
  message: string = '';
  listing: Listing;

  constructor(
    private route:ActivatedRoute,
    private router: Router 
  ){

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id)!;
    this.message = `Hi, I am interested in your ${this.listing && this.listing.name.toLocaleLowerCase()}!`;
  } 

  sendMessage(): void{
    alert('Your message has been sent !');
    this.router.navigateByUrl('/listings');
  }

}
