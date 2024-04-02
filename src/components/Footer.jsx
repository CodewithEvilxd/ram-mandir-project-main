import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-orange-500 text-white">
        <div className="mx-auto max-w-screen-xl px-1 pb-2 pt-8 sm:px-6 lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <p className="mt-4 text-center lg:text-left lg:text-lg">
              This web app is created for informational purposes and aims to foster a community of all Ram Bhakts, promoting unity and shared devotion.
              </p>
            </div>

            <div className="grid grid-cols-3  gap-4 md:gap-8 text-center  lg:text-left">
              <div>
                <strong className="font-semibold text-lg">
                  {" "}
                  Quick Links{" "}
                </strong>

                <ul className="mt-6 space-y-1">
                <li>
                    <Link
                      className=" transition "
                      to="/"
                    >
                      {" "}
                      Home{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className=" transition "
                      to="/about"
                    >
                      {" "}
                      About Darshan{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className=" transition "
                      to="/darshan"
                    >
                      Darshan Info
                    </Link>
                  </li>

                  <li>
                    <Link
                      className=" transition "
                      to="/community"
                    >
                      Community
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <strong className="font-semibold text-lg">
                  {" "}
                  Official{" "}
                </strong>

                <ul className="mt-6 space-y-1">
                  <li>
                    <Link
                      className=" transition "
                      to="https://srjbtkshetra.org/"
                      target="_blank"
                    >
                      {" "}
                      Donate{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className=" transition "
                      to="https://srjbtkshetra.org/accommodation/"
                      target="_blank"
                    >
                      {" "}
                      Accomodation{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className=" transition "
                      to="https://srjbtkshetra.org/how-to-reach/"
                      target="_blank"
                    >
                      {" "}
                      How to Reach{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <strong className="font-semibold text-lg">
                  {" "}
                  Support{" "}
                </strong>

                <ul className="mt-6 space-y-1">
                  <li>
                    <Link
                      className=" transition "
                      to="https://github.com/codewithEvilxd/ram-mandir-"
                      target="_blank"
                    >
                      {" "}
                      Contribute{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className=" transition "
                      to="#"
                      target="_blank"
                    >
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-8">
            <p className="text-center text-xs/relaxed">
              Developed with ❤ by
              <br />
              <ul className="flex justify-center">
                <li>
                <Link
                to="#"
                className="m-1 underline transition"
                target="_blank"
              >
                EVILXD
              </Link>
                </li>
                <li>
                <Link
                to="#"
                className="m-1 underline transition"
                target="_blank"
              >
                JAYANT AKASH SINGH
              </Link>
                </li>
                <li>
                <Link
                to="#"
                className="m-1 underline transition"
                target="_blank"
              >
                #
              </Link>
                </li>
              
              </ul>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
