import React from 'react';

import { PersonalDetails } from './PersonalDetails';
import { TimeNow } from './TimeNow';
import { Button } from './Components';

export default () => (
  <div>
    <h1>UI LIBRARY (MFE)</h1>
    <PersonalDetails name='James Brown' dob='3 May 1933' />
    <TimeNow />
    <Button text='My Custom Button' />
  </div>
);
