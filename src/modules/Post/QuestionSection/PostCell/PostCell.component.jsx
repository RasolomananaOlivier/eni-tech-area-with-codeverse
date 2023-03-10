import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import TagBadge from "../../../../components/molecules/TagBadge/TagBadge.component";
import UserCard from "../../../../components/molecules/UserCard/UserCard.component";

import "./PostCell.styles.scss";
import censorBadWords from "../../../../utils/censorBadWords";
import { Box, Stack } from "@mui/material";

const PostCell = () => {
  return (
    <Fragment>
      <Stack spacing={2} className="post-cell">
        <div
          className="post-text fc-black-800"
          // dangerouslySetInnerHTML={{ __html: censorBadWords(body) }}
        ></div>
        <Box
          className="post-tags fc-black-800"
          sx={{ display: "flex", gap: 1 }}
        >
          {/* {tags.map((tag, index) => (
            <TagBadge
              key={index}
              tag_name={tag.tag_name}
              size={"s-tag"}
              float={"left"}
            />
          ))} */}
        </Box>
        <div className="post-actions fc-black-800">
          <div className="post-actions-extended">
            <div className="post-btns">
              <div className="post-menu">
                <Link
                  className="post-links"
                  title="short permalink to this question"
                  to="/"
                >
                  share
                </Link>
                <Link
                  className="post-links"
                  title="Follow this question to receive notifications"
                  to="/"
                >
                  follow
                </Link>
                {/* {!auth.loading &&
                  auth.isAuthenticated &&
                  user_id === auth.user.id && (
                    <Link
                      className="s-link s-link__danger"
                      style={{ paddingLeft: "4px" }}
                      title="Delete the post"
                      onClick={(e) => deletePost(id)}
                      to="/questions"
                    >
                      delete
                    </Link>
                  )} */}
              </div>
            </div>
            {/* <UserCard
              created_at={created_at}
              user_id={user_id}
              gravatar={gravatar}
              username={username}
            /> */}
          </div>
        </div>
      </Stack>
    </Fragment>
  );
};

export default PostCell;
