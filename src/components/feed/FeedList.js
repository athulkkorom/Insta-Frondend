import FeedItem from "./FeedItem";

export default function FeedList(props){
    return(
        <div>
            <FeedItem></FeedItem>
            <FeedItem></FeedItem>
            <FeedItem></FeedItem>
            
             {props.children}   
        </div>
    )
}