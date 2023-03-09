import React, { Fragment, useState, useEffect } from "react";
import handleSorting from "../../../utils/handleSorting";

import AnswerItem from "./AnswerItem/AnswerItem.component";
import Spinner from "../../../components/molecules/Spinner/Spinner.component";
import AnswerForm from "./AnswerForm/AnswerForm.component";
import ButtonGroup from "../../../components/molecules/ButtonGroup/ButtonGroup.component";

import "./AnswerSection.styles.scss";

const AnswerSection = () => {
  const [sortType, setSortType] = useState("Newest");

  // console.log(answer);
  return (
    <Fragment>
      <div className="answer">
        <div className="answer-header fc-black-800">
          <div className="answer-sub-header">
            <div className="answer-headline">
              <h2>Answers</h2>
            </div>
            <ButtonGroup
              buttons={["Newest", "Oldest"]}
              selected={sortType}
              setSelected={setSortType}
            />
          </div>
        </div>
        {/* {answer.loading === null ? (
          <Spinner width="25px" height="25px" />
        ) : (
          answer.answers?.sort(handleSorting(sortType)).map((answer, index) => (
            <div key={index} className="answers">
              <AnswerItem answer={answer} />
            </div>
          ))
        )} */}
        answers
        <div className="add-answer">
          <AnswerForm />
        </div>
      </div>
    </Fragment>
  );
};

export default AnswerSection;
