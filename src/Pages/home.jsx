
import Hero from '../Components/hero';
import Nav from '../Components/Nav';

const Home = () => {
    return (
        <div>
            <div className="bg-blue-500 text-white w-full">
                <Nav />
                <Hero />
            </div>
            <h1>Welcome to the Job Board</h1>
            <p>Your one-stop destination for job listings and career resources.</p>
        </div>
    );
};

export default Home;