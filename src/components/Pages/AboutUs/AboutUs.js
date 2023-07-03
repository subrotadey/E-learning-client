import React from 'react';

const AboutUs = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <h2 className='text-white text-3xl'>Coming Soon</h2>
            <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-6">
        Welcome to our e-learning platform! We are passionate about providing high-quality education and empowering learners to achieve their goals.
      </p>
      <p className="mb-6">
        Our mission is to make learning accessible, engaging, and effective for everyone. Whether you are a student, professional, or lifelong learner, we have a wide range of courses and resources to cater to your needs.
      </p>
      <p className="mb-6">
        Our dedicated team of instructors and content creators ensures that our courses are up-to-date, relevant, and delivered in an engaging manner. We believe in practical, hands-on learning that enables you to apply your knowledge in real-world scenarios.
      </p>
      <p className="mb-6">
        Join our community of learners and unlock your potential. Start your learning journey with us today!
      </p>
      <div className="flex justify-center">
        <a href="/courses" className="btn btn-primary">Browse Courses</a>
      </div>
    </div>
        </div>
    );
};

export default AboutUs;