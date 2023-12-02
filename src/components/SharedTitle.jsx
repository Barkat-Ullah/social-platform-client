

const SharedTitle = ({heading, subHeading}) => {
    return (
        <div>
              <div className="text-center mx-auto md:w-4/12">
            
            <h2 className="sm:text-3xl bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500 text-2xl font-medium my-4 text-gray-900 uppercase" >{heading}</h2>
            
        </div>
        </div>
    );
};

export default SharedTitle;