import ArtExpo from "../Components/ArtExpo";
function Gallery() {
    const bgColor = {
        background: "#F9F5F6",
    };
    return (
        <div style={bgColor} className="">
            <h2 className="bg-[#7880B5] h-20 text-center flex items-center justify-center text-[2rem] font-bold text-white">
                Gallery
            </h2>
            <ArtExpo />
        </div>
    );
}
export default Gallery;
