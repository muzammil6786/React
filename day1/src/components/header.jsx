const Header = (isLoggedIn)=>{
    //  isLoggedIn = false;
    return (
        <div>
            <p>Heading of blog</p>
            {isLoggedIn ? <button>logout</button> : <button>login</button>}
        </div>
    )
}
export default Header