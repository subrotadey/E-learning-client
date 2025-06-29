import React, { useEffect, useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import SubmitReview from "./SubmitReview";
import { AuthContext } from "../../../../contexts/AuthProvider";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const CourseReviews = () => {
    const { courseId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [average, setAverage] = useState(0);
    const { user } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews/average/${courseId}`)
            .then(res => res.json())
            .then(data => {
                setAverage(data?.averageRating || 0);
            });


        fetch(`http://localhost:5000/reviews/${courseId}`)
            .then(res => res.json())
            .then(data => setReviews(data));

    }, [courseId]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users/admin/${user.email}`)
                .then(res => res.json())
                .then(data => setIsAdmin(data.isAdmin));
        }
    }, [user]);

    const handleDelete = (reviewId) => {
        const confirm = window.confirm("Are you sure you want to delete this review?");
        if (!confirm) return;
        toast.success("Review deleted successfully!");

        fetch(`http://localhost:5000/reviews/${reviewId}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setReviews(prev => prev.filter(r => r._id !== reviewId));
                }
            });
    };



    return (
        <div className="my-10 space-y-6">
            <h2 className="text-xl font-bold">Student Reviews</h2>
            {/* Average Rating */}
            <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.round(average) ? "" : "text-gray-300"} />
                    ))}
                </div>
                <p className="text-gray-600">Average: {average.toFixed(1)} / 5</p>
            </div>

            {/* Review List */}
            <div className="space-y-4">
                {reviews.length === 0 ? (
                    <p className="text-sm text-gray-500">No reviews yet for this course.</p>
                ) : (
                    reviews.map((review, index) => (
                        <div key={review._id || index} className="p-4 bg-base-200 rounded-lg">
                            <div className="flex justify-between items-center">
                                <h4 className="font-semibold">{review.user}</h4>
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, j) => (
                                        <FaStar key={j} className={j < review.rating ? "" : "text-gray-300"} />
                                    ))}
                                </div>
                                {isAdmin && (
                                    <button
                                        onClick={() => handleDelete(review._id)}
                                        className="text-xs text-red-500 hover:underline btn btn-sm "
                                    >
                                        Delete
                                    </button>
                                )}
                            </div>
                            <p className="italic text-sm mt-2">"{review.message}"</p>
                            <p className="text-xs text-right text-gray-400">{review.date}</p>
                        </div>
                    ))
                )}
            </div>

            {/* Submit Review (If logged in) */}
            {user?.email ? (
                <SubmitReview courseId={courseId} setReviews={setReviews} setAverage={setAverage} />
            ) : (
                <p className="text-sm text-gray-500">Please login to write a review.</p>
            )}
        </div>
    );
};

export default CourseReviews;