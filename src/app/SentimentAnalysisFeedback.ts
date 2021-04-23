

export class SentimentAnalysisResponse {
     entities: Entities
     sentiment: Sentiment
}


 class Entities {
   
     index: string
     Entities: Entity[]
}

  class Entity {
   
     Score: string

    
     Type: String

    
     Text: String

    
     BeginOffset: string

   
     EndOffset: string
  }

 class Sentiment {
    
     index: string

   
     Sentiment: string

    
     SentimentScore: SentimentScore
 }

 class SentimentScore {
   
     Positive: string

    
     Negative: string


     Neutral: string

   
     Mixed: string
 }
