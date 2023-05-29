const Header = () => {
    return (
        <div>
            <div className="jumbotron" >
                <h1 className="display-4">Groceries App</h1>
                <p className="lead">Looking for fresh groceries? Scroll On!</p>
                {/* <hr className="my-4"> */}
                    <p>So Excited for you!! Start Shopping Below </p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Start Shopping</a>
                    </p>
            </div>
        </div>
    )
}

export default Header;