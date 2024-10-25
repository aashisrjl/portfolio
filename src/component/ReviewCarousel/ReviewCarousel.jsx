import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Container from "../Container/Container";
import { FaStar } from "react-icons/fa";

const ReviewCarousel = () => {
  const reviewVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };







  const reviews = [
    {
      name: "John Doe",
      review: "Excellent course! I learned a lot.",
      image: "https://i.ibb.co/K0tz6z0/client6.webp",
      rating: 5,
    },
    {
      name: "Jane Smith",
      review: "Very well structured and easy to follow.",
      image: "https://i.ibb.co/6ybYjxR/client4.webp",
      rating: 4,
    },
    {
      name: "Alice Johnson",
      review: "Great explanations and examples.",
      image: "https://i.ibb.co/ncRR3PZ/client-3avif.jpg",
      rating: 4,
    },
    {
      name: "Michael Brown",
      review: "Highly recommend to everyone!",
      image: "  https://i.ibb.co/7S94Sf3/client.jpg",
      rating: 5,
    },
  ];

  return (
    <Container>
      <div
        id="Reviews"
        className="text-center mt-9 font-medium text-designColor rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-designColor mb-4">
          What Our Client Say
        </h2>
        <Marquee gradient={false}>
          <div className="flex items-center">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="inline-block w-72 h-52 px-6 py-4 mx-4 my-2 border-2 border-designColor rounded-lg bg-slate-950 bg-opacity-45 text-designColor shadow-md"
                variants={reviewVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={review.image}
                  alt={`${review.name}'s profile`}
                  className="w-16 h-16 rounded-full mx-auto"
                />
                <p className="mt-2 font-bold">{review.name}</p>
                <p className="italic">{review.review}</p>
                <div className="flex justify-center mt-2">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Marquee>
      </div>
    </Container>
  );
};

export default ReviewCarousel;
