import React, { Component } from 'react';
import css from './counter.module.css';
import IncrementButton from './IncrementButton.js';
import DecrementButton from './DecrementButton.js';
import Value from './Value';
import Steps from './Steps';

export default function Counter2(props) {
  const handleButtonClick = (clickType) => {
    props.onCount(clickType);
  };
  const { countValue, currentStep } = props;
  return (
    <div className={css.counterContainer}>
      <DecrementButton onDecrement={handleButtonClick} />
      <Value value={countValue} />
      <IncrementButton onIncrement={handleButtonClick} />
      <Steps value={currentStep} />
    </div>
  );
}
