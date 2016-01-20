import React from 'react';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div>
      <h1>Not found :(</h1>
      <Link to="/">Back</Link>
    </div>
  );
}
