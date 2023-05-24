import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private animalData: any[] = [];
  constructor() {}

  setData(animal: any) {
    this.animalData = animal;
  }

  getData() {
    return this.animalData;
  }
}
