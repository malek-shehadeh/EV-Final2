// const ServiceCard = ({ data }) => {
//   return (
//     <div className="flex flex-col items-center gap-5 rounded-md border-2 border-slate-300 bg-gray-100 p-5 hover:border-slate-500 dark:border-slate-400 dark:bg-slate-800 dark:text-slate-400">
//       <div className="flex flex-col items-center gap-2">
//         <h1 className="text-2xl font-bold">{data.name}</h1>
//         <div className="w-20 border-b-2 border-slate-500 p-2 "></div>
//         <h2 className="mt-2 font-semibold uppercase tracking-widest ">
//           {data.purpose} +
//         </h2>
//       </div>
//       <div>
//         <img src={data.image} alt={data.name} />
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;
///////////////////////////////////////

// import React from "react";

// const ServiceCard = ({ data }) => {
//   return (
//     <div className="flex flex-col items-center gap-5 rounded-md border-2 border-slate-300 bg-gray-100 p-5 hover:border-slate-500 dark:border-slate-400 dark:bg-slate-800 dark:text-slate-400">
//       <div className="flex flex-col items-center gap-2">
//         <h1 className="text-2xl font-bold">{data.name}</h1>
//         <div className="w-20 border-b-2 border-slate-500 p-2"></div>
//         {data.purpose && (
//           <h2 className="mt-2 font-semibold uppercase tracking-widest">
//             {data.purpose} +
//           </h2>
//         )}
//       </div>
//       <div className="w-full h-64 relative overflow-hidden rounded-lg">
//         {data.images && data.images.length > 0 ? (
//           <img
//             src={`http://localhost:5000/${data.images[0]}`}
//             alt={data.name}
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-600">
//             No Image Available
//           </div>
//         )}
//       </div>
//       {data.price && (
//         <div className="mt-2 text-lg font-semibold">
//           ${data.price.toFixed(2)}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServiceCard;
////////////////////////////////////

// // ServiceCard.jsx
// import React from "react";

// const ServiceCard = ({ data }) => {
//   return (
//     <div className="flex flex-col items-center gap-5 rounded-md border-2 border-slate-300 bg-gray-100 p-5 hover:border-slate-500 dark:border-slate-400 dark:bg-slate-800 dark:text-slate-400">
//       <div className="flex flex-col items-center gap-2">
//         <h1 className="text-2xl font-bold">{data.name}</h1>
//         <div className="w-20 border-b-2 border-slate-500 p-2"></div>
//         {data.purpose && (
//           <h2 className="mt-2 font-semibold uppercase tracking-widest">
//             {data.purpose} +
//           </h2>
//         )}
//       </div>
//       <div className="w-full h-64 relative overflow-hidden rounded-lg">
//         {data.images && data.images.length > 0 ? (
//           <img
//             src={`http://localhost:5000/${data.images[0]}`}
//             alt={data.name}
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-600">
//             No Image Available
//           </div>
//         )}
//       </div>
//       {data.price && (
//         <div className="mt-2 text-lg font-semibold">
//           ${data.price.toFixed(2)}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServiceCard;
///////////////////////////

import React from "react";

const ServiceCard = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-5 rounded-md border-2 border-slate-300 bg-gray-100 p-5 hover:border-slate-500 dark:border-slate-400 dark:bg-slate-800 dark:text-slate-400 w-full h-[500px]">
      <div className="flex flex-col items-center gap-2 flex-shrink-0">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <div className="w-20 border-b-2 border-slate-500 p-2"></div>
        {data.purpose && (
          <h2 className="mt-2 font-semibold uppercase tracking-widest">
            {data.purpose} +
          </h2>
        )}
      </div>
      {/* Image container with fixed aspect ratio */}
      <div className="w-full flex-1 relative rounded-lg overflow-hidden">
        {data.images && data.images.length > 0 ? (
          <img
            src={`http://localhost:5000/${data.images[0]}`}
            alt={data.name}
            className="absolute inset-0 w-full h-full object-contain bg-white dark:bg-gray-700"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-600">
            No Image Available
          </div>
        )}
      </div>
      {data.price && (
        <div className="mt-auto pt-4 text-lg font-semibold flex-shrink-0">
          ${data.price.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
