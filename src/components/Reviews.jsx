import { useEffect, useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <section className="relative col-span-2 overflow-hidden rounded-[22px] border border-[#ead5cf] bg-[linear-gradient(145deg,#ffffff,#f7ebe7)] p-[26px] shadow-[0_12px_28px_rgba(75,18,35,0.08)]">
      <div className="absolute left-[26px] top-0 h-[5px] w-[70px] rounded-b-md bg-gradient-to-r from-[#6f102b] to-[#b94465]" />

      <div className="mb-[22px] flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-[12px] uppercase tracking-[0.25em] text-[#9b173d]">
            JSONPlaceholder
          </p>
          <h2 className="font-serif text-[28px] text-[#6f102b]">
            Employer Reviews
          </h2>
        </div>

        <span className="rounded-full bg-[#f0ddd7] px-4 py-2 text-[12px] text-[#6f102b]">
          {reviews.length} comments
        </span>
      </div>

      <div className="grid gap-[14px] md:grid-cols-2">
        {reviews.map((review, index) => (
          <article
            key={review.id}
            className={`rounded-[20px] border border-[#ead5cf] p-[18px] shadow-sm ${
              index === 0
                ? "bg-[linear-gradient(145deg,#6f102b,#9b173d)] text-white md:row-span-2"
                : "bg-white text-[#1f1f1f]"
            }`}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <span
                className={`rounded-full px-3 py-1 text-[12px] ${
                  index === 0
                    ? "bg-white/20 text-white"
                    : "bg-[#f7ebe7] text-[#6f102b]"
                }`}
              >
                Review #{index + 1}
              </span>
            </div>

            <h3
              className={`mb-3 font-serif text-[20px] font-bold ${
                index === 0 ? "text-white" : "text-[#6f102b]"
              }`}
            >
              {review.name}
            </h3>

            <p className="leading-[1.6]">{review.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;