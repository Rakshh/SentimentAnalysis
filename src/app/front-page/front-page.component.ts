import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { products } from '../products';
import {SentimentAnalysisResponse} from '../SentimentAnalysisFeedback'

@Component({
  selector: 'app-product-list',
  templateUrl: './front-page.component.html',
  styleUrls: ['./product-list.component.css']
})


export class FrontPageComponent {

   feedback:string=""
   detailedReport:string=""
   detailedPositive:string=""
   detailedNegative:string=""
   detailedMixed:string=""
   detailedNeutral:string=""
   detailedEntity:string=""
   detailedEntityText:string=""
   detailedEntityScore:string=""
  constructor(private http:HttpClient) {
  
  }
  analyze()
  {
    let url="https://b1zaiwtevh.execute-api.us-east-1.amazonaws.com/default/TextAnalyzer2"
   var text=(document.getElementById('sentimentAnalyzerTextId') as HTMLInputElement).value;
   var postData=new SentimentText(text)
  
   console.log( JSON.stringify(postData))
 
 this.http.post(url,postData).toPromise().then((data:SentimentAnalysisResponse)=> 
 {
   console.log(data)
   this.feedback=" Overall Sentiment of this comment is: "+ data.sentiment.Sentiment

 this.detailedReport= " Detailed Sentiment Score is:"  
 this.detailedPositive= "Positive: " + data.sentiment.SentimentScore.Positive
 this.detailedNegative= "Negative: " + data.sentiment.SentimentScore.Negative
 this.detailedMixed= "Mixed: " + data.sentiment.SentimentScore.Mixed
 this.detailedNeutral= "Neutral: " + data.sentiment.SentimentScore.Neutral
 
if(data.entities.Entities.length!=0)
{
this.detailedEntity= "Entity Type: " + data.entities.Entities[0].Type
this.detailedEntityText= "Entity Text: " + data.entities.Entities[0].Text
this.detailedEntityScore= "Entity Score: " + data.entities.Entities[0].Score
}
  }
 )
  }
}
class SentimentText{
   text:string;
   constructor(text:string)
   {
     this.text=text
   }
}
