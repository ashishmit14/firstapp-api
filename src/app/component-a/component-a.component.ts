import { Component, OnInit } from '@angular/core';
import { FDServiceService } from '../fdservice.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  products = [
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      available: true
    },
    {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      available: false
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: '',
      available: true
    }
  ];

  employees: any[];

  constructor(private FDService: FDServiceService) { }

  ngOnInit() {
    this.FDService.getItems<any[]>().subscribe((data: any[]) => this.employees = data)
  }
}
