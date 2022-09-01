import React, { useState } from 'react';

const Pages = ({ content, itemsPerPage }) => {
  const [page, setPage] = useState(0);
  const start = itemsPerPage * page;
  const end = start + itemsPerPage;

  return (
    <div className="pages-container">
      <div className="headers-container">
        {Object.keys(content[0]).map((key) => (
          <h3 className="header">{key}</h3>
        ))}
      </div>
      {content.slice(start, end).map((obj) => {
        return (
          <div className="users">
            {Object.values(obj).map((value) => (
              <div className="user-info">{value}</div>
            ))}
          </div>
        );
      })}
      <div className="dots-container">
        {Array.from({ length: Math.ceil(content.length / itemsPerPage) }).map(
          (_, num) => (
            <p1
              className={`${page === num && 'active'} dot`}
              onClick={() => setPage(num)}
            >
              {num + 1}
            </p1>
          )
        )}
      </div>
    </div>
  );
};

export default Pages;
