// Additional component
const Nav = () => {
    return (
        <div>
            <nav className='rounded-sm nav'>
                <ul className='flex align-middle justify-around p-2'>
                    <div className="logo mt-3">
                        <a href='#'>
                            Job Finder
                        </a>
                    </div> 
                    <div className="links flex justify-between">
                        <li className='rounded-sm my-3 mt-3'>Home</li> 
                        <li className='rounded-sm my-3 mt-3 m-3'>About</li>
                        <li className='rounded-sm my-3 mt-3 m-3'>Contact</li>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;