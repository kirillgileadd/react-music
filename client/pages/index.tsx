import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <>
            <NavBar/>
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
        </>
    )
}

export default Home
