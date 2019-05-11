import { Component, OnInit } from '@angular/core';
import {AilmentService} from '../../services/ailment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: any;
  itemsArray: string[];


  constructor(
    private ailmentService: AilmentService,
    private itemService: ItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ailmentService.selectAilment(this.activatedRoute.snapshot.params.problemId).subscribe(data => {
      this.items = data[0];
      this.itemsArray = (this.items as string).split(';');
    });
  }

  selectMeal(item) {
    console.log(`select foodItem ${item}`);
    this.router.navigate(['recipes', item.trim().toLowerCase()]);
  }


}
