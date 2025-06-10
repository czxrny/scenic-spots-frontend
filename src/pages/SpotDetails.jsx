import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SpotDetails() {
  const { id } = useParams();
  const [spot, setSpot] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [spotRes, reviewsRes] = await Promise.all([
          fetch(`http://localhost:8080/spot/${id}`),
          fetch(`http://localhost:8080/spot/${id}/review`),
        ]);

        if (!spotRes.ok || !reviewsRes.ok) throw new Error("Failed to load data");

        const spotData = await spotRes.json();
        const reviewsData = await reviewsRes.json();

        setSpot(spotData);
        setReviews(reviewsData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;
  if (!spot) return <p className="p-4">Spot not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6" style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
      <h1 className="text-3xl font-bold mb-2">{spot.name}</h1>
      <p className="italic text-sm mb-4 text-secondary">Category: {spot.category}</p>
      <p className="mb-4">{spot.description}</p>
      <p className="text-sm mb-1">📍 Location: {spot.latitude}, {spot.longitude}</p>
      <p className="text-xs mb-1 text-secondary">Added by: {spot.addedBy}</p>
      <p className="text-xs mb-6 text-secondary">Created at: {new Date(spot.createdAt).toLocaleString()}</p>

      {spot.photos?.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Photos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {spot.photos.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`Spot photo ${idx + 1}`}
                className="rounded-xl shadow-sm border border-[var(--color-border)] object-cover h-40 w-full"
              />
            ))}
          </div>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-sm text-muted">No reviews yet.</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="p-4 rounded border shadow-sm"
                style={{
                  backgroundColor: "var(--color-muted)",
                  borderColor: "var(--color-border)",
                }}
              >
                <p className="mb-2">⭐ {review.rating.toFixed(1)} / 5</p>
                <p className="mb-2">{review.content}</p>
                <p className="text-xs text-secondary">By: {review.addedBy}</p>
                <p className="text-xs text-secondary">At: {new Date(review.createdAt).toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
