// /////ok top////////
// import React, { useState } from "react";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import {
//   Phone,
//   Printer,
//   Mail,
//   Youtube,
//   Twitter,
//   XIcon,
//   Instagram,
// } from "lucide-react";
// import ReCAPTCHA from "react-google-recaptcha";
// import Swal from "sweetalert2";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     name: "",
//     national_id: "",
//     subject: "",
//     message: "",
//     captchaValue: "",
//   });
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         Swal.fire({
//           title: "Success",
//           text: "The form was successfully submitted!",
//           icon: "success",
//           confirmButtonText: "OK",
//           confirmButtonColor: "#8E1B3B",
//         }).then(() => {
//           // Clear the form
//           setFormData({
//             email: "",
//             name: "",
//             national_id: "",
//             subject: "",
//             message: "",
//             captchaValue: "",
//           });
//         });
//       } else {
//         Swal.fire({
//           title: "Error",
//           text: "An error occurred while submitting the form.",
//           icon: "error",
//           confirmButtonText: "OK",
//           confirmButtonColor: "#8E1B3B",
//         });
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       Swal.fire({
//         title: "Error",
//         text: "An error occurred while submitting the form.",
//         icon: "error",
//         confirmButtonText: "OK",
//         confirmButtonColor: "#8E1B3B",
//       });
//     }
//   };

//   const handleCaptchaChange = (value) => {
//     setFormData({
//       ...formData,
//       captchaValue: value,
//     });
//   };

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />
//       <div className="flex flex-col pt-24 md:flex-row bg-gray-100 dark:bg-gray-800 p-6 gap-6 font-arabic">
//         {/* Left Column */}
//         <div className="w-full md:w-1/3 bg-[#8E1B3B] text-white p-6 rounded-lg">
//           <h2 className="text-xl font-bold mb-4 text-right border-b pb-2">
//             Contact Addresses
//           </h2>
//           <div className="space-y-4">
//             <div className="flex items-center justify-end gap-2">
//               <span dir="ltr">962-786544235</span>
//               <Phone size={20} />
//             </div>
//             <div className="flex items-center justify-end gap-2">
//               <span dir="ltr">06-3866652</span>
//               <Printer size={20} />
//             </div>
//             <div className="flex items-center justify-end gap-2">
//               <span>Info@Ev-Servics.jo</span>
//               <Mail size={20} />
//             </div>
//           </div>
//           <div className="flex justify-end gap-4 mt-6">
//             <a
//               href="https://www.youtube.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Youtube
//                 size={24}
//                 className="hover:text-red-600 transition duration-300"
//               />
//             </a>
//             {/* <a
//               href="https://www.twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Twitter
//                 size={24}
//                 className="hover:text-blue-500 transition duration-300"
//               />
//             </a> */}

//             <a
//               href="https://www.x.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <XIcon
//                 size={24}
//                 className="hover:text-gray-500 transition duration-300"
//               />
//             </a>

//             <a
//               href="https://www.instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Instagram
//                 size={24}
//                 className="hover:text-pink-500 transition duration-300"
//               />
//             </a>
//           </div>
//           <div className="text-right mt-6">
//             <h3 className="font-bold">
//               The Hashemite Kingdom of Jordan, Amman
//             </h3>
//           </div>
//           <div className="mt-4 bg-white rounded-lg overflow-hidden">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33842.15205751555!2d35.83748228228823!3d31.953949790302307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f97f36d5dff%3A0x8f8a2a4c57f68c2f!2z2KfZhNmI2KfYqSDZhNmF2YjZhNmK2YXZhCDYp9mE2YbZgdi5INin2YTZhdi12KfZitin2YrYudmI2YjZhSBXZXN0IEJhbms!5e0!3m2!1sen!2sjo!4v1629308427384!5m2!1sen!2sjo"
//               width="100%"
//               height="200"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div
//           className="w-full md:w-2/3 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
//           style={{
//             backgroundImage: "url('/picture.jpg')",
//             backgroundColor: "rgba(255, 255, 255, 0.8)",
//             backgroundBlendMode: "overlay",
//             backgroundPosition: "20% 30%",
//           }}
//         >
//           {/* <h2 className="text-xl font-bold mb-6 text-right text-[#8E1B3B] dark:text-white">
//             Select the type of service to contact us
//           </h2> */}
//           <form onSubmit={handleSubmit} className="space-y-2">
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full md:w-1/2 flex flex-col items-end">
//                 <label className="mb-1 text-[#8E1B3B] dark:text-white">
//                   *Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
//                   placeholder="Email"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 flex flex-col items-end">
//                 <label className="mb-1 text-[#8E1B3B] dark:text-white">
//                   *Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
//                   placeholder="Name"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full md:w-1/2 flex flex-col items-end">
//                 <label className="mb-1 text-[#8E1B3B] dark:text-white">
//                   National ID
//                 </label>
//                 <input
//                   type="text"
//                   name="national_id"
//                   value={formData.national_id}
//                   onChange={handleInputChange}
//                   className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
//                   placeholder="National ID"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 flex flex-col items-end">
//                 <label className="mb-1 text-[#8E1B3B] dark:text-white">
//                   *Subject
//                 </label>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
//                   placeholder="Subject"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col items-end">
//               <label className=" text-[#8E1B3B] dark:text-white">
//                 *Message
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
//                 placeholder="Message"
//                 rows="5"
//               />
//             </div>
//             <ReCAPTCHA
//               sitekey="6LcMHicqAAAAAKw_uI8m3rY6n-SWwn6gg2qVGhqs"
//               onChange={handleCaptchaChange}
//               className="my-4"
//             />
//             <button
//               type="submit"
//               className="w-full bg-[#8E1B3B] text-white py-2 rounded-md hover:bg-[#7c1c2a] transition duration-300"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ContactForm;
////////////////////////////////////////////
import React, { useState } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import {
  Phone,
  Printer,
  Mail,
  Youtube,
  Twitter,
  XIcon,
  Instagram,
} from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    national_id: "",
    subject: "",
    message: "",
    captchaValue: "",
  });
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        Swal.fire({
          title: "Success",
          text: "The form was successfully submitted!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#8E1B3B",
        }).then(() => {
          // Clear the form
          setFormData({
            email: "",
            name: "",
            national_id: "",
            subject: "",
            message: "",
            captchaValue: "",
          });
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "An error occurred while submitting the form.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#8E1B3B",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while submitting the form.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#8E1B3B",
      });
    }
  };

  const handleCaptchaChange = (value) => {
    setFormData({
      ...formData,
      captchaValue: value,
    });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="bg-gray-100 dark:bg-gray-800 pt-24 px-5 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-6 font-arabic">
            {/* Left Column */}
            <div className="w-full md:w-1/3 bg-[#8E1B3B] text-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-right border-b pb-2">
                Contact Addresses
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-end gap-2">
                  <span dir="ltr">962-786544235</span>
                  <Phone size={20} />
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span dir="ltr">06-3866652</span>
                  <Printer size={20} />
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span>Info@Ev-Servics.jo</span>
                  <Mail size={20} />
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube
                    size={24}
                    className="hover:text-red-600 transition duration-300"
                  />
                </a>
                <a
                  href="https://www.x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon
                    size={24}
                    className="hover:text-gray-500 transition duration-300"
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    size={24}
                    className="hover:text-pink-500 transition duration-300"
                  />
                </a>
              </div>
              <div className="text-right mt-6">
                <h3 className="font-bold">
                  The Hashemite Kingdom of Jordan, Amman
                </h3>
              </div>
              <div className="mt-4 bg-white rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33842.15205751555!2d35.83748228228823!3d31.953949790302307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f97f36d5dff%3A0x8f8a2a4c57f68c2f!2z2KfZhNmI2KfYqSDZhNmF2YjZhNmK2YXZhCDYp9mE2YbZgdi5INin2YTZhdi12KfZitin2YrYudmI2YjZhSBXZXN0IEJhbms!5e0!3m2!1sen!2sjo!4v1629308427384!5m2!1sen!2sjo"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="w-full md:w-2/3 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              style={{
                backgroundImage: "url('/picture.jpg')",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backgroundBlendMode: "overlay",
                backgroundPosition: "20% 30%",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2 flex flex-col items-end">
                    <label className="mb-1 text-[#8E1B3B] dark:text-white">
                      *Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
                      placeholder="Email"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col items-end">
                    <label className="mb-1 text-[#8E1B3B] dark:text-white">
                      *Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2 flex flex-col items-end">
                    <label className="mb-1 text-[#8E1B3B] dark:text-white">
                      National ID
                    </label>
                    <input
                      type="text"
                      name="national_id"
                      value={formData.national_id}
                      onChange={handleInputChange}
                      className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
                      placeholder="National ID"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col items-end">
                    <label className="mb-1 text-[#8E1B3B] dark:text-white">
                      *Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <label className=" text-[#8E1B3B] dark:text-white">
                    *Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2 text-right bg-gray-50 dark:bg-gray-600 dark:text-white"
                    placeholder="Message"
                    rows="5"
                  />
                </div>
                <ReCAPTCHA
                  sitekey="6LcMHicqAAAAAKw_uI8m3rY6n-SWwn6gg2qVGhqs"
                  onChange={handleCaptchaChange}
                  className="my-4"
                />
                <button
                  type="submit"
                  className="w-full bg-[#8E1B3B] text-white py-2 rounded-md hover:bg-[#7c1c2a] transition duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
