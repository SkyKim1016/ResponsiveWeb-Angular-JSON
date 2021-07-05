import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { forkJoin } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class PostDataService{
    url : string[] = [""];
    httpGet : any = [];
    
    constructor( private http: HttpClient ){
        
    }

    getTopStoryID(){
        let url="https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
        return this.http.get( url );
    }


    getPostData(top5storyId : any){
       


        console.log("Object Length: "+ Object.keys(top5storyId).length);

        for(let key of Object.keys(top5storyId)){

            let keyNumber = parseInt(key);
            console.log("keyNumber : " +  keyNumber);

            this.url[keyNumber]=`https://hacker-news.firebaseio.com/v0/item/${top5storyId[key]}.json?print=pretty`;

            this.httpGet[keyNumber] = this.http.get( this.url[keyNumber] );


            console.log("URL : "+JSON.stringify(this.url[keyNumber]));
            // console.log("httpGet : "+JSON.stringify(this.httpGet[keyNumber]));
            
        }

       

        return forkJoin( this.httpGet[0], this.httpGet[1],this.httpGet[2],this.httpGet[3],this.httpGet[4]);
        
            
    }    

}