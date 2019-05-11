import { Component, OnInit } from '@angular/core';
import {AilmentService} from '../../services/ailment.service';
import {Router} from '@angular/router';
import {Ailment} from '../../models/ailment.model';


@Component({
  selector: 'app-list-ailments',
  templateUrl: './list-ailments.component.html',
  styleUrls: ['./list-ailments.component.css']
})
export class ListAilmentsComponent implements OnInit {

  constructor(
    private ailmentService: AilmentService,
    private router: Router
  ) {
  }

  ailments: Ailment[];

  message: string;



  ngOnInit() {
    this.refreshAilments();
  }

  refreshAilments() {
    this.ailmentService.retrieveAllAilments().subscribe(
      response => {
          console.log(response);
          this.ailments = response;
      }
    );
  }

  selectAilment(id) {
    console.log(`select ailment ${id}`);
    this.router.navigate(['food-items', id]);
  }

}
