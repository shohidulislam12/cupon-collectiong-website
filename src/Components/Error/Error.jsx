import errorImg from "../../assets/download.jpg"
const Error = () => {
    return (
        <div>
            <img className="w-1/2 mx-auto" src={errorImg} alt="" />
            <h2 className="text-3xl text-red-600 ">These page not found </h2>
        </div>
    );
};

export default Error;