import React from 'react';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div>
      <p>Not found :(</p>
      <Link to="/">Back</Link>
    </div>
  );
}
