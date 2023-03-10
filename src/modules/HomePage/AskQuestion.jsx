import React, { useState } from "react";
import "./HomePage.styles.scss";
import LinkButton from "../../components/molecules/LinkButton/LinkButton.component";
import PostItem from "../../components/molecules/PostItem/PostItem.component";
import Spinner from "../../components/molecules/Spinner/Spinner.component";
import handleSorting from "../../utils/handleSorting";
import Pagination from "../../components/organisms/Pagination/Pagination.component";
import ButtonGroup from "../../components/molecules/ButtonGroup/ButtonGroup.component";
import handleFilter from "../../utils/handleFilter";

import Tags from "../../components/Tags";

import ChangePassword from "../../components/ChangePasswordModal/Dialog";
import { Box } from "@mui/material";

const AskQuest = () => {
  const [sortType, setSortType] = useState("Month");
  const [open, setOpen] = React.useState(false);
  const [TagsOpen, setTagsOpen] = React.useState(false);
  return (
    <>
      <Box id="mainbar" className="homepage fc-black-800" sx={{ bgcolor: "#323741", pr: 2 }}>
        <Box className="questions-grid" sx={{ pr: 3 }}>
          <h3 className="questions-headline">Questions You May Know.</h3>
          <div className="questions-btn">
            <LinkButton text={"Ask Question"} link={"/add/question"} type={"s-btn__primary"} />
          </div>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ px: 3, pr: 4.5 }}>
          <span>{/* {new Intl.NumberFormat("en-IN").format(posts.length)} questions */}</span>
          <div className="btns-filter">
            <ButtonGroup buttons={["Today", "Week", "Month", "Year"]} selected={sortType} setSelected={setSortType} />
          </div>
        </Box>
        <Box className="questions" sx={{ pr: 3 }}>
          <div className="postQues">
            {/*   {posts
              .sort(handleSorting(sortType))
              .filter(handleFilter(sortType))
              .slice(
                (page - 1) * itemsPerPage,
                (page - 1) * itemsPerPage + itemsPerPage
              )
              .map((post, index) => (
                <PostItem key={index} post={post} />
              ))} */}
            {/* {posts.map((post, index) => (
              <PostItem key={index} post={post} />
            ))} */}
          </div>
        </Box>
        {/* <Pagination
          page={page}
          itemList={posts
            .sort(handleSorting(sortType))
            .filter(handleFilter(sortType))}
          itemsPerPage={itemsPerPage}
          handlePaginationChange={handlePaginationChange}
        /> */}
        <ChangePassword open={open} setOpen={setOpen} setTagsOpen={setTagsOpen} />
        <Tags TagsOpen={TagsOpen} setTagsOpen={setTagsOpen} />
      </Box>
    </>
  );
};
export default AskQuest;
