import React from "react";

export const Error = ({ error }) => {
  if (error) {
    return (
      <div className="error">
        <h1>Произошла ошибка, попробуйте обновить страницу.</h1>
      </div>
    );
  }
};
