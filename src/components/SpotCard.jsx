import { Link } from "react-router-dom";

export default function SpotCard({ spot }) {
  return (
    <div
      className="p-4 mb-4 rounded shadow"
      style={{
        backgroundColor: "var(--color-muted)",
        border: "1px solid var(--color-border)",
        color: "var(--color-text)",
      }}
    >
      <h2 className="text-2xl font-semibold mb-2">
        <Link to={`/spot/${spot.id}`} className="text-blue-600 hover:underline">
          {spot.name}
        </Link>
      </h2>
      <p className="mb-1">{spot.description}</p>
      <p className="text-sm italic mb-1">Category: {spot.category}</p>
      <p className="text-sm">Location: {spot.latitude}, {spot.longitude}</p>
      <p className="text-xs mt-2 text-secondary">Added by: {spot.addedBy}</p>
      <p className="text-xs text-secondary">Created at: {new Date(spot.createdAt).toLocaleString()}</p>
    </div>
  );
}