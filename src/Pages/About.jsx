import art from "../assets/4.png";
function About() {
    return (
        <div className=" flex flex-col bg-[#f9f5f6]">
            <h1 className="bg-[#7880B5] h-20 flex items-center justify-center text-[2rem] font-bold text-white">
                Priscila Garcia
            </h1>
            <div className="px-5 my-20">
                <img
                    className=" shadow-xl h-[30rem] w-[25rem] object-cover box-border border-8 border-[#E2B34DB2]"
                    src={art}
                    alt="art"
                />
                <p className="pt-10 text-[#354259] text-xl mx-3 text-left">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s,
                </p>
            </div>
            <div className="mb-12">
                <h2 className="text-[2rem] text-[#e39e0ad8] ml-3 mb-5 underline">
                    Coming expositions
                </h2>
                <ul className="ml-4 px-3 text-[#354259]">
                    <li className="my-4 text-xl">placeX - date - Y</li>
                    <li className="my-4 text-xl">placeX - date - Y</li>
                    <li className="my-4 text-xl">placeX - date - Y</li>
                </ul>
            </div>
        </div>
    );
}
export default About;
