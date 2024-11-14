// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const ShopOwnerRegistration = () => {
//   const [formData, setFormData] = useState({
//     ownerName: "",
//     shopPhone: "",
//     shopLocation: "",
//     email: "",
//     password: "",
//     licenseCertificate: null,
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       licenseCertificate: e.target.files[0],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const data = new FormData();
//     for (const key in formData) {
//       data.append(key, formData[key]);
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/shop-owner/register",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Registration successful:", response.data);
//       navigate("/registration-success"); // Redirect to a success page
//     } catch (error) {
//       console.error("Error during registration:", error);
//       setError(
//         error.response?.data?.message || "An error occurred during registration"
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-slate-800">
//           Shop Owner Registration
//         </h2>
//         {error && <div className="text-red-500 mb-4">{error}</div>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label
//               htmlFor="ownerName"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Owner Name
//             </label>
//             <input
//               type="text"
//               id="ownerName"
//               name="ownerName"
//               value={formData.ownerName}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="shopPhone"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Shop Phone
//             </label>
//             <input
//               type="tel"
//               id="shopPhone"
//               name="shopPhone"
//               value={formData.shopPhone}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="shopLocation"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Shop Location
//             </label>
//             <input
//               type="text"
//               id="shopLocation"
//               name="shopLocation"
//               value={formData.shopLocation}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="licenseCertificate"
//               className="block text-sm font-medium text-gray-700"
//             >
//               License Certificate
//             </label>
//             <input
//               type="file"
//               id="licenseCertificate"
//               name="licenseCertificate"
//               onChange={handleFileChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ShopOwnerRegistration;
/////////////
//////////////
// /////////
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MergedRegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     // AdminMaintenanceCenterForm fields
//     name: "",
//     address: "",
//     latitude: "",
//     longitude: "",
//     phone: "",
//     website: "",
//     services: "",
//     specializations: "",
//     openingHours: "",
//     // ShopOwnerRegistration fields
//     ownerName: "",
//     shopPhone: "",
//     shopLocation: "",
//     email: "",
//     password: "",
//     licenseCertificate: null,
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       licenseCertificate: e.target.files[0],
//     }));
//   };

//   const handleAddressChange = async (e) => {
//     const address = e.target.value;
//     setFormData((prevState) => ({ ...prevState, address }));

//     if (address) {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(
//           `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//             address
//           )}&key=YOUR_API_KEY_HERE`
//         );

//         if (response.data.results && response.data.results.length > 0) {
//           const { lat, lng } = response.data.results[0].geometry.location;
//           setFormData((prevState) => ({
//             ...prevState,
//             latitude: lat.toString(),
//             longitude: lng.toString(),
//           }));
//         }
//       } catch (error) {
//         console.error("Error geocoding address:", error);
//         setError("Failed to geocode address");
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const handleGetCurrentLocation = () => {
//     if ("geolocation" in navigator) {
//       setIsLoading(true);
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;
//           setFormData((prevState) => ({
//             ...prevState,
//             latitude: latitude.toString(),
//             longitude: longitude.toString(),
//           }));

//           try {
//             const response = await axios.get(
//               `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY_HERE`
//             );

//             if (response.data.results && response.data.results.length > 0) {
//               setFormData((prevState) => ({
//                 ...prevState,
//                 address: response.data.results[0].formatted_address,
//               }));
//             }
//           } catch (error) {
//             console.error("Error reverse geocoding:", error);
//             setError("Failed to get address for current location");
//           } finally {
//             setIsLoading(false);
//           }
//         },
//         (error) => {
//           console.error("Error getting current location:", error);
//           setError("Failed to get current location");
//           setIsLoading(false);
//         }
//       );
//     } else {
//       setError("Geolocation is not supported by your browser");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setIsLoading(true);

//     const data = new FormData();
//     for (const key in formData) {
//       if (key === "services" || key === "specializations") {
//         data.append(
//           key,
//           JSON.stringify(formData[key].split(",").map((item) => item.trim()))
//         );
//       } else {
//         data.append(key, formData[key]);
//       }
//     }

//     try {
//       // Assuming we're combining both endpoints into one
//       const response = await axios.post(
//         "http://localhost:5000/api/shop-owner/register",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Registration successful:", response.data);
//       alert("Registration successful!");
//       navigate("/registration-success");
//     } catch (error) {
//       console.error("Error during registration:", error);
//       setError(
//         error.response?.data?.message || "An error occurred during registration"
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl">
//         <h2 className="text-3xl font-bold mb-6 text-slate-800">
//           Maintenance Center and Shop Owner Registration
//         </h2>
//         {error && <div className="text-red-500 mb-4">{error}</div>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* AdminMaintenanceCenterForm fields */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Name:
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Address:
//             </label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleAddressChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div className="flex space-x-4">
//             <div className="w-1/2">
//               <label className="block text-sm font-medium text-gray-700">
//                 Latitude:
//               </label>
//               <input
//                 type="number"
//                 name="latitude"
//                 value={formData.latitude}
//                 onChange={handleChange}
//                 required
//                 step="any"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div className="w-1/2">
//               <label className="block text-sm font-medium text-gray-700">
//                 Longitude:
//               </label>
//               <input
//                 type="number"
//                 name="longitude"
//                 value={formData.longitude}
//                 onChange={handleChange}
//                 required
//                 step="any"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </div>
//           <button
//             type="button"
//             onClick={handleGetCurrentLocation}
//             className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//           >
//             Get Current Location
//           </button>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Phone:
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Website:
//             </label>
//             <input
//               type="url"
//               name="website"
//               value={formData.website}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Services (comma-separated):
//             </label>
//             <input
//               type="text"
//               name="services"
//               value={formData.services}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Specializations (comma-separated):
//             </label>
//             <input
//               type="text"
//               name="specializations"
//               value={formData.specializations}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Opening Hours:
//             </label>
//             <input
//               type="text"
//               name="openingHours"
//               value={formData.openingHours}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {/* ShopOwnerRegistration fields */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Owner Name:
//             </label>
//             <input
//               type="text"
//               name="ownerName"
//               value={formData.ownerName}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Shop Phone:
//             </label>
//             <input
//               type="tel"
//               name="shopPhone"
//               value={formData.shopPhone}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Shop Location:
//             </label>
//             <input
//               type="text"
//               name="shopLocation"
//               value={formData.shopLocation}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email:
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Password:
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               License Certificate:
//             </label>
//             <input
//               type="file"
//               name="licenseCertificate"
//               onChange={handleFileChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
//           >
//             {isLoading ? "Submitting..." : "Register"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MergedRegistrationForm;
/////////ok top////

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MergedRegistrationForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     latitude: "",
//     longitude: "",
//     phone: "",
//     website: "",
//     services: "",
//     specializations: "",
//     openingHours: "",
//     ownerName: "",
//     shopPhone: "",
//     shopLocation: "",
//     email: "",
//     password: "",
//     licenseCertificate: null,
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       licenseCertificate: e.target.files[0],
//     }));
//   };

//   const handleAddressChange = async (e) => {
//     const address = e.target.value;
//     setFormData((prevState) => ({ ...prevState, address }));

//     if (address) {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(
//           `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//             address
//           )}&key=YOUR_API_KEY_HERE`
//         );

//         if (response.data.results && response.data.results.length > 0) {
//           const { lat, lng } = response.data.results[0].geometry.location;
//           setFormData((prevState) => ({
//             ...prevState,
//             latitude: lat.toString(),
//             longitude: lng.toString(),
//           }));
//         }
//       } catch (error) {
//         console.error("Error geocoding address:", error);
//         setError("Failed to geocode address");
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const handleGetCurrentLocation = () => {
//     if ("geolocation" in navigator) {
//       setIsLoading(true);
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;
//           setFormData((prevState) => ({
//             ...prevState,
//             latitude: latitude.toString(),
//             longitude: longitude.toString(),
//           }));

//           try {
//             const response = await axios.get(
//               `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY_HERE`
//             );

//             if (response.data.results && response.data.results.length > 0) {
//               setFormData((prevState) => ({
//                 ...prevState,
//                 address: response.data.results[0].formatted_address,
//               }));
//             }
//           } catch (error) {
//             console.error("Error reverse geocoding:", error);
//             setError("Failed to get address for current location");
//           } finally {
//             setIsLoading(false);
//           }
//         },
//         (error) => {
//           console.error("Error getting current location:", error);
//           setError("Failed to get current location");
//           setIsLoading(false);
//         }
//       );
//     } else {
//       setError("Geolocation is not supported by your browser");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setIsLoading(true);

//     const data = new FormData();
//     for (const key in formData) {
//       if (key === "services" || key === "specializations") {
//         data.append(
//           key,
//           JSON.stringify(formData[key].split(",").map((item) => item.trim()))
//         );
//       } else {
//         data.append(key, formData[key]);
//       }
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/shop-owner/register",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Registration successful:", response.data);
//       alert("Registration successful!");
//       navigate("/registration-success");
//     } catch (error) {
//       console.error("Error during registration:", error);
//       setError(
//         error.response?.data?.message || "An error occurred during registration"
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleNext = () => {
//     setCurrentStep((prev) => prev + 1);
//   };

//   const handlePrevious = () => {
//     setCurrentStep((prev) => prev - 1);
//   };

//   const renderStepContent = () => {
//     switch (currentStep) {
//       case 1:
//         return (
//           <>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Name:
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Address:
//               </label>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleAddressChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div className="flex space-x-4">
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Latitude:
//                 </label>
//                 <input
//                   type="number"
//                   name="latitude"
//                   value={formData.latitude}
//                   onChange={handleChange}
//                   required
//                   step="any"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Longitude:
//                 </label>
//                 <input
//                   type="number"
//                   name="longitude"
//                   value={formData.longitude}
//                   onChange={handleChange}
//                   required
//                   step="any"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>
//             <button
//               type="button"
//               onClick={handleGetCurrentLocation}
//               className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//             >
//               Get Current Location
//             </button>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Phone:
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Website:
//               </label>
//               <input
//                 type="url"
//                 name="website"
//                 value={formData.website}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Services (comma-separated):
//               </label>
//               <input
//                 type="text"
//                 name="services"
//                 value={formData.services}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Specializations (comma-separated):
//               </label>
//               <input
//                 type="text"
//                 name="specializations"
//                 value={formData.specializations}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Opening Hours:
//               </label>
//               <input
//                 type="text"
//                 name="openingHours"
//                 value={formData.openingHours}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Owner Name:
//               </label>
//               <input
//                 type="text"
//                 name="ownerName"
//                 value={formData.ownerName}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Shop Phone:
//               </label>
//               <input
//                 type="tel"
//                 name="shopPhone"
//                 value={formData.shopPhone}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Shop Location:
//               </label>
//               <input
//                 type="text"
//                 name="shopLocation"
//                 value={formData.shopLocation}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Password:
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 License Certificate:
//               </label>
//               <input
//                 type="file"
//                 name="licenseCertificate"
//                 onChange={handleFileChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl">
//         <h2 className="text-3xl font-bold mb-6 text-slate-800">
//           Maintenance Center and Shop Owner Registration
//         </h2>
//         <div className="mb-8">
//           <div className="flex justify-between items-center">
//             {[1, 2, 3].map((step) => (
//               <div
//                 key={step}
//                 className={`w-1/3 text-center ${
//                   currentStep === step
//                     ? "text-blue-600 font-semibold"
//                     : "text-gray-400"
//                 }`}
//               >
//                 Step {step}
//               </div>
//             ))}
//           </div>
//           <div className="flex h-2 mb-4">
//             {[1, 2, 3].map((step) => (
//               <div
//                 key={step}
//                 className={`w-1/3 ${
//                   step <= currentStep ? "bg-blue-600" : "bg-gray-200"
//                 }`}
//               ></div>
//             ))}
//           </div>
//         </div>
//         {error && <div className="text-red-500 mb-4">{error}</div>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {renderStepContent()}
//           <div className="flex justify-between mt-8">
//             {currentStep > 1 && (
//               <button
//                 type="button"
//                 onClick={handlePrevious}
//                 className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray
//                 ///////////

//                 -300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//               >
//                 Previous
//               </button>
//             )}
//             {currentStep < 3 ? (
//               <button
//                 type="button"
//                 onClick={handleNext}
//                 className="ml-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Next
//               </button>
//             ) : (
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="ml-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
//               >
//                 {isLoading ? "Submitting..." : "Register"}
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MergedRegistrationForm;
////////
////
// //////////////
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Car, Settings, FileCheck } from "lucide-react";

// const MergedRegistrationForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     latitude: "",
//     longitude: "",
//     phone: "",
//     website: "",
//     services: "",
//     specializations: "",
//     openingHours: "",
//     ownerName: "",
//     shopPhone: "",
//     shopLocation: "",
//     email: "",
//     password: "",
//     licenseCertificate: null,
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const stepIcons = {
//     1: Car,
//     2: Settings,
//     3: FileCheck,
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       licenseCertificate: e.target.files[0],
//     }));
//   };

//   const handleAddressChange = async (e) => {
//     const address = e.target.value;
//     setFormData((prevState) => ({ ...prevState, address }));

//     if (address) {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(
//           `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//             address
//           )}&key=YOUR_API_KEY_HERE`
//         );

//         if (response.data.results && response.data.results.length > 0) {
//           const { lat, lng } = response.data.results[0].geometry.location;
//           setFormData((prevState) => ({
//             ...prevState,
//             latitude: lat.toString(),
//             longitude: lng.toString(),
//           }));
//         }
//       } catch (error) {
//         console.error("Error geocoding address:", error);
//         setError("Failed to geocode address");
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const handleGetCurrentLocation = () => {
//     if ("geolocation" in navigator) {
//       setIsLoading(true);
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;
//           setFormData((prevState) => ({
//             ...prevState,
//             latitude: latitude.toString(),
//             longitude: longitude.toString(),
//           }));

//           try {
//             const response = await axios.get(
//               `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY_HERE`
//             );

//             if (response.data.results && response.data.results.length > 0) {
//               setFormData((prevState) => ({
//                 ...prevState,
//                 address: response.data.results[0].formatted_address,
//               }));
//             }
//           } catch (error) {
//             console.error("Error reverse geocoding:", error);
//             setError("Failed to get address for current location");
//           } finally {
//             setIsLoading(false);
//           }
//         },
//         (error) => {
//           console.error("Error getting current location:", error);
//           setError("Failed to get current location");
//           setIsLoading(false);
//         }
//       );
//     } else {
//       setError("Geolocation is not supported by your browser");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setIsLoading(true);

//     const data = new FormData();
//     for (const key in formData) {
//       if (key === "services" || key === "specializations") {
//         data.append(
//           key,
//           JSON.stringify(formData[key].split(",").map((item) => item.trim()))
//         );
//       } else {
//         data.append(key, formData[key]);
//       }
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/shop-owner/register",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Registration successful:", response.data);
//       alert("Registration successful!");
//       navigate("/registration-success");
//     } catch (error) {
//       console.error("Error during registration:", error);
//       setError(
//         error.response?.data?.message || "An error occurred during registration"
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleNext = () => {
//     setCurrentStep((prev) => prev + 1);
//   };

//   const handlePrevious = () => {
//     setCurrentStep((prev) => prev - 1);
//   };

//   const ProgressIcon = ({ step, isActive }) => {
//     const Icon = stepIcons[step];
//     return (
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{
//           scale: isActive ? 1.2 : 1,
//           opacity: 1,
//           color: isActive ? "#2563EB" : "#9CA3AF",
//         }}
//         transition={{ duration: 0.3 }}
//         className="relative"
//       >
//         <Icon size={24} />
//         {isActive && (
//           <motion.div
//             className="absolute -inset-2 rounded-full border-2 border-blue-500"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           />
//         )}
//       </motion.div>
//     );
//   };

//   const renderProgressBar = () => (
//     <div className="mb-8">
//       <div className="flex justify-between items-center mb-4">
//         {[1, 2, 3].map((step) => (
//           <div key={step} className="flex flex-col items-center">
//             <ProgressIcon step={step} isActive={currentStep === step} />
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{
//                 opacity: 1,
//                 color: currentStep === step ? "#2563EB" : "#9CA3AF",
//               }}
//               className="mt-2 text-sm font-medium"
//             >
//               Step {step}
//             </motion.span>
//           </div>
//         ))}
//       </div>
//       <div className="flex h-2 mb-4 relative">
//         <motion.div
//           className="absolute top-0 left-0 h-full bg-blue-600"
//           initial={{ width: "0%" }}
//           animate={{ width: `${((currentStep - 1) / 2) * 100}%` }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//         />
//         <div className="w-full bg-gray-200" />
//       </div>
//     </div>
//   );

//   const renderStepContent = () => {
//     // [Previous step content code remains the same...]
//     switch (currentStep) {
//       case 1:
//         return (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Name:
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Address:
//               </label>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleAddressChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div className="flex space-x-4">
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Latitude:
//                 </label>
//                 <input
//                   type="number"
//                   name="latitude"
//                   value={formData.latitude}
//                   onChange={handleChange}
//                   required
//                   step="any"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Longitude:
//                 </label>
//                 <input
//                   type="number"
//                   name="longitude"
//                   value={formData.longitude}
//                   onChange={handleChange}
//                   required
//                   step="any"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>
//             <button
//               type="button"
//               onClick={handleGetCurrentLocation}
//               className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//             >
//               Get Current Location
//             </button>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Phone:
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Website:
//               </label>
//               <input
//                 type="url"
//                 name="website"
//                 value={formData.website}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </motion.div>
//         );
//       case 2:
//         return (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Services (comma-separated):
//               </label>
//               <input
//                 type="text"
//                 name="services"
//                 value={formData.services}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Specializations (comma-separated):
//               </label>
//               <input
//                 type="text"
//                 name="specializations"
//                 value={formData.specializations}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Opening Hours:
//               </label>
//               <input
//                 type="text"
//                 name="openingHours"
//                 value={formData.openingHours}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Owner Name:
//               </label>
//               <input
//                 type="text"
//                 name="ownerName"
//                 value={formData.ownerName}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Shop Phone:
//               </label>
//               <input
//                 type="tel"
//                 name="shopPhone"
//                 value={formData.shopPhone}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </motion.div>
//         );
//       case 3:
//         return (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Shop Location:
//               </label>
//               <input
//                 type="text"
//                 name="shopLocation"
//                 value={formData.shopLocation}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-
//                 500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Password:
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 License Certificate:
//               </label>
//               <input
//                 type="file"
//                 name="licenseCertificate"
//                 onChange={handleFileChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </motion.div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl">
//         <h2 className="text-3xl font-bold mb-6 text-slate-800">
//           Maintenance Center and Shop Owner Registration
//         </h2>
//         {renderProgressBar()}
//         {error && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-red-500 mb-4"
//           >
//             {error}
//           </motion.div>
//         )}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <AnimatePresence mode="wait">{renderStepContent()}</AnimatePresence>
//           <motion.div
//             className="flex justify-between mt-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             {currentStep > 1 && (
//               <motion.button
//                 type="button"
//                 onClick={handlePrevious}
//                 className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 Previous
//               </motion.button>
//             )}
//             {currentStep < 3 ? (
//               <motion.button
//                 type="button"
//                 onClick={handleNext}
//                 className="ml-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 Next
//               </motion.button>
//             ) : (
//               <motion.button
//                 type="submit"
//                 disabled={isLoading}
//                 className="ml-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
//                 whileHover={{ scale: isLoading ? 1 : 1.02 }}
//                 whileTap={{ scale: isLoading ? 1 : 0.98 }}
//               >
//                 {isLoading ? (
//                   <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{
//                       duration: 1,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                     className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                   />
//                 ) : (
//                   "Register"
//                 )}
//               </motion.button>
//             )}
//           </motion.div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MergedRegistrationForm;
////////////////////////////////////////////////////////////////////////////////
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Settings, FileCheck } from "lucide-react";

const MergedRegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    latitude: "",
    longitude: "",
    phone: "",
    website: "",
    services: "",
    specializations: "",
    openingTime: "09:00",
    closingTime: "17:00",
    ownerName: "",
    shopPhone: "",
    shopLocation: "",
    email: "",
    password: "",
    licenseCertificate: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const stepIcons = {
    1: Car,
    2: Settings,
    3: FileCheck,
  };

  const timeOptions = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 30) {
      const hour = i.toString().padStart(2, "0");
      const minute = j.toString().padStart(2, "0");
      timeOptions.push(`${hour}:${minute}`);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      licenseCertificate: e.target.files[0],
    }));
  };

  const handleAddressChange = async (e) => {
    const address = e.target.value;
    setFormData((prevState) => ({ ...prevState, address }));

    if (address) {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
          )}&key=YOUR_API_KEY_HERE`
        );

        if (response.data.results && response.data.results.length > 0) {
          const { lat, lng } = response.data.results[0].geometry.location;
          setFormData((prevState) => ({
            ...prevState,
            latitude: lat.toString(),
            longitude: lng.toString(),
          }));
        }
      } catch (error) {
        console.error("Error geocoding address:", error);
        setError("Failed to geocode address");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleGetCurrentLocation = () => {
    if ("geolocation" in navigator) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setFormData((prevState) => ({
            ...prevState,
            latitude: latitude.toString(),
            longitude: longitude.toString(),
          }));

          try {
            const response = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY_HERE`
            );

            if (response.data.results && response.data.results.length > 0) {
              setFormData((prevState) => ({
                ...prevState,
                address: response.data.results[0].formatted_address,
              }));
            }
          } catch (error) {
            console.error("Error reverse geocoding:", error);
            setError("Failed to get address for current location");
          } finally {
            setIsLoading(false);
          }
        },
        (error) => {
          console.error("Error getting current location:", error);
          setError("Failed to get current location");
          setIsLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const data = new FormData();
    for (const key in formData) {
      if (key === "services" || key === "specializations") {
        data.append(
          key,
          JSON.stringify(formData[key].split(",").map((item) => item.trim()))
        );
      } else if (key === "openingTime" || key === "closingTime") {
        // Combine opening hours into one field
        if (key === "openingTime") {
          data.append(
            "openingHours",
            `${formData.openingTime}-${formData.closingTime}`
          );
        }
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/shop-owner/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Registration successful:", response.data);
      alert("Registration successful!");
      navigate("/registration-success");
    } catch (error) {
      console.error("Error during registration:", error);
      setError(
        error.response?.data?.message || "An error occurred during registration"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const ProgressIcon = ({ step, isActive }) => {
    const Icon = stepIcons[step];
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: isActive ? 1.2 : 1,
          opacity: 1,
          color: isActive ? "#2563EB" : "#9CA3AF",
        }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <Icon size={24} />
        {isActive && (
          <motion.div
            className="absolute -inset-2 rounded-full border-2 border-blue-500"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    );
  };

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex flex-col items-center">
            <ProgressIcon step={step} isActive={currentStep === step} />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                color: currentStep === step ? "#2563EB" : "#9CA3AF",
              }}
              className="mt-2 text-sm font-medium"
            >
              Step {step}
            </motion.span>
          </div>
        ))}
      </div>
      <div className="flex h-2 mb-4 relative">
        <motion.div
          className="absolute top-0 left-0 h-full bg-blue-600"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentStep - 1) / 2) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <div className="w-full bg-gray-200" />
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address:
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleAddressChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  Latitude:
                </label>
                <input
                  type="number"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleChange}
                  required
                  step="any"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  Longitude:
                </label>
                <input
                  type="number"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleChange}
                  required
                  step="any"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handleGetCurrentLocation}
              className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Get Current Location
            </button>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone:
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Website:
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Services (comma-separated):
              </label>
              <input
                type="text"
                name="services"
                value={formData.services}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Specializations (comma-separated):
              </label>
              <input
                type="text"
                name="specializations"
                value={formData.specializations}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Opening Time:
                </label>
                <select
                  name="openingTime"
                  value={formData.openingTime}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  {timeOptions.map((time) => (
                    <option key={`opening-${time}`} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Closing Time:
                </label>
                <select
                  name="closingTime"
                  value={formData.closingTime}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  {timeOptions.map((time) => (
                    <option key={`closing-${time}`} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Owner Name:
              </label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Shop Phone:
              </label>
              <input
                type="tel"
                name="shopPhone"
                value={formData.shopPhone}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Shop Location:
              </label>
              <input
                type="text"
                name="shopLocation"
                value={formData.shopLocation}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                License Certificate:
              </label>
              <input
                type="file"
                name="licenseCertificate"
                onChange={handleFileChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-slate-800">
          Maintenance Center and Shop Owner Registration
        </h2>
        {renderProgressBar()}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 mb-4"
          >
            {error}
          </motion.div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <AnimatePresence mode="wait">{renderStepContent()}</AnimatePresence>
          <motion.div
            className="flex justify-between mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {currentStep > 1 && (
              <motion.button
                type="button"
                onClick={handlePrevious}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Previous
              </motion.button>
            )}
            {currentStep < 3 ? (
              <motion.button
                type="button"
                onClick={handleNext}
                className="ml-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Next
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                disabled={isLoading}
                className="ml-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  "Register"
                )}
              </motion.button>
            )}
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default MergedRegistrationForm;
