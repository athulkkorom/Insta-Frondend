export default function FeedItem(props) {
    return ( 
        <>
        <div classname="col-md-6 card">
        <div className="card" style={{ width: "40rem" }}>
          <img src="https://images.pexels.com/photos/15759974/pexels-photo-15759974.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top" alt="" />
          <div className="card-body">
          <div className=" d-flex justify-content-end" style={{fontSize: "25px"}}>
          <i class="fa-regular fa-bookmark"></i>
          </div>
          <div className="col-4">
            <div className="row" style={{fontSize: "25px"}}>
                <div className="col-2">
          <i class="fa-solid fa-heart text-danger"></i>
          </div>
          <div className="col-2">
          <i class="fa-regular fa-comment"></i>
          </div>
          <div className="col-2">
          <i class="fa-regular fa-paper-plane"></i>
          </div>
        
          </div>
          </div>
            <h5 className="card-text">100Likes</h5>
            <p className="card-text">
                <strong>Name </strong>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </p>
            <p className="Card-text"style={{ fontSize: "15px" }}><light>View All10 Comments</light></p>
          </div>
        </div>
        </div>
           {props.children}
           </>
     );
}
