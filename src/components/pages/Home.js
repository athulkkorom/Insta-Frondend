
import CreateFeed from "../feed/CreateFeed";
import FeedList from "../feed/FeedList";
import Profile from "../Profile";
const Home = () => {
    return ( 
        <Profile>
             <div className="container">
             <div className="row justify-content-center">
                <CreateFeed></CreateFeed>
                <hr></hr>
         <FeedList></FeedList>
               </div>
      
    </div>
        </Profile>
     );
}
 
export default Home;