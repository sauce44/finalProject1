import likeButton from '../components/likeButton'


export default function Card(props) {
    return (
        <div>
            <div className="Post-Card-Component"> 
                    <div className="postCard">
                            <div className="content">
                                <div className="cardUserData">
                                    <p className="userName">{props.Email}</p>
                                    <p className="date">{props.timestamp}</p>
                                </div>
                                    <p className="tweet">{props.body}</p>
                            </div>  
                            <div className="actions">
                                <Link to={`/posts/${props.match.params.id}`}>
                                    <button>{props.comments}</button> 
                                </Link>
                                    <button>{props.likes} </button>         
                            </div>
                    </div>
            </div>
            <likeButton />
        </div>
    )
}