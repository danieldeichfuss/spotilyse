import React from "react";

export default () => {
  return (
    <svg
      className="robot"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
    >
      <ellipse
        className="headphone headphone-bowl headphone-bowl-right"
        fill="#F4900C"
        cx="33.5"
        cy="14.5"
        rx="2.5"
        ry="3.5"
      />
      <ellipse
        className="headphone headphone-bowl headphone-bowl-left"
        fill="#F4900C"
        cx="2.5"
        cy="14.5"
        rx="2.5"
        ry="3.5"
      />
      <path
        className="headphone headphone-pads"
        fill="#FFAC33"
        d="M34 19c0 .553-.447 1-1 1h-3c-.553 0-1-.447-1-1v-9c0-.552.447-1 1-1h3c.553 0 1 .448 1 1v9zM7 19c0 .553-.448 1-1 1H3c-.552 0-1-.447-1-1v-9c0-.552.448-1 1-1h3c.552 0 1 .448 1 1v9z"
      />
      <path
        className="headphone headphone-band headphone-band-top"
        fill="#FFCC4D"
        d="M28 5c0 2.761-4.478 4-10 4C12.477 9 8 7.761 8 5s4.477-5 10-5c5.522 0 10 2.239 10 5z"
      />
      <path
        className="headphone headphone-band headphone-band-bottom"
        fill="#F4900C"
        d="M25 4.083C25 5.694 21.865 7 18 7c-3.866 0-7-1.306-7-2.917 0-1.611 3.134-2.917 7-2.917 3.865 0 7 1.306 7 2.917z"
      />
      <path
        className="hair"
        fill="#269"
        d="M30 5.5C30 6.881 28.881 7 27.5 7h-19C7.119 7 6 6.881 6 5.5S7.119 3 8.5 3h19C28.881 3 30 4.119 30 5.5z"
      />
      <path
        className="head"
        fill="#55ACEE"
        d="M30 6H6c-1.104 0-2 .896-2 2v26h28V8c0-1.104-.896-2-2-2z"
      />
      <path
        className="shirt"
        fill="#3B88C3"
        d="M35 33v-1c0-1.104-.896-2-2-2H22.071l-3.364 3.364c-.391.391-1.023.391-1.414 0L13.929 30H3c-1.104 0-2 .896-2 2v1c0 1.104-.104 2 1 2h32c1.104 0 1-.896 1-2z"
      />
      <circle
        className="eye-outer eye-outer-right"
        fill="#FFF"
        cx="24.5"
        cy="14.5"
        r="4.5"
      />
      <path
        className="eye-inner eye-inner-right"
        fill="#DD2E44"
        d="M26 17c0 .553-.447 1-1 1h-1c-.553 0-1-.447-1-1v-5c0-.552.447-1 1-1h1c.553 0 1 .448 1 1v5z"
      />
      <circle
        className="eye-outer eye-outer-right"
        fill="#FFF"
        cx="11.5"
        cy="14.5"
        r="4.5"
      />
      <path
        className="eye-inner eye-inner-left"
        fill="#DD2E44"
        d="M13 17c0 .553-.448 1-1 1h-1c-.552 0-1-.447-1-1v-5c0-.552.448-1 1-1h1c.552 0 1 .448 1 1v5z"
      />
      <path
        className="teeth teeth-brighter"
        fill="#F5F8FA"
        d="M29 25.5c0 1.381-1.119 2.5-2.5 2.5h-17C8.119 28 7 26.881 7 25.5S8.119 23 9.5 23h17c1.381 0 2.5 1.119 2.5 2.5z"
      />
      <path
        className="teeth teeth-darker"
        fill="#CCD6DD"
        d="M17 23h2v5h-2zm-5 0h2v5h-2zm10 0h2v5h-2zM7 25.5c0 1.21.859 2.218 2 2.45v-4.9c-1.141.232-2 1.24-2 2.45zm20-2.45v4.899c1.141-.232 2-1.24 2-2.45s-.859-2.217-2-2.449z"
      />
    </svg>
  );
};
