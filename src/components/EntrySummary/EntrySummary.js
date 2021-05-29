import React from "react";
import { Link } from "react-static";

import "./entry-summary.css";

const EntrySummary = ({
  title,
  author,
  date,
  thumbnail,
  articleLink = "#",
  summary,
}) => {
  const jDate = new Date(date);
  const formattedDate = `${jDate.getMonth() + 1}/${
    jDate.getDate() + 1
  }/${jDate.getFullYear()}`;

  return (
    <Link className="entry-summary" to={articleLink}>
      <div className="entry-summary__info">
        <span className="entry-summary__info-title" href={articleLink}>
          {title}
        </span>
        <span className="entry-summary__info-summary" href={articleLink}>
          {summary}
        </span>
        <span className="entry-summary__info-author">{author}</span>
        <span className="entry-summary__info-date">{formattedDate}</span>
      </div>
      <img
        className="entry-summary__info-thumbnail"
        src={thumbnail}
        alt="article-thumbnail"
      />
    </Link>
  );
};

export default EntrySummary;
