

const Shared = ({heading,sub}) => {
    return (
        <div className="flex justify-center mt-10">
            <div className="text-center space-y-2">
                <h2 className="text-4xl font-bold">{heading}</h2>
                <p className="text-xl">{sub}</p>
            </div>
        </div>
    );
};

export default Shared;