import React from "react";

export const Error = ({ error, elements }) => {
  if (error || elements.length === 0) {
    return (
      <div className="error">
        <h1>Произошла ошибка, попробуйте обновить страницу.</h1>
      </div>
    );
  }
};
