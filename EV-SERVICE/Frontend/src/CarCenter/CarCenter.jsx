// ///////////////////////////////////////////////////////////////////////////////
// import { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   MapPin,
//   Phone,
//   Globe,
//   ArrowUpDown,
//   Map,
//   X,
//   Navigation,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";

// // Reusable Card Component
// const CenterCard = ({ center, distance, onMapClick, onTitleClick }) => {
//   return (
//     <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
//       <div className="p-6">
//         <div className="flex justify-between items-start mb-6">
//           <h3
//             className="text-xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
//             onClick={() => onTitleClick(center.name)}
//           >
//             {center.name}
//           </h3>
//           {distance && (
//             <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
//               <Navigation className="w-4 h-4" />
//               {distance.toFixed(1)} km
//             </span>
//           )}
//         </div>

//         <div className="space-y-3">
//           <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
//             <div className="bg-blue-100 p-2 rounded-full">
//               <MapPin className="w-5 h-5 text-blue-600" />
//             </div>
//             <span className="font-medium text-gray-800">{center.address}</span>
//           </div>

//           {center.phone && (
//             <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
//               <div className="bg-green-100 p-2 rounded-full">
//                 <Phone className="w-5 h-5 text-green-600" />
//               </div>
//               <a
//                 href={`tel:${center.phone}`}
//                 className="font-medium text-gray-800 group-hover:text-green-600 transition-colors"
//               >
//                 {center.phone}
//               </a>
//             </div>
//           )}

//           {center.website && (
//             <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
//               <div className="bg-purple-100 p-2 rounded-full">
//                 <Globe className="w-5 h-5 text-purple-600" />
//               </div>
//               <a
//                 href={center.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors"
//               >
//                 Visit Website
//               </a>
//             </div>
//           )}

//           <button
//             onClick={onMapClick}
//             className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-all font-medium"
//           >
//             <Map className="w-4 h-4" />
//             Show on Map
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Map Modal Component
// const MapModal = ({ isOpen, onClose, carCenters, userLocation }) => {
//   if (!isOpen) return null;

//   const mapStyles = {
//     height: "60vh",
//     width: "100%",
//     borderRadius: "12px",
//   };

//   const center = userLocation
//     ? {
//         lat: userLocation.latitude,
//         lng: userLocation.longitude,
//       }
//     : {
//         lat: 31.9539,
//         lng: 35.9106,
//       };

//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371;
//     const dLat = ((lat2 - lat1) * Math.PI) / 180;
//     const dLon = ((lon2 - lon1) * Math.PI) / 180;
//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos((lat1 * Math.PI) / 180) *
//         Math.cos((lat2 * Math.PI) / 180) *
//         Math.sin(dLon / 2) *
//         Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     return (R * c).toFixed(1);
//   };

//   const openInGoogleMaps = (centerLat, centerLng) => {
//     const url = userLocation
//       ? `https://www.google.com/maps/dir/?api=1&origin=${userLocation.latitude},${userLocation.longitude}&destination=${centerLat},${centerLng}`
//       : `https://www.google.com/maps/search/?api=1&query=${centerLat},${centerLng}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl transform transition-all">
//         <div className="p-4 border-b border-gray-100">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//               Nearby Car Centers
//             </h2>
//             <button
//               onClick={onClose}
//               className="p-1 hover:bg-gray-100 rounded-full transition-colors"
//             >
//               <X className="w-5 h-5 text-gray-500" />
//             </button>
//           </div>
//         </div>

//         <div className="p-4">
//           <LoadScript
//             googleMapsApiKey="AIzaSyDM6_CMJoXRbu_cztvxTBqwrf16rI0lc5Y"
//             libraries={["marker"]}
//           >
//             <div className="rounded-xl overflow-hidden shadow-lg">
//               <GoogleMap
//                 mapContainerStyle={mapStyles}
//                 zoom={11}
//                 center={center}
//                 options={{
//                   zoomControl: true,
//                   mapTypeControl: false,
//                   streetViewControl: false,
//                   fullscreenControl: false,
//                   styles: [
//                     {
//                       featureType: "all",
//                       elementType: "labels.text.fill",
//                       stylers: [{ color: "#000000" }],
//                     },
//                     {
//                       featureType: "water",
//                       elementType: "geometry",
//                       stylers: [{ color: "#e9e9e9" }],
//                     },
//                   ],
//                 }}
//                 onLoad={(map) => {
//                   if (userLocation) {
//                     new google.maps.Marker({
//                       position: {
//                         lat: userLocation.latitude,
//                         lng: userLocation.longitude,
//                       },
//                       map,
//                       title: "Your Location",
//                       icon: {
//                         url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
//                       },
//                     });
//                   }

//                   carCenters.forEach((center) => {
//                     if (center.location?.coordinates) {
//                       const centerPosition = {
//                         lat: parseFloat(center.location.coordinates[1]),
//                         lng: parseFloat(center.location.coordinates[0]),
//                       };

//                       const distance = userLocation
//                         ? calculateDistance(
//                             userLocation.latitude,
//                             userLocation.longitude,
//                             centerPosition.lat,
//                             centerPosition.lng
//                           )
//                         : null;

//                       const marker = new google.maps.Marker({
//                         position: centerPosition,
//                         map,
//                         title: center.name,
//                         icon: {
//                           url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
//                         },
//                         animation: google.maps.Animation.DROP,
//                       });

//                       const infoWindow = new google.maps.InfoWindow({
//                         content: `
//                           <div class="p-3 min-w-[200px]">
//                             <h3 class="font-semibold text-lg mb-2">${
//                               center.name
//                             }</h3>
//                             <p class="text-gray-600 mb-2">${center.address}</p>
//                             ${
//                               distance
//                                 ? `<p class="text-blue-600 font-medium mb-2">${distance} km away</p>`
//                                 : ""
//                             }
//                             <button
//                               onclick="window.open('https://www.google.com/maps/dir/?api=1&origin=${
//                                 userLocation?.latitude
//                               },${userLocation?.longitude}&destination=${
//                           centerPosition.lat
//                         },${centerPosition.lng}', '_blank')"
//                               class="bg-blue-600 text-white px-4 py-2 rounded-lg w-full text-center hover:bg-blue-700 transition-colors"
//                             >
//                               Get Directions
//                             </button>
//                           </div>
//                         `,
//                       });

//                       marker.addListener("click", () => {
//                         infoWindow.open(map, marker);
//                       });
//                     }
//                   });
//                 }}
//               />
//             </div>
//           </LoadScript>

//           <div className="mt-4 max-h-48 overflow-y-auto rounded-xl border border-gray-100">
//             {carCenters.map((center, index) => {
//               if (!center.location?.coordinates) return null;

//               const distance = userLocation
//                 ? calculateDistance(
//                     userLocation.latitude,
//                     userLocation.longitude,
//                     parseFloat(center.location.coordinates[1]),
//                     parseFloat(center.location.coordinates[0])
//                   )
//                 : null;

//               return (
//                 <div
//                   key={center._id || index}
//                   className="flex items-center justify-between p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
//                   onClick={() =>
//                     openInGoogleMaps(
//                       parseFloat(center.location.coordinates[1]),
//                       parseFloat(center.location.coordinates[0])
//                     )
//                   }
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="bg-blue-100 p-2 rounded-full">
//                       <MapPin className="w-4 h-4 text-blue-600" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">
//                         {center.name}
//                       </p>
//                       <p className="text-sm text-gray-500">{center.address}</p>
//                     </div>
//                   </div>
//                   {distance && (
//                     <div className="flex items-center gap-2">
//                       <Navigation className="w-4 h-4 text-blue-600" />
//                       <span className="text-sm font-medium text-blue-600">
//                         {distance} km
//                       </span>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Component
// export default function CarCenterFinder() {
//   const [carCenters, setCarCenters] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [userLocation, setUserLocation] = useState(null);
//   const [sortByDistance, setSortByDistance] = useState(false);
//   const [showMap, setShowMap] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if ("geolocation" in navigator) {
//       setLoading(true);
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setUserLocation({ latitude, longitude });
//           fetchAllCarCenters(latitude, longitude);
//         },
//         (error) => {
//           console.error("Geolocation error:", error);
//           setError(
//             "Error getting your location. Please enable location services."
//           );
//           fetchAllCarCenters();
//           setLoading(false);
//         }
//       );
//     } else {
//       setError("Geolocation is not supported by your browser.");
//       fetchAllCarCenters();
//     }
//   }, []);

//   const fetchAllCarCenters = async (latitude = null, longitude = null) => {
//     try {
//       let url = "http://localhost:5000/api/carcenters/all";
//       if (latitude && longitude) {
//         url = `http://localhost:5000/api/carcenters/nearest?latitude=${latitude}&longitude=${longitude}`;
//       }
//       const response = await axios.get(url);
//       setCarCenters(response.data);
//       setLoading(false);
//     } catch (error) {
//       setError("Error fetching car centers. Please try again later.");
//       setLoading(false);
//     }
//   };

//   const calculateDistance = (centerLat, centerLng) => {
//     if (!userLocation) return null;

//     const R = 6371;
//     const dLat = ((centerLat - userLocation.latitude) * Math.PI) / 180;
//     const dLon = ((centerLng - userLocation.longitude) * Math.PI) / 180;

//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos((userLocation.latitude * Math.PI) / 180) *
//         Math.cos((centerLat * Math.PI) / 180) *
//         Math.sin(dLon / 2) *
//         Math.sin(dLon / 2);

//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     return R * c;
//   };

//   const toggleSort = () => {
//     const newSortByDistance = !sortByDistance;
//     setSortByDistance(newSortByDistance);

//     if (!newSortByDistance) {
//       setCarCenters(
//         [...carCenters].sort((a, b) => {
//           const nameA = a.name || "";
//           const nameB = b.name || "";
//           return nameA.localeCompare(nameB);
//         })
//       );
//     } else {
//       setCarCenters(
//         [...carCenters].sort((a, b) => {
//           const distA =
//             calculateDistance(
//               a.location?.coordinates[1],
//               a.location?.coordinates[0]
//             ) || Infinity;
//           const distB =
//             calculateDistance(
//               b.location?.coordinates[1],
//               b.location?.coordinates[0]
//             ) || Infinity;
//           return distA - distB;
//         })
//       );
//     }
//   };

//   const handleShopOwnerClick = (ownerName) => {
//     navigate(`/catalog?shopOwner=${encodeURIComponent(ownerName)}`);
//   };
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="flex flex-col items-center gap-4">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
//           <p className="text-gray-600 font-medium">Loading car centers...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//         <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg max-w-lg w-full">
//           <div className="flex gap-3">
//             <svg
//               className="w-6 h-6 text-red-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             <div>
//               <h3 className="text-red-800 font-medium">Error</h3>
//               <p className="text-red-700 mt-1">{error}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4 font-sans">
//             Find Car Centers Near You
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             Discover the best automotive service centers in your area. Click on
//             any center to view their available parts and services.
//           </p>
//         </div>

//         <div className="flex flex-col sm:flex-row justify-end gap-4 mb-8">
//           <button
//             onClick={toggleSort}
//             className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-sm"
//           >
//             <ArrowUpDown className="w-4 h-4" />
//             {sortByDistance ? "Sort by Name" : "Sort by Distance"}
//           </button>
//           <button
//             onClick={() => setShowMap(true)}
//             className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md"
//           >
//             <Map className="w-4 h-4" />
//             View on Map
//           </button>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {carCenters.map((center, index) => {
//             const distance = center.location
//               ? calculateDistance(
//                   center.location.coordinates[1],
//                   center.location.coordinates[0]
//                 )
//               : null;

//             return (
//               <CenterCard
//                 key={center._id || index}
//                 center={center}
//                 distance={distance}
//                 onMapClick={() => setShowMap(true)}
//                 onTitleClick={handleShopOwnerClick}
//               />
//             );
//           })}
//         </div>

//         {carCenters.length === 0 && !loading && (
//           <div className="flex flex-col items-center justify-center py-16">
//             <div className="bg-blue-50 p-4 rounded-full mb-4">
//               <Map className="w-8 h-8 text-blue-500" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               No Car Centers Found
//             </h3>
//             <p className="text-gray-600 text-center max-w-md">
//               We couldn't find any car centers in your area. Try adjusting your
//               search or try again later.
//             </p>
//           </div>
//         )}

//         <MapModal
//           isOpen={showMap}
//           onClose={() => setShowMap(false)}
//           carCenters={carCenters}
//           userLocation={userLocation}
//         />
//       </div>
//     </div>
//   );
// }
// ///////////////////ok 100% //////
// import { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   MapPin,
//   Phone,
//   Globe,
//   ArrowUpDown,
//   Map,
//   X,
//   Navigation,
//   User,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";

// // CenterCard Component
// const CenterCard = ({ center, distance, onMapClick, onTitleClick }) => {
//   return (
//     <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
//       <div className="p-6">
//         <div className="flex justify-between items-start mb-6">
//           <div className="flex items-center gap-3">
//             {/* Profile Picture Container */}
//             <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
//               {center.profilePicture ? (
//                 <img
//                   src={`http://localhost:5000/uploads/${center.profilePicture}`}
//                   alt={`${center.name}'s profile`}
//                   className="w-full h-full object-cover"
//                   onError={(e) => {
//                     e.target.src = "";
//                     e.target.parentElement.innerHTML =
//                       '<div class="w-full h-full bg-blue-100 flex items-center justify-center"><svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>';
//                   }}
//                 />
//               ) : (
//                 <User className="w-6 h-6 text-blue-600" />
//               )}
//             </div>
//             {/* Name and Owner Info */}
//             <div>
//               <h3
//                 className="text-xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
//                 onClick={() => onTitleClick(center.name)}
//               >
//                 {center.name}
//               </h3>
//               {center.ownerName && (
//                 <p className="text-sm text-gray-600">
//                   Owner: {center.ownerName}
//                 </p>
//               )}
//             </div>
//           </div>
//           {distance && (
//             <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
//               <Navigation className="w-4 h-4" />
//               {distance.toFixed(1)} km
//             </span>
//           )}
//         </div>

//         <div className="space-y-3">
//           <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
//             <div className="bg-blue-100 p-2 rounded-full">
//               <MapPin className="w-5 h-5 text-blue-600" />
//             </div>
//             <span className="font-medium text-gray-800">{center.address}</span>
//           </div>

//           {center.phone && (
//             <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
//               <div className="bg-green-100 p-2 rounded-full">
//                 <Phone className="w-5 h-5 text-green-600" />
//               </div>
//               <a
//                 href={`tel:${center.phone}`}
//                 className="font-medium text-gray-800 group-hover:text-green-600 transition-colors"
//               >
//                 {center.phone}
//               </a>
//             </div>
//           )}

//           {center.website && (
//             <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
//               <div className="bg-purple-100 p-2 rounded-full">
//                 <Globe className="w-5 h-5 text-purple-600" />
//               </div>
//               <a
//                 href={center.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors"
//               >
//                 Visit Website
//               </a>
//             </div>
//           )}

//           <button
//             onClick={onMapClick}
//             className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-all font-medium"
//           >
//             <Map className="w-4 h-4" />
//             Show on Map
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Start of main CarCenterFinder component
// export default function CarCenterFinder() {
//   const [carCenters, setCarCenters] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [userLocation, setUserLocation] = useState(null);
//   const [sortByDistance, setSortByDistance] = useState(false);
//   const [showMap, setShowMap] = useState(false);
//   const navigate = useNavigate();

//   // ... To be continued in Part 2
//   // MapModal Component
//   const MapModal = ({ isOpen, onClose, carCenters, userLocation }) => {
//     if (!isOpen) return null;

//     const mapStyles = {
//       height: "60vh",
//       width: "100%",
//       borderRadius: "12px",
//     };

//     const center = userLocation
//       ? {
//           lat: userLocation.latitude,
//           lng: userLocation.longitude,
//         }
//       : {
//           lat: 31.9539,
//           lng: 35.9106,
//         };

//     const calculateDistance = (lat1, lon1, lat2, lon2) => {
//       const R = 6371;
//       const dLat = ((lat2 - lat1) * Math.PI) / 180;
//       const dLon = ((lon2 - lon1) * Math.PI) / 180;
//       const a =
//         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//         Math.cos((lat1 * Math.PI) / 180) *
//           Math.cos((lat2 * Math.PI) / 180) *
//           Math.sin(dLon / 2) *
//           Math.sin(dLon / 2);
//       const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//       return (R * c).toFixed(1);
//     };

//     const openInGoogleMaps = (centerLat, centerLng) => {
//       const url = userLocation
//         ? `https://www.google.com/maps/dir/?api=1&origin=${userLocation.latitude},${userLocation.longitude}&destination=${centerLat},${centerLng}`
//         : `https://www.google.com/maps/search/?api=1&query=${centerLat},${centerLng}`;
//       window.open(url, "_blank");
//     };

//     return (
//       <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//         <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl transform transition-all">
//           <div className="p-4 border-b border-gray-100">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//                 Nearby Car Centers
//               </h2>
//               <button
//                 onClick={onClose}
//                 className="p-1 hover:bg-gray-100 rounded-full transition-colors"
//               >
//                 <X className="w-5 h-5 text-gray-500" />
//               </button>
//             </div>
//           </div>

//           <div className="p-4">
//             <LoadScript
//               googleMapsApiKey="AIzaSyDM6_CMJoXRbu_cztvxTBqwrf16rI0lc5Y"
//               libraries={["marker"]}
//             >
//               <div className="rounded-xl overflow-hidden shadow-lg">
//                 <GoogleMap
//                   mapContainerStyle={mapStyles}
//                   zoom={11}
//                   center={center}
//                   options={{
//                     zoomControl: true,
//                     mapTypeControl: false,
//                     streetViewControl: false,
//                     fullscreenControl: false,
//                     styles: [
//                       {
//                         featureType: "all",
//                         elementType: "labels.text.fill",
//                         stylers: [{ color: "#000000" }],
//                       },
//                       {
//                         featureType: "water",
//                         elementType: "geometry",
//                         stylers: [{ color: "#e9e9e9" }],
//                       },
//                     ],
//                   }}
//                   onLoad={(map) => {
//                     if (userLocation) {
//                       new google.maps.Marker({
//                         position: {
//                           lat: userLocation.latitude,
//                           lng: userLocation.longitude,
//                         },
//                         map,
//                         title: "Your Location",
//                         icon: {
//                           url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
//                         },
//                       });
//                     }

//                     carCenters.forEach((center) => {
//                       if (center.location?.coordinates) {
//                         const centerPosition = {
//                           lat: parseFloat(center.location.coordinates[1]),
//                           lng: parseFloat(center.location.coordinates[0]),
//                         };

//                         const distance = userLocation
//                           ? calculateDistance(
//                               userLocation.latitude,
//                               userLocation.longitude,
//                               centerPosition.lat,
//                               centerPosition.lng
//                             )
//                           : null;

//                         const marker = new google.maps.Marker({
//                           position: centerPosition,
//                           map,
//                           title: center.name,
//                           icon: {
//                             url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
//                           },
//                           animation: google.maps.Animation.DROP,
//                         });

//                         const infoWindow = new google.maps.InfoWindow({
//                           content: `
//                           <div class="p-3 min-w-[200px]">
//                             <div class="flex items-center gap-2 mb-2">
//                               ${
//                                 center.profilePicture
//                                   ? `<img src="http://localhost:5000/uploads/${center.profilePicture}"
//                                      alt="${center.name}"
//                                      class="w-8 h-8 rounded-full object-cover">`
//                                   : ""
//                               }
//                               <h3 class="font-semibold text-lg">${
//                                 center.name
//                               }</h3>
//                             </div>
//                             <p class="text-gray-600 mb-2">${center.address}</p>
//                             ${
//                               distance
//                                 ? `<p class="text-blue-600 font-medium mb-2">${distance} km away</p>`
//                                 : ""
//                             }
//                             <button
//                               onclick="window.open('https://www.google.com/maps/dir/?api=1&origin=${
//                                 userLocation?.latitude
//                               },${userLocation?.longitude}&destination=${
//                             centerPosition.lat
//                           },${centerPosition.lng}', '_blank')"
//                               class="bg-blue-600 text-white px-4 py-2 rounded-lg w-full text-center hover:bg-blue-700 transition-colors"
//                             >
//                               Get Directions
//                             </button>
//                           </div>
//                         `,
//                         });

//                         marker.addListener("click", () => {
//                           infoWindow.open(map, marker);
//                         });
//                       }
//                     });
//                   }}
//                 />
//               </div>
//             </LoadScript>

//             <div className="mt-4 max-h-48 overflow-y-auto rounded-xl border border-gray-100">
//               {carCenters.map((center, index) => {
//                 if (!center.location?.coordinates) return null;

//                 const distance = userLocation
//                   ? calculateDistance(
//                       userLocation.latitude,
//                       userLocation.longitude,
//                       parseFloat(center.location.coordinates[1]),
//                       parseFloat(center.location.coordinates[0])
//                     )
//                   : null;

//                 return (
//                   <div
//                     key={center._id || index}
//                     className="flex items-center justify-between p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
//                     onClick={() =>
//                       openInGoogleMaps(
//                         parseFloat(center.location.coordinates[1]),
//                         parseFloat(center.location.coordinates[0])
//                       )
//                     }
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
//                         {center.profilePicture ? (
//                           <img
//                             src={`http://localhost:5000/uploads/${center.profilePicture}`}
//                             alt={`${center.name}'s profile`}
//                             className="w-full h-full object-cover"
//                             onError={(e) => {
//                               e.target.src = "";
//                               e.target.parentElement.innerHTML =
//                                 '<div class="w-full h-full bg-blue-100 flex items-center justify-center"><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>';
//                             }}
//                           />
//                         ) : (
//                           <User className="w-5 h-5 text-blue-600" />
//                         )}
//                       </div>
//                       <div>
//                         <p className="font-semibold text-gray-900">
//                           {center.name}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           {center.address}
//                         </p>
//                       </div>
//                     </div>
//                     {distance && (
//                       <div className="flex items-center gap-2">
//                         <Navigation className="w-4 h-4 text-blue-600" />
//                         <span className="text-sm font-medium text-blue-600">
//                           {distance} km
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
//   // Continuing the CarCenterFinder component...

//   useEffect(() => {
//     if ("geolocation" in navigator) {
//       setLoading(true);
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setUserLocation({ latitude, longitude });
//           fetchAllCarCenters(latitude, longitude);
//         },
//         (error) => {
//           console.error("Geolocation error:", error);
//           setError(
//             "Error getting your location. Please enable location services."
//           );
//           fetchAllCarCenters();
//           setLoading(false);
//         }
//       );
//     } else {
//       setError("Geolocation is not supported by your browser.");
//       fetchAllCarCenters();
//     }
//   }, []);

//   const fetchAllCarCenters = async (latitude = null, longitude = null) => {
//     try {
//       let url = "http://localhost:5000/api/carcenters/all";
//       if (latitude && longitude) {
//         url = `http://localhost:5000/api/carcenters/nearest?latitude=${latitude}&longitude=${longitude}`;
//       }
//       const response = await axios.get(url);
//       setCarCenters(response.data);
//       setLoading(false);
//     } catch (error) {
//       setError("Error fetching car centers. Please try again later.");
//       setLoading(false);
//     }
//   };

//   const calculateDistance = (centerLat, centerLng) => {
//     if (!userLocation) return null;

//     const R = 6371;
//     const dLat = ((centerLat - userLocation.latitude) * Math.PI) / 180;
//     const dLon = ((centerLng - userLocation.longitude) * Math.PI) / 180;

//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos((userLocation.latitude * Math.PI) / 180) *
//         Math.cos((centerLat * Math.PI) / 180) *
//         Math.sin(dLon / 2) *
//         Math.sin(dLon / 2);

//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     return R * c;
//   };

//   const toggleSort = () => {
//     const newSortByDistance = !sortByDistance;
//     setSortByDistance(newSortByDistance);

//     if (!newSortByDistance) {
//       setCarCenters(
//         [...carCenters].sort((a, b) => {
//           const nameA = a.name || "";
//           const nameB = b.name || "";
//           return nameA.localeCompare(nameB);
//         })
//       );
//     } else {
//       setCarCenters(
//         [...carCenters].sort((a, b) => {
//           const distA =
//             calculateDistance(
//               a.location?.coordinates[1],
//               a.location?.coordinates[0]
//             ) || Infinity;
//           const distB =
//             calculateDistance(
//               b.location?.coordinates[1],
//               b.location?.coordinates[0]
//             ) || Infinity;
//           return distA - distB;
//         })
//       );
//     }
//   };

//   const handleShopOwnerClick = (ownerName) => {
//     navigate(`/catalog?shopOwner=${encodeURIComponent(ownerName)}`);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="flex flex-col items-center gap-4">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
//           <p className="text-gray-600 font-medium">Loading car centers...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//         <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg max-w-lg w-full">
//           <div className="flex gap-3">
//             <svg
//               className="w-6 h-6 text-red-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             <div>
//               <h3 className="text-red-800 font-medium">Error</h3>
//               <p className="text-red-700 mt-1">{error}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4 font-sans">
//             Find Car Centers Near You
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             Discover the best automotive service centers in your area. Click on
//             any center to view their available parts and services.
//           </p>
//         </div>

//         <div className="flex flex-col sm:flex-row justify-end gap-4 mb-8">
//           <button
//             onClick={toggleSort}
//             className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-sm"
//           >
//             <ArrowUpDown className="w-4 h-4" />
//             {sortByDistance ? "Sort by Name" : "Sort by Distance"}
//           </button>
//           <button
//             onClick={() => setShowMap(true)}
//             className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md"
//           >
//             <Map className="w-4 h-4" />
//             View on Map
//           </button>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {carCenters.map((center, index) => {
//             const distance = center.location
//               ? calculateDistance(
//                   center.location.coordinates[1],
//                   center.location.coordinates[0]
//                 )
//               : null;

//             return (
//               <CenterCard
//                 key={center._id || index}
//                 center={center}
//                 distance={distance}
//                 onMapClick={() => setShowMap(true)}
//                 onTitleClick={handleShopOwnerClick}
//               />
//             );
//           })}
//         </div>

//         {carCenters.length === 0 && !loading && (
//           <div className="flex flex-col items-center justify-center py-16">
//             <div className="bg-blue-50 p-4 rounded-full mb-4">
//               <Map className="w-8 h-8 text-blue-500" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               No Car Centers Found
//             </h3>
//             <p className="text-gray-600 text-center max-w-md">
//               We couldn't find any car centers in your area. Try adjusting your
//               search or try again later.
//             </p>
//           </div>
//         )}

//         <MapModal
//           isOpen={showMap}
//           onClose={() => setShowMap(false)}
//           carCenters={carCenters}
//           userLocation={userLocation}
//         />
//       </div>
//     </div>
//   );
// }
////////////////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {
  MapPin,
  Phone,
  Globe,
  ArrowUpDown,
  Map,
  X,
  Navigation,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

// CenterCard Component
const CenterCard = ({ center, distance, onMapClick, onTitleClick }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
              {center.profilePicture ? (
                <img
                  src={`http://localhost:5000/uploads/${center.profilePicture}`}
                  alt={`${center.name}'s profile`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "";
                    e.target.parentElement.innerHTML =
                      '<div class="w-full h-full bg-blue-100 flex items-center justify-center"><svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>';
                  }}
                />
              ) : (
                <User className="w-6 h-6 text-blue-600" />
              )}
            </div>
            <div>
              <h3
                className="text-xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => onTitleClick(center.name)}
              >
                {center.name}
              </h3>
              {center.ownerName && (
                <p className="text-sm text-gray-600">
                  Owner: {center.ownerName}
                </p>
              )}
            </div>
          </div>
          {distance && (
            <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
              <Navigation className="w-4 h-4" />
              {distance.toFixed(1)} km
            </span>
          )}
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="bg-blue-100 p-2 rounded-full">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-medium text-gray-800">{center.address}</span>
          </div>

          {center.phone && (
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
              <div className="bg-green-100 p-2 rounded-full">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <a
                href={`tel:${center.phone}`}
                className="font-medium text-gray-800 group-hover:text-green-600 transition-colors"
              >
                {center.phone}
              </a>
            </div>
          )}

          {center.website && (
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
              <div className="bg-purple-100 p-2 rounded-full">
                <Globe className="w-5 h-5 text-purple-600" />
              </div>
              <a
                href={center.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors"
              >
                Visit Website
              </a>
            </div>
          )}

          <button
            onClick={onMapClick}
            className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-all font-medium"
          >
            <Map className="w-4 h-4" />
            Show on Map
          </button>
        </div>
      </div>
    </div>
  );
};

CenterCard.propTypes = {
  center: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ownerName: PropTypes.string,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string,
    website: PropTypes.string,
    profilePicture: PropTypes.string,
  }).isRequired,
  distance: PropTypes.number,
  onMapClick: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

// MapModal Component
const MapModal = ({ isOpen, onClose, carCenters, userLocation }) => {
  if (!isOpen) return null;

  const mapStyles = {
    height: "60vh",
    width: "100%",
    borderRadius: "12px",
  };

  const center = userLocation
    ? {
        lat: userLocation.latitude,
        lng: userLocation.longitude,
      }
    : {
        lat: 31.9539,
        lng: 35.9106,
      };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(1);
  };

  const openInGoogleMaps = (centerLat, centerLng) => {
    const url = userLocation
      ? `https://www.google.com/maps/dir/?api=1&origin=${userLocation.latitude},${userLocation.longitude}&destination=${centerLat},${centerLng}`
      : `https://www.google.com/maps/search/?api=1&query=${centerLat},${centerLng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl transform transition-all">
        <div className="p-4 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Nearby Car Centers
            </h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-4">
          <LoadScript
            googleMapsApiKey="AIzaSyDM6_CMJoXRbu_cztvxTBqwrf16rI0lc5Y"
            libraries={["marker"]}
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={11}
                center={center}
                options={{
                  zoomControl: true,
                  mapTypeControl: false,
                  streetViewControl: false,
                  fullscreenControl: false,
                  styles: [
                    {
                      featureType: "all",
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#000000" }],
                    },
                    {
                      featureType: "water",
                      elementType: "geometry",
                      stylers: [{ color: "#e9e9e9" }],
                    },
                  ],
                }}
                onLoad={(map) => {
                  if (userLocation) {
                    new google.maps.Marker({
                      position: {
                        lat: userLocation.latitude,
                        lng: userLocation.longitude,
                      },
                      map,
                      title: "Your Location",
                      icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                      },
                    });
                  }

                  carCenters.forEach((center) => {
                    if (center.location?.coordinates) {
                      const centerPosition = {
                        lat: parseFloat(center.location.coordinates[1]),
                        lng: parseFloat(center.location.coordinates[0]),
                      };

                      const distance = userLocation
                        ? calculateDistance(
                            userLocation.latitude,
                            userLocation.longitude,
                            centerPosition.lat,
                            centerPosition.lng
                          )
                        : null;

                      const marker = new google.maps.Marker({
                        position: centerPosition,
                        map,
                        title: center.name,
                        icon: {
                          url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                        },
                        animation: google.maps.Animation.DROP,
                      });

                      const infoWindow = new google.maps.InfoWindow({
                        content: `
                        <div class="p-3 min-w-[200px]">
                          <div class="flex items-center gap-2 mb-2">
                            ${
                              center.profilePicture
                                ? `<img src="http://localhost:5000/uploads/${center.profilePicture}" 
                                   alt="${center.name}" 
                                   class="w-8 h-8 rounded-full object-cover">`
                                : ""
                            }
                            <h3 class="font-semibold text-lg">${
                              center.name
                            }</h3>
                          </div>
                          <p class="text-gray-600 mb-2">${center.address}</p>
                          ${
                            distance
                              ? `<p class="text-blue-600 font-medium mb-2">${distance} km away</p>`
                              : ""
                          }
                          <button 
                            onclick="window.open('https://www.google.com/maps/dir/?api=1&origin=${
                              userLocation?.latitude
                            },${userLocation?.longitude}&destination=${
                          centerPosition.lat
                        },${centerPosition.lng}', '_blank')"
                            class="bg-blue-600 text-white px-4 py-2 rounded-lg w-full text-center hover:bg-blue-700 transition-colors"
                          >
                            Get Directions
                          </button>
                        </div>
                      `,
                      });

                      marker.addListener("click", () => {
                        infoWindow.open(map, marker);
                      });
                    }
                  });
                }}
              />
            </div>
          </LoadScript>

          <div className="mt-4 max-h-48 overflow-y-auto rounded-xl border border-gray-100">
            {carCenters.map((center, index) => {
              if (!center.location?.coordinates) return null;

              const distance = userLocation
                ? calculateDistance(
                    userLocation.latitude,
                    userLocation.longitude,
                    parseFloat(center.location.coordinates[1]),
                    parseFloat(center.location.coordinates[0])
                  )
                : null;

              return (
                <div
                  key={center._id || index}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onClick={() =>
                    openInGoogleMaps(
                      parseFloat(center.location.coordinates[1]),
                      parseFloat(center.location.coordinates[0])
                    )
                  }
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      {center.profilePicture ? (
                        <img
                          src={`http://localhost:5000/uploads/${center.profilePicture}`}
                          alt={`${center.name}'s profile`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "";
                            e.target.parentElement.innerHTML =
                              '<div class="w-full h-full bg-blue-100 flex items-center justify-center"><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>';
                          }}
                        />
                      ) : (
                        <User className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {center.name}
                      </p>
                      <p className="text-sm text-gray-500">{center.address}</p>
                    </div>
                  </div>
                  {distance && (
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-600">
                        {distance} km
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
MapModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  carCenters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      profilePicture: PropTypes.string,
      location: PropTypes.shape({
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
      }),
    })
  ).isRequired,
  userLocation: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
};

MapModal.defaultProps = {
  userLocation: null,
};

// Main CarCenterFinder component
export default function CarCenterFinder() {
  const [carCenters, setCarCenters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [sortByDistance, setSortByDistance] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if ("geolocation" in navigator) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          fetchAllCarCenters(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setError(
            "Error getting your location. Please enable location services."
          );
          fetchAllCarCenters();
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      fetchAllCarCenters();
    }
  }, []);

  const fetchAllCarCenters = async (latitude = null, longitude = null) => {
    try {
      let url = "http://localhost:5000/api/carcenters/all";
      if (latitude && longitude) {
        url = `http://localhost:5000/api/carcenters/nearest?latitude=${latitude}&longitude=${longitude}`;
      }
      const response = await axios.get(url);
      setCarCenters(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching car centers. Please try again later.");
      setLoading(false);
    }
  };

  const calculateDistance = (centerLat, centerLng) => {
    if (!userLocation) return null;

    const R = 6371;
    const dLat = ((centerLat - userLocation.latitude) * Math.PI) / 180;
    const dLon = ((centerLng - userLocation.longitude) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((userLocation.latitude * Math.PI) / 180) *
        Math.cos((centerLat * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const toggleSort = () => {
    const newSortByDistance = !sortByDistance;
    setSortByDistance(newSortByDistance);

    if (!newSortByDistance) {
      setCarCenters(
        [...carCenters].sort((a, b) => {
          const nameA = a.name || "";
          const nameB = b.name || "";
          return nameA.localeCompare(nameB);
        })
      );
    } else {
      setCarCenters(
        [...carCenters].sort((a, b) => {
          const distA =
            calculateDistance(
              a.location?.coordinates[1],
              a.location?.coordinates[0]
            ) || Infinity;
          const distB =
            calculateDistance(
              b.location?.coordinates[1],
              b.location?.coordinates[0]
            ) || Infinity;
          return distA - distB;
        })
      );
    }
  };

  const handleShopOwnerClick = (ownerName) => {
    navigate(`/catalog?shopOwner=${encodeURIComponent(ownerName)}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          <p className="text-gray-600 font-medium">Loading car centers...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg max-w-lg w-full">
          <div className="flex gap-3">
            <svg
              className="w-6 h-6 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="text-red-800 font-medium">Error</h3>
              <p className="text-red-700 mt-1">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-sans">
            Find Car Centers Near You
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover the best automotive service centers in your area. Click on
            any center to view their available parts and services.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-4 mb-8">
          <button
            onClick={toggleSort}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-sm"
          >
            <ArrowUpDown className="w-4 h-4" />
            {sortByDistance ? "Sort by Name" : "Sort by Distance"}
          </button>
          <button
            onClick={() => setShowMap(true)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md"
          >
            <Map className="w-4 h-4" />
            View on Map
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carCenters.map((center, index) => {
            const distance = center.location
              ? calculateDistance(
                  center.location.coordinates[1],
                  center.location.coordinates[0]
                )
              : null;

            return (
              <CenterCard
                key={center._id || index}
                center={center}
                distance={distance}
                onMapClick={() => setShowMap(true)}
                onTitleClick={handleShopOwnerClick}
              />
            );
          })}
        </div>

        {carCenters.length === 0 && !loading && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="bg-blue-50 p-4 rounded-full mb-4">
              <Map className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Car Centers Found
            </h3>
            <p className="text-gray-600 text-center max-w-md">
              We couldn't find any car centers in your area. Try adjusting your
              search or try again later.
            </p>
          </div>
        )}

        <MapModal
          isOpen={showMap}
          onClose={() => setShowMap(false)}
          carCenters={carCenters}
          userLocation={userLocation}
        />
      </div>
    </div>
  );
}
