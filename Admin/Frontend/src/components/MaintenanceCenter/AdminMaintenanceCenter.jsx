// import React, { useState } from "react";
// import axios from "axios";

// const AdminMaintenanceCenterForm = () => {
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
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/MaintenanceCenter/maintenance-centers",
//         {
//           ...formData,
//           services: formData.services
//             .split(",")
//             .map((service) => service.trim()),
//           specializations: formData.specializations
//             .split(",")
//             .map((spec) => spec.trim()),
//         }
//       );
//       alert("Maintenance center added successfully!");
//       setFormData({
//         name: "",
//         address: "",
//         latitude: "",
//         longitude: "",
//         phone: "",
//         website: "",
//         services: "",
//         specializations: "",
//         openingHours: "",
//       });
//     } catch (error) {
//       alert("Error adding maintenance center: " + error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
//       <h2 className="text-2xl font-bold mb-4">Add Maintenance Center</h2>
//       <div className="mb-4">
//         <label className="block mb-2">Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block mb-2">Address:</label>
//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <div className="mb-4 flex space-x-4">
//         <div className="w-1/2">
//           <label className="block mb-2">Latitude:</label>
//           <input
//             type="number"
//             name="latitude"
//             value={formData.latitude}
//             onChange={handleChange}
//             required
//             step="any"
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div className="w-1/2">
//           <label className="block mb-2">Longitude:</label>
//           <input
//             type="number"
//             name="longitude"
//             value={formData.longitude}
//             onChange={handleChange}
//             required
//             step="any"
//             className="w-full p-2 border rounded"
//           />
//         </div>
//       </div>
//   <div className="mb-4">
//     <label className="block mb-2">Phone:</label>
//     <input
//       type="tel"
//       name="phone"
//       value={formData.phone}
//       onChange={handleChange}
//       className="w-full p-2 border rounded"
//     />
//   </div>
//   <div className="mb-4">
//     <label className="block mb-2">Website:</label>
//     <input
//       type="url"
//       name="website"
//       value={formData.website}
//       onChange={handleChange}
//       className="w-full p-2 border rounded"
//     />
//   </div>
//   <div className="mb-4">
//     <label className="block mb-2">Services (comma-separated):</label>
//     <input
//       type="text"
//       name="services"
//       value={formData.services}
//       onChange={handleChange}
//       className="w-full p-2 border rounded"
//     />
//   </div>
//   <div className="mb-4">
//     <label className="block mb-2">Specializations (comma-separated):</label>
//     <input
//       type="text"
//       name="specializations"
//       value={formData.specializations}
//       onChange={handleChange}
//       className="w-full p-2 border rounded"
//     />
//   </div>
//   <div className="mb-4">
//     <label className="block mb-2">Opening Hours:</label>
//     <input
//       type="text"
//       name="openingHours"
//       value={formData.openingHours}
//       onChange={handleChange}
//       className="w-full p-2 border rounded"
//     />
//   </div>
//       <button
//         type="submit"
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         Add Center
//       </button>
//     </form>
//   );
// };

// export default AdminMaintenanceCenterForm;
//////////////////////////////////////////////////////
// import React, { useState } from "react";
// import axios from "axios";

// const AdminMaintenanceCenterForm = () => {
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
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAddressChange = async (e) => {
//     const address = e.target.value;
//     setFormData({ ...formData, address });

//     if (address) {
//       try {
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
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/admin/maintenance-centers",
//         {
//           ...formData,
//           services: formData.services
//             .split(",")
//             .map((service) => service.trim()),
//           specializations: formData.specializations
//             .split(",")
//             .map((spec) => spec.trim()),
//         }
//       );
//       alert("Maintenance center added successfully!");
//       setFormData({
//         name: "",
//         address: "",
//         latitude: "",
//         longitude: "",
//         phone: "",
//         website: "",
//         services: "",
//         specializations: "",
//         openingHours: "",
//       });
//     } catch (error) {
//       alert("Error adding maintenance center: " + error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
//       <h2 className="text-2xl font-bold mb-4">Add Maintenance Center</h2>
//       <div className="mb-4">
//         <label className="block mb-2">Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block mb-2">Address:</label>
//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleAddressChange}
//           required
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <div className="mb-4 flex space-x-4">
//         <div className="w-1/2">
//           <label className="block mb-2">Latitude:</label>
//           <input
//             type="number"
//             name="latitude"
//             value={formData.latitude}
//             onChange={handleChange}
//             required
//             step="any"
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div className="w-1/2">
//           <label className="block mb-2">Longitude:</label>
//           <input
//             type="number"
//             name="longitude"
//             value={formData.longitude}
//             onChange={handleChange}
//             required
//             step="any"
//             className="w-full p-2 border rounded"
//           />
//         </div>
//       </div>
//       <div className="mb-4">
//         <label className="block mb-2">Phone:</label>
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block mb-2">Website:</label>
//         <input
//           type="url"
//           name="website"
//           value={formData.website}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block mb-2">Services (comma-separated):</label>
//         <input
//           type="text"
//           name="services"
//           value={formData.services}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block mb-2">Specializations (comma-separated):</label>
//         <input
//           type="text"
//           name="specializations"
//           value={formData.specializations}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block mb-2">Opening Hours:</label>
//         <input
//           type="text"
//           name="openingHours"
//           value={formData.openingHours}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       <button
//         type="submit"
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         Add Center
//       </button>
//     </form>
//   );
// };

// export default AdminMaintenanceCenterForm;
///////////////////////////////////////////////////////
import React, { useState } from "react";
import axios from "axios";

const AdminMaintenanceCenterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    latitude: "",
    longitude: "",
    phone: "",
    website: "",
    services: "",
    specializations: "",
    openingHours: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddressChange = async (e) => {
    const address = e.target.value;
    setFormData({ ...formData, address });

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

          // Reverse geocoding to get address
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
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:4000/api/MaintenanceCenter/maintenance-centers",
        {
          ...formData,
          services: formData.services
            .split(",")
            .map((service) => service.trim()),
          specializations: formData.specializations
            .split(",")
            .map((spec) => spec.trim()),
        }
      );
      alert("Maintenance center added successfully!");
      setFormData({
        name: "",
        address: "",
        latitude: "",
        longitude: "",
        phone: "",
        website: "",
        services: "",
        specializations: "",
        openingHours: "",
      });
    } catch (error) {
      setError("Error adding maintenance center: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Add Maintenance Center</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="mb-4">
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleAddressChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4 flex space-x-4">
        <div className="w-1/2">
          <label className="block mb-2">Latitude:</label>
          <input
            type="number"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            required
            step="any"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="w-1/2">
          <label className="block mb-2">Longitude:</label>
          <input
            type="number"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            required
            step="any"
            className="w-full p-2 border rounded"
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

      <div className="mb-4">
        <label className="block mb-2">Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Website:</label>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Services (comma-separated):</label>
        <input
          type="text"
          name="services"
          value={formData.services}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Specializations (comma-separated):</label>
        <input
          type="text"
          name="specializations"
          value={formData.specializations}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Opening Hours:</label>
        <input
          type="text"
          name="openingHours"
          value={formData.openingHours}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        {isLoading ? "Adding..." : "Add Center"}
      </button>
    </form>
  );
};

export default AdminMaintenanceCenterForm;
