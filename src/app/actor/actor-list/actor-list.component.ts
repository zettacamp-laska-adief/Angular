import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/shared/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css'],
})
export class ActorListComponent implements OnInit {
  actors: any = [];
  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
    this.actors = this.actorService.getActors();
  }
}
