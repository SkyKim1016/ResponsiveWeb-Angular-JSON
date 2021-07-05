import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})

export class CommentComponent {

    constructor(private route: ActivatedRoute){}

    id:any;

    ngOnInit():void {
        this.id = this.route.snapshot.params['id'];
    }
}