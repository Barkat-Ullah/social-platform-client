

const SharedTitle = ({heading, subHeading}) => {
    return (
        <div>
              <div className="text-center mx-auto md:w-4/12">
            
            <h2 className="text-4xl text-slate-600 uppercase ">{heading}</h2>
            {/* <p className="text-yellow-600 mb-3">... {subHeading} ...</p> */}
        </div>
        </div>
    );
};

export default SharedTitle;