const React = require('react');
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐'
        }
        rating = (
            <h3>
                {stars} Stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant!🤮' : 'Rave!🤯'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
                <h1>{data.place.name}</h1>
                <h2>Rating</h2>
                { rating }
                <br/>
                <img src={data.place.pic} alt='main restaurant pic'/>
                <h2>Located in {data.place.city}, {data.place.state}</h2>
                <h3>{data.place.showEstablished()}</h3>
                <h4>Serving {data.place.cuisines}</h4>
                <section>Comments</section>
                {comments}
                <form action={`/places/${data.place.id}/comment`} method="POST">
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <label htmlFor="content">Comment</label>
                            <textarea
                            id="content"
                            name="content"
                            className="form-control">
                            </textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="content">Author</label>
                            <input
                            id="author"
                            name="author"
                            className="form-control">
                            </input>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="stars" className="d-block">
                                Rating
                            </label>
                            <input
                            type="range"
                            step="0.5"
                            min="1"
                            max="5"
                            id="stars"
                            name="stars">
                            </input>
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="content" className="d-block">
                                Rant?
                            </label>
                            <input type="checkbox" id="rant" name="rant">
                            </input>
                        </div>
                    </div>
                    <input
                    type="submit"
                    className="btn btn-primary"
                    value="Add Comment">
                    </input>
                </form>
            </main>
        </Def>
    )
}
module.exports = show