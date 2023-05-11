// LIBRARY
import { Link } from "react-router-dom";
// STYLE
import "../assets/BackgroundImage.scss";

export default function MovieCard({ data }) {
  // Rendered list from a props
  const CardItem = data.map(
    ({ url, title, release_date, opening_crawl }, index) => {
      const extractPathFromURL = (url) => {
        const path = url.split("/");
        const extractedPath = `${path[path.length - 2]}`;
        return extractedPath;
      };
      const id = extractPathFromURL(url);
      return (
        <li
          key={url}
          className={`rounded-lg p-5 cursor-pointer hover:shadow-skyblue bg_img_${index}`}
        >
          <div className="mb-4">
            <h3 className="text-2xl">{title}</h3>
            <p className="text-sm">
              {new Date(release_date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="mb-5">
            {opening_crawl.length > 260
              ? `${opening_crawl.substring(0, 260)}...`
              : opening_crawl}
          </div>
          <hr className="border-0 h-0.5 bg-red-600 mb-2" />
          <div>
            <Link to={`/more-info/${id}`} className="text-sm text-yellow-300">
              More Info
            </Link>
          </div>
        </li>
      );
    }
  );
  return (
    <div className="px-28 mb-10">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {CardItem}
      </ul>
    </div>
  );
}
