import React, { Fragment, useEffect, useState } from "react";
import handleSorting from "../../utils/handleSorting";

import UserPanel from "./UserPanel/UserPanel.component";
import Spinner from "../../components/molecules/Spinner/Spinner.component";
import SearchBox from "../../components/molecules/SearchBox/SearchBox.component";
import ButtonGroup from "../../components/molecules/ButtonGroup/ButtonGroup.component";
import Pagination from "../../components/organisms/Pagination/Pagination.component";

import "./AllUsersPage.styles.scss";

const itemsPerPage = 18;

const AllUsersPage = () => {
  const [page, setPage] = useState(1);
  const [fetchSearch, setSearch] = useState("");
  const [sortType, setSortType] = useState("Popular");

  const handlePaginationChange = (e, value) => setPage(value);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <Fragment>
      <div id="mainbar" className="users-page fc-black-800">
        <h1 className="headline">Users</h1>
        <div className="headline-count">
          <span>
            {/* {new Intl.NumberFormat("en-IN").format(users.length)} users */}
          </span>
        </div>
        <div className="users-box pl16 pr16 pb16">
          <SearchBox
            placeholder={"filter by user"}
            handleChange={handleChange}
            width={"200px"}
          />
          <ButtonGroup
            buttons={["Popular", "Name", "Active", "New Users"]}
            selected={sortType}
            setSelected={setSortType}
          />
        </div>
        <div className="user-browser">
          <div className="grid-layout">
            {/* {users
              .filter((user) =>
                user.username.toLowerCase().includes(fetchSearch.toLowerCase())
              )
              ?.sort(handleSorting(sortType, "users"))
              .slice(
                (page - 1) * itemsPerPage,
                (page - 1) * itemsPerPage + itemsPerPage
              )
              .map((user, index) => (
                <UserPanel key={index} user={user} />
              ))} */}
            users
          </div>
        </div>
        {/* <Pagination
          page={page}
          itemList={users.filter((user) =>
            user.username.toLowerCase().includes(fetchSearch.toLowerCase())
          )}
          itemsPerPage={itemsPerPage}
          handlePaginationChange={handlePaginationChange}
        /> */}
      </div>
    </Fragment>
  );
};

export default AllUsersPage;
