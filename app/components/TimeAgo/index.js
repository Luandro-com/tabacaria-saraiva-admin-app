/**
*
* TimeAgo
*
*/

import React from 'react';

import ReactTimeAgo from 'react-timeago';
import ptStrings from 'react-timeago/lib/language-strings/pt-br';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

function TimeAgo({ date }) {
  const formatter = buildFormatter(ptStrings);
  return (
    <ReactTimeAgo date={date} formatter={formatter} />
  );
}

TimeAgo.propTypes = {
  date: React.PropTypes.number.isRequired,
};

export default TimeAgo;
