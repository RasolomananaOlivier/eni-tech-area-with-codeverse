import React, { Fragment, useEffect, useState } from "react";
import LinkButton from "../../components/molecules/LinkButton/LinkButton.component";
import PostItem from "../../components/molecules/PostItem/PostItem.component";
import Spinner from "../../components/molecules/Spinner/Spinner.component";
import handleSorting from "../../utils/handleSorting";
import Pagination from "../../components/organisms/Pagination/Pagination.component";
import ButtonGroup from "../../components/molecules/ButtonGroup/ButtonGroup.component";
import handleFilter from "../../utils/handleFilter";

import "./HomePage.styles.scss";
import ChangePassword from "../../components/ChangePasswordModal/Dialog";
import Tags from "../../components/Tags";

import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import LayoutWrapper from "../../components/organisms/LayoutWrapper/LayoutWrapper.component";
import { useQuery } from "@tanstack/react-query";
import { getQuestionsByUserTags } from "../../api/questionApi";

const itemsPerPage = 10;

const HomePage = () => {
  const URL = useLocation();
  const [open, setOpen] = React.useState(false);
  const [TagsOpen, setTagsOpen] = React.useState(false);

  React.useEffect(() => {
    if (URL.search === "?first=true") {
      setOpen(true);
    }
  }, [URL]);

  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState("Month");

  const handlePaginationChange = (e, value) => setPage(value);

  const questionsQuery = useQuery({
    queryKey: ["questions", "suggestions"],
    queryFn: getQuestionsByUserTags,
  });

  if (questionsQuery.isLoading) {
    return <div>Loading</div>;
  }

  console.log(questionsQuery.data);
  return (
    <LayoutWrapper>
      <Box
        id="mainbar"
        className="homepage fc-black-800"
        sx={{ bgcolor: "#323741", pr: 2 }}
      >
        <Box className="questions-grid" sx={{ pr: 3 }}>
          <h3 className="questions-headline">Questions You May Know.</h3>
          <div className="questions-btn">
            <LinkButton
              text={"Ask Question"}
              link={"/add/question"}
              type={"s-btn__primary"}
            />
          </div>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: 3, pr: 4.5 }}
        >
          <span>
            {/* {new Intl.NumberFormat("en-IN").format(posts.length)} questions */}
          </span>
          <div className="btns-filter">
            <ButtonGroup
              buttons={["Today", "Week", "Month", "Year"]}
              selected={sortType}
              setSelected={setSortType}
            />
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
        <ChangePassword
          open={open}
          setOpen={setOpen}
          setTagsOpen={setTagsOpen}
        />
        <Tags TagsOpen={TagsOpen} setTagsOpen={setTagsOpen} />
      </Box>
    </LayoutWrapper>
  );
};

export default HomePage;
