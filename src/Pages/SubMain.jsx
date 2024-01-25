import art from "../assets/5.png";
function SubMain() {
    const subMain = {
        background:
            "linear-gradient(180deg, rgba(69, 0, 80, 0.66) 0%, rgba(226, 85, 97, 0.61) 87.47%)",
    };
    return (
        <>
            <section
                style={subMain}
                className="h-[100vh] flex flex-col justify-center items-center pb-44 "
            >
                <div
                    className="  px-7 mb-10 mt-48
             text-center text-lg"
                >
                    <p className="text-white ">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className="mt-5 mb-10">
                    <button className="shadow-lg btn border-none bg-[#7880B5] btn-lg w-[12rem] text-white text-lg text-[1.6rem]">
                        Gallery
                    </button>
                </div>

                <img
                    className="h-[30rem] w-[25rem] object-cover box-border border-8 border-[#E2B34DB2]"
                    src={art}
                    alt="art"
                />
            </section>
        </>
    );
}
export default SubMain;
