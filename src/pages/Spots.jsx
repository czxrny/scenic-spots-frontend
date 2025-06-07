import React, { useEffect, useState } from "react";

function SpotCard({ spot }) {
  return (
    <div
      className="p-4 mb-4 rounded shadow"
      style={{
        backgroundColor: "var(--color-muted)",
        border: "1px solid var(--color-border)",
        color: "var(--color-text)",
      }}
    >
      <h2 className="text-2xl font-semibold mb-2">{spot.name}</h2>
      <p className="mb-1">{spot.description}</p>
      <p className="text-sm italic mb-1">Category: {spot.category}</p>
      <p className="text-sm">Location: {spot.latitude}, {spot.longitude}</p>
      <p className="text-xs mt-2 text-secondary">Added by: {spot.addedBy}</p>
      <p className="text-xs text-secondary">Created at: {new Date(spot.createdAt).toLocaleString()}</p>
    </div>
  );
}

export default function Spots() {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/spot")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setSpots(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading spots...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {spots.length === 0 && <p>No spots found.</p>}
      {spots.map((spot) => (
        <SpotCard key={spot.id} spot={spot} />
      ))}
    </div>
  );
}
