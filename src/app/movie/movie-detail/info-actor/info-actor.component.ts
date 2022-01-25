import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/shared/actor';
import { ActorService } from 'src/app/shared/actor.service';

@Component({
  selector: 'app-info-actor',
  templateUrl: './info-actor.component.html',
  styleUrls: ['./info-actor.component.css'],
})
export class InfoActorComponent implements OnInit {
  @Input('actorInfo') actors: any;
  listActor: any = [];

  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
    console.log(this.actors);
    // const list = [];
    for (const actor of this.actors) {
      console.log(this.actorService.getActor(actor));
      this.listActor.push(this.actorService.getActor(actor));
    }
    console.log(this.listActor);
  }
}
