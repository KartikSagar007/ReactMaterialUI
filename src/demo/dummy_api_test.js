import React from 'react';
import classnames from 'classnames';
// you should import `lodash` as a whole module
import lodash from 'lodash';
import axios from 'axios';

const ITEMS_API_URL = 'https://example.com/api/items'; //items will be list of countries
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export default function Autocomplete() {
  return (
    <div className="wrapper">
      <div className="control">
        <input type="text" className="input" />
      </div>
      <div className="list is-hoverable" />
    </div>
  );
}
