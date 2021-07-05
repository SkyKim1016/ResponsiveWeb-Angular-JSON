import { Component,Injectable, Input } from '@angular/core';
import { PostDataService } from '../post-data-service';

// export interface GetDataUrl{
//   name: string;
// }

// @Injectable({
//   providedIn : 'root'
// })

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
  providers: [PostDataService]
})
export class StoryComponent {

  // title = "Stradigi AI "\

  @Input()
  // DataToServce = "this is DataToService"

  serverDatas: any
  filteredObject1  : any
  top5storyId : any 
  currentTime : Object = new Date();
 

  constructor(private post : PostDataService){

    // console.log(' current Time : ' + typeof this.currentTime );

    // this.currentTime = this.datePipe.transform()
    
    this.post.getTopStoryID().subscribe( data => {

      //Get Top 5 story Id
      this.top5storyId =  data;
      this.top5storyId = this.top5storyId.slice(0,5)


      this.post.getPostData(this.top5storyId).subscribe ( data  => {
        // console.log(data);
  
  
        // this.allPost = JSON.stringify(data)
  
        this.serverDatas = data
        console.log("Server Data Result : \n"+JSON.stringify(this.serverDatas));
       
        // this.allPost = this.allPost.title.toString();
        // console.log(+this.allPost)
        
  
        // // Remove Kids Property
        // const  { kids, ...filteredObject} = this.serverDatas
        // this.filteredObject1  = filteredObject
  
        // console.log("Filtered Data Result : \n"+ JSON.stringify(this.filteredObject1));
      
      });
    })



  }

}
