import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

posts = [
  {
	titre: 'Lorem ipsum dolor.',
	message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolores illum voluptatibus sunt ipsa recusandae qui, cupiditate, natus magnam porro perspiciatis amet! Magni beatae, consequatur atque. Commodi tenetur dignissimos enim eius magnam mollitia, libero dolorum iste a impedit, reiciendis nam distinctio blanditiis delectus veritatis accusantium veniam? Ullam, culpa nemo deserunt.',
	loveIts: 1,
	created_at: new Date()
  },
  {
	titre: 'Lorem ipsum.',
	message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolor qui obcaecati consequuntur mollitia voluptatem aspernatur optio numquam, repudiandae blanditiis.',
	loveIts: -1,
	created_at: new Date()
  },
  {
	titre: 'Lorem ipsum dolor sit amet.',
	message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi saepe minus, deserunt harum ipsam tempore suscipit et labore, non eveniet maxime illum nostrum, rerum nihil reiciendis eos voluptatem. Velit, pariatur ut. Cumque dolor ratione expedita necessitatibus officia tempore atque.',
	loveIts: 0,
	created_at: new Date()
  }
  ];

  constructor() { }

  ngOnInit() {
  }


}
