import SubMain from "./subMain";

function Home() {
    return (
        <>
            <section className=" flex flex-col justify-center items-center bg-mainBg bg-no-repeat bg-cover h-[100vh]  ">
                <div className="">
                    <h1 className="text-white text-[6rem] text-7xl font-abril text-center">
                        Priscila Garcia
                    </h1>
                    <h3 className="text-white text-[2.5rem] pt-20 font-abril text-center">
                        Abstract Artist
                    </h3>
                </div>
            </section>
            <SubMain />
        </>
    );
}
export default Home;
