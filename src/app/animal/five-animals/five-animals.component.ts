import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/animal.service';

@Component({
  selector: 'app-five-animals',
  templateUrl: './five-animals.component.html',
  styleUrls: ['./five-animals.component.css'],
})
export class FiveAnimalsComponent implements OnInit {
  animals: any = [];
  constructor(private dataservice: AnimalService) {}
  ngOnInit(): void {
    this.animals = this.dataservice.getData();
  }
}
