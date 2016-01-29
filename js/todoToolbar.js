import React from 'react';
import { Link } from 'react-router';

import ClearBtn from './clearBtn';

export default function TodoToolbar(props) {
  return (
    <div>
      <hr />
      <div className="btn-group btn-group-xs">
        <Link className="btn btn-default" to="all" activeClassName="active">All</Link>
        <Link className="btn btn-default" to="pending" activeClassName="active">Pending</Link>
        <Link className="btn btn-default" to="completed" activeClassName="active">Completed</Link>
      </div>
      <br />
      <br />
      <ClearBtn todos={props.todos} />
    </div>
  );
}
