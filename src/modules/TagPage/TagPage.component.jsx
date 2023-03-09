import React, { useEffect, Fragment, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import handleSorting from "../../utils/handleSorting";

import LinkButton from "../../components/molecules/LinkButton/LinkButton.component";
import PostItem from "../../components/molecules/PostItem/PostItem.component";
import Spinner from "../../components/molecules/Spinner/Spinner.component";
import ButtonGroup from "../../components/molecules/ButtonGroup/ButtonGroup.component";

import "./TagPage.styles.scss";

const TagPage = () => {
  const { tagname } = useParams();

  const [sortType, setSortType] = useState("Newest");

  return (
    <Fragment>
      <div id="mainbar" className="questions-page fc-black-800">
        <div className="questions-grid">
          <h3 className="questions-headline">Questions tagged</h3>
          <div className="questions-btn">
            <LinkButton
              text={"Ask Question"}
              link={"/add/question"}
              type={"s-btn__primary"}
            />
          </div>
        </div>
        <p
          className="fs-body"
          // dangerouslySetInnerHTML={{__html: tag.tag.description}}
        />
        <div className="questions-tabs">
          <span>
            {/* {new Intl.NumberFormat('en-IN').format(tag.tag.posts_count)}{' '} */}
            {/* {tag.tag.posts_count === 1 ? 'question' : 'questions'} */}
          </span>
          <ButtonGroup
            buttons={["Newest", "Top", "Views", "Oldest"]}
            selected={sortType}
            setSelected={setSortType}
          />
        </div>
        <div className="questions">
          {/* {tag.tag.posts_count === 0 ? (
            <h4 style={{margin: '30px 30px'}}>
              There are no questions from this tag
            </h4>
          ) : (
            posts
              ?.sort(handleSorting(sortType))
              .map((post, index) => <PostItem key={index} post={post} />)
          )} */}
          ind
        </div>
      </div>
    </Fragment>
  );
};

export default TagPage;
