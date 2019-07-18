import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

	@Input() titre: string;
	@Input() message: string;
	@Input() level: number;
	@Input() datePost: Date;


  constructor() {
  }

  ngOnInit() {
  }

  onLike() {
  	return this.level++;

  }

  onUnlike() {
  	return this.level--;
  }

}
