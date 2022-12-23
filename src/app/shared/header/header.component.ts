import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import {
  NgbOffcanvas,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  documentList = [
    { id: 1, name: 'pan-card', title: 'Pan Card', link: 'kyc/pan-card' },
    { id: 2, name: 'aadhr-card', title: 'Aadhr Card', link: 'kyc/aadhar-card' },
    { id: 3, name: 'pan-card', title: 'Pan Card', link: 'kyc/pan-card' },
    { id: 4, name: 'pan-card', title: 'Pan Card', link: 'kyc/pan-card' },
    { id: 5, name: 'pan-card', title: 'Pan Card', link: 'kyc/pan-card' },
  ];
  isMenuCollapsed = true;
  closeResult = '';
  isKycPage = false;
  activeTab = 2;

  constructor(
    private offcanvasService: NgbOffcanvas,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe((val) => {
      let pathname = window.location.pathname;

      if (pathname.includes('kyc')) {
        this.isKycPage = true;
      } else {
        this.isKycPage = false;
      }
    });
  }

  open(content: any) {
    console.log(content);

    this.offcanvasService
      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
