import NavBar from "../components/NavBar";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
    return (
        <div>
            <div className='center'>
                <h1>Home</h1>
            </div>

            <style jsx>
                {`
                  .center {
                    background-color: #2B2741;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                `}
            </style>
        </div>
    )
}

export default Home
