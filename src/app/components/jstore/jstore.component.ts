import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jstore',
  templateUrl: './jstore.component.html',
  styleUrls: ['./jstore.component.scss']
})
export class JstoreComponent implements OnInit {

  cards = [
    {title: "New Shoes", price: "$120", description: "Please buy these new shoes", image: "shoes.jpeg"},
    {title: "New Shelf", price: "$40", description: "Please buy this new shelf", image: "shelf.jpeg"},
    {title: "New Skateboard", price: "$90", description: "Please buy this new skateboard", image: "skateboard.jpeg"},
    {title: "New Shoes", price: "$120", description: "Please buy these new shoes", image: "shoes.jpeg"},
    {title: "New Shelf", price: "$40", description: "Please buy this new shelf", image: "shelf.jpeg"},
    {title: "New Skateboard", price: "$90", description: "Please buy this new skateboard", image: "skateboard.jpeg"},
    {title: "New Shoes", price: "$120", description: "Please buy these new shoes", image: "shoes.jpeg"},
    {title: "New Shelf", price: "$40", description: "Please buy this new shelf", image: "shelf.jpeg"},
    {title: "New Skateboard", price: "$90", description: "Please buy this new skateboard", image: "skateboard.jpeg"},
  ]
  ngOnInit(): void {
  }

}
