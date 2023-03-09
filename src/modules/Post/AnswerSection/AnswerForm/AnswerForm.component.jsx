import React, { Fragment, useState, useRef } from "react";

import LinkButton from "../../../../components/molecules/LinkButton/LinkButton.component";
import MarkdownEditor from "../../../../components/organisms/MarkdownEditor/MarkdownEditor.component";

import "./AnswerForm.styles.scss";

const AnswerForm = ({ addAnswer, auth, post: { post } }) => {
  const [formData, setFormData] = useState({
    content: "",
  });

  const markdownEditorRef = useRef(null);

  const { content } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // addAnswer(post.id, { content });
    setFormData({
      content: "",
    });
    markdownEditorRef.current.cleanEditorState();
  };

  const updateConvertedContent = (htmlConvertedContent) => {
    setFormData({ ...formData, content: htmlConvertedContent });
  };

  return (
    <Fragment>
      {!auth.loading && auth.isAuthenticated ? (
        <Fragment>
          <form className="answer-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="answer-grid">
              <label className=" fc-black-800">Your Answer</label>
              <div className="s-textarea rich-text-editor-container">
                <MarkdownEditor
                  ref={markdownEditorRef}
                  onChange={updateConvertedContent}
                />
              </div>
              <button className="s-btn s-btn__primary">Post Your Answer</button>
            </div>
          </form>
        </Fragment>
      ) : (
        <Fragment>
          <LinkButton
            text={"You need to login to add an answer"}
            link={"/login"}
            type={"s-btn__outlined"}
            marginTop={"12px"}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default AnswerForm;
