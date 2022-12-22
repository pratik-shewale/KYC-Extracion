import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  documentList = [
    { id: 1, name: 'pan-card', title: 'Pan Card', link: 'kyc/pan-card' },
    { id: 2, name: 'aadhr-card', title: 'Aadhr Card', link: 'kyc/aadhar-card' },
    { id: 3, name: 'pan-card', title: 'Pan Card', link: 'kyc/pan-card' },
    { id: 4, name: 'pan-card', title: 'Pan Card', link: 'kyc/pan-card' },
    { id: 5, name: 'pan-card', title: 'Pan Card', link: 'kyc/pan-card' },
  ];
}
