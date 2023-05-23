import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  @Input() matchId = null;
  isHome: boolean = false

  constructor(private router: Router) {}


  ngOnInit() {
    this.isHome = this.router.url === '/dashboard' ? true : false
  }
}
