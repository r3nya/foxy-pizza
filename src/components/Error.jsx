import React from 'react';

const Error = ({ error }) => (
  <p>
    Something went wrong… <br />
    {error.toString()}
  </p>
);

export default Error;
