import React, { useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";

import UserSection from "./UserSection/UserSection.component";
import Spinner from "../../components/molecules/Spinner/Spinner.component";
import ExternalUserDetails from "./ExternalUserDetails/ExternalUserDetails.component";
import UserActivity from "./UserActivity/UserActivity.component";

import "./ProfilePage.styles.scss";

const ProfilePage = () => {
  const { id } = useParams();

  return (
    <Fragment>
      <div id="mainbar" className="user-main-bar pl24 pt24">
        <div className="user-card">
          <div className="grid--cell s-navigation mb16">
            <Link
              to="#"
              className="s-navigation--item is-selected"
              data-shortcut="P"
            >
              Profile
            </Link>
            <Link to="#" className="s-navigation--item" data-shortcut="A">
              Activity
            </Link>
          </div>
          {/* <UserSection user={user}/> */}
        </div>
        <div className="row-grid">
          {/* <ExternalUserDetails /> */}
          {/* <UserActivity /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default ProfilePage;
