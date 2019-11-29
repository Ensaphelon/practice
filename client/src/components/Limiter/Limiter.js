import React from 'react';
import classnames from 'classnames';

import { Button } from 'grommet';

import classes from './styles';

const Limiter = ({ limits, currentLimit, onChange }) => {
  const handleChooseLimit = limit => () => onChange(limit);

  return (
    <div className={classes.root}>
      <div className={classes.label}>Show</div>
      <ul className={classes.list}>
        {limits.map(limit => (
          <li key={limit} className={classnames(classes.item, { [classes.active]: limit === Number(currentLimit) })}>
            <Button label={limit} onClick={handleChooseLimit(limit)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Limiter;
