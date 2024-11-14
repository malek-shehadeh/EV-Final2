import React, { useState } from "react";
import { reviews } from "../../constants";
import ReviewCard from "./ReviewCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const ReviewList = () => {
  const [startIndex, setStartIndex] = useState(0);
  const reviewPerPage = 3;
  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - reviewPerPage, 0));
  };
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + reviewPerPage, reviews.length - reviewPerPage)
    );
  };
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex flex-col gap-5 lg:flex-row ">
        {reviews
          .slice(startIndex, startIndex + reviewPerPage)
          .map((review, index) => (
            <ReviewCard review={review} key={index} />
          ))}
      </div>
      <div className="mt-5 flex items-center justify-center gap-6 ">
        <button
          className="rounded-full border-2 border-gray-400 px-4 py-2 disabled:opacity-40"
          onClick={handlePrevious}
          disabled={startIndex === 0}
        >
          <FaArrowLeftLong />
        </button>
        <button
          className="rounded-full border-2 border-gray-400 px-4 py-2 disabled:opacity-40"
          onClick={handleNext}
          disabled={startIndex + reviewPerPage >= reviews.length}
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default ReviewList;
