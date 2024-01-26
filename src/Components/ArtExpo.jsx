import art from "../assets/9.png";
import Btn from "./Btn";
function ArtExpo() {
    return (
        <div className="flex flex-col items-center mx-5  h-[100vh] pt-20">
            <img
                className=" shadow-xl h-[30rem] w-[25rem] object-cover box-border border-8 border-[#E2B34DB2]"
                src={art}
                alt="art"
            />
            <p className="pt-10 text-[#354259] mx-3 text-left text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s,
            </p>
            <div className="pt-12">
                <Btn />
            </div>
        </div>
    );
}
export default ArtExpo;
