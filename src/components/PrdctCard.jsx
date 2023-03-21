
function PrdctCard(post) {
    return (

        <a href={"/products/" + post.post.id} className="card">
            <h1>{post.post.title}</h1>
            <img src={post.post.images[0]} alt="" />
            <div className="price">
                <h3>{post.post.description}</h3>
                <h2>Price: {post.post.price}</h2>
                <div className="discountTag"><h1>Discount: {post.post.discountPercentage}%</h1>
                </div>
            </div>
        </a>

    )
}

export default PrdctCard