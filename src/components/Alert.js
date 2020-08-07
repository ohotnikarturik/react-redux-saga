import React from "react";

export const Alert = ({message}) => {
  return (
    <div className="alert alert-dark" role="alert">
      {message}
    </div>
  )
}