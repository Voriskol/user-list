import React from "react";
import { Skeleton } from "./Skeleton";
import { User } from "./User";

export const Users = ({ items, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          <User />
        </ul>
      )}
    </>
  );
};
