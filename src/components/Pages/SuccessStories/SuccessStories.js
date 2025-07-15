import React, { useEffect, useState } from "react";

const SuccessStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Load JSON data (you can replace this with API call later)
    fetch("/successStories.json")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <section className="pt-24 p-6 w-11/12 mx-auto">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-indigo-600">
          Our Success Stories
        </h2>
        <p className=" mb-12 max-w-2xl mx-auto">
          See how our learners have transformed their lives and careers through our platform.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.id}
              className="p-6 rounded-xl shadow-xl hover:shadow-md transition"
            >
              <img
                src={story.image}
                alt={story.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">
                {story.name}
              </h3>
              <p className="text-sm text-blue-500">{story.course}</p>
              <p className="mt-3 text-sm italic">
                "{story.story}"
              </p>
              <div className="mt-4  text-xs">
                📍 {story.location} • 🗓 {story.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
