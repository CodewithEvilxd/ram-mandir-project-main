const Timeline = () => (
  <>
    <body className="bg-white border border-b py-20">
      <div className="p-4 mt-2">
        <h1 className="font-bold  text-5xl text-orange-500 text-center mb-6">
          Important Dates
        </h1>
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow text-center">
                  <i className="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div className="border-2 border-black bg-orange-400 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1">
                  Pran-Pratishtha (consecration) ceremony begins
                </h3>
                <p className="leading-tight text-justify w-full">
                  January 16, 2024
                </p>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow text-center">
                  <i className="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div className="border-2 border-black bg-white text-black col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1">
                  Inauguration ceremony and installation of Lord Ram's idol
                </h3>
                <p className="leading-tight text-justify">January 22, 2024</p>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow text-center">
                  <i className="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div className="border-2 border-black bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1">
                  Mandala Utsava - A period of special pujas and celebrations
                </h3>
                <p className="leading-tight text-justify">
                  January 23,2024 - March 10, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </>
);

export default Timeline;
