import { footer } from "../../constants";
import Container from "../../ui/Container";
import Credits from "./Credits";

const Footer = () => {
  return (
    <footer className="bg-slate-600 p-5  dark:bg-slate-800 md:p-16  ">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          {/* logo and about */}
          <div className="flex-1 ">
            <h2 className="text-2xl font-bold text-gray-200 ">
              {footer.title}
            </h2>
            <p className="mt-2 text-gray-200 ">{footer.slogan}</p>
            <p className="mt-4 text-gray-300">{footer.description}</p>
          </div>
          {/* contact info */}
          <div className="flex-1 ">
            <h3 className="mb-4 text-xl font-semibold text-gray-200">
              Contact US
            </h3>
            <p className="text-gray-300"> 123, Street Main</p>
            <p className="text-gray-300">Abc city,ac 12345</p>
            <p className="text-gray-300">Email : EV Service@Ev.com</p>
            <p className="text-gray-300">Phone(962)78-654-423-5</p>
          </div>
          {/* NewsLettersubscription */}
          <div className="flex-1 ">
            <h3 className="mb-4 text-xl font-semibold text-gray-200">
              Subscribe to our NewsLetter
            </h3>
            <form action="#" className="flex flex-col space-y-3 ">
              <input
                type="email"
                placeholder="Enter your Email"
                className="rounded bg-slate-300p-2 text-gray-800 placeholder:text-gray-500 focus:outline-none"
              />
              <button className="rounded bg-blue-600 p-2 text-white hover:bg-blue-700 ">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <Credits />
      </Container>
    </footer>
  );
};

export default Footer;
