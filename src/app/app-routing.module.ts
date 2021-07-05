import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component'
import { StoryComponent } from './story/sotry.component'
import { CommentComponent } from './comment/comment.component'

const routes: Routes = [
  {path:"", component:AppComponent },
  // {path : 'story', component : StoryComponent },
  // {path : 'home', component : AppComponent},
  {path : 'comment/:id', component : CommentComponent },
  // {path : '**', component : CommentComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {relativeLinkResolution: 'legacy'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
