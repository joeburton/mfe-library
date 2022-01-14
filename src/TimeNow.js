import React from 'react';

export const TimeNow = () => {
  return <div>{new Date().toLocaleTimeString()}</div>;
};
