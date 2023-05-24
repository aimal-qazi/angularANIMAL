import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/animal.service';

@Component({
  selector: 'app-all-animals',
  templateUrl: './all-animals.component.html',
  styleUrls: ['./all-animals.component.css'],
})
export class AllAnimalsComponent implements OnInit {
  animals = [
    {
      name: 'dog',
      food: {
        like: 'meat',
        dislike: 'food',
      },
    },
    {
      name: 'cat',
      food: {
        like: 'meat',
        dislike: 'food',
      },
    },
    {
      name: 'mouse',
      food: {
        like: 'cheeze',
        dislike: 'food',
      },
    },
    {
      name: 'rabbit',
      food: {
        like: 'carrot',
        dislike: 'meat',
      },
    },
    {
      name: 'chicken',
      food: {
        like: 'food',
        dislike: 'meat',
      },
    },
    {
      name: 'elephant',
      food: {
        like: 'plants',
        dislike: 'meat',
      },
    },
    {
      name: 'lion',
      food: {
        like: 'meat',
        dislike: 'food',
      },
    },
    {
      name: 'tiger',
      food: {
        like: 'meat',
        dislike: 'food',
      },
    },
    {
      name: 'fish',
      food: {
        like: 'food',
        dislike: 'waste',
      },
    },
    {
      name: 'duck',
      food: {
        like: 'food',
        dislike: 'meat',
      },
    },
  ];

  constructor(private dataservice: AnimalService) {}
  ngOnInit(): void {
    const allanimal = this.animals.slice(0, 5);
    this.dataservice.setData(allanimal);
  }
}
