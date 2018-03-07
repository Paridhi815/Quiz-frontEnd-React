import React from 'react';
import PropTypes from 'prop-types';
import './OptionsPane.css';

const OptionsPane = (props) => {
  const localqid = props.questionId;
  // const persist = props.ansPersist;
  // let ansQid;
  // let selectionOption;
  // let check = false;
  // console.log(persist, 'persit');
  // persist.forEach((element) => {
  //   ansQid = element.qid;
  //   if (localqid === ansQid) {
  //     selectionOption = element.selectedoption;
  //     if (selectionOption === props.option) {
  //       check = true;
  //     }
  //   }
  // });
  // console.log(selectionOption === props.option, 'checked value');
  return (
    <div className="OptionPane">
      <input
        type="radio"
        className="radio"
        name={props.questionId}
        value={props.option}
        // onChange={(event, questionId) => props.handleOptionChange(event, props.questionId)}
        // checked={check}
      />
      <p className="text"> {props.option}</p>
      <br />
    </div>
  );
};


OptionsPane.propTypes = {
  questionId: PropTypes.number,
  // ansPersist: PropTypes.array,
  option: PropTypes.string,
  // handleOptionChange: PropTypes.func.isRequired,
};

OptionsPane.defaultProps = {
  questionId: 0,
  // ansPersist: [],
  option: '',
};

export default OptionsPane;
