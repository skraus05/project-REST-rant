const React = require('react');
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
                <h1>{data.place.name}</h1>
                <section>Rating</section>
                <h5>Not rated</h5>
                <img src={data.place.pic} alt='main restaurant pic'/>
                <h2>Located in {data.place.city}, {data.place.state}</h2>
                <h3>{data.place.showEstablished()}</h3>
                <h4>Serving {data.place.cuisines}</h4>
                <section>Comments</section>
                <h4>No comments yet!</h4>
            </main>
        </Def>
    )
}
module.exports = show