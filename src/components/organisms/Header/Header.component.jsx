import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { ReactComponent as Search } from "../../../assets/Search.svg";
// import { ReactComponent as Logo } from "../../../assets/LogoMd.svg";
import { ReactComponent as SmallLogo } from "../../../assets/LogoGlyphMd.svg";
import Spinner from "../../molecules/Spinner/Spinner.component";
import LinkButton from "../../molecules/LinkButton/LinkButton.component";
import MobileSideBar from "../../organisms/MobileSideBar/MobileSideBar.component";
import Logo from "../../../assets/logo.png";

import "./Header.styles.scss";

const Header = () => {
  const [searchState, setSearchState] = useState(false);

  // const authLinks = (
  //   <div className="btns">
  //     {loading || user === null ? (
  //       <Spinner width="50px" height="50px" />
  //     ) :
  //     <Link to={`/users/${user.id}`} title={user.username}>
  //       <img alt="user-logo" className="logo" src={user.gravatar} />
  //     </Link>
  //     null}
  //     <LinkButton
  //       text={"Log out"}
  //       link={"/login"}
  //       type={"s-btn__filled"}
  //       handleClick={logout}
  //     />
  //   </div>
  // );

  const authTabs = (
    <div className="s-navigation">
      <Link to="/" className="s-navigation--item is-selected">
        Products
      </Link>
    </div>
  );

  const guestTabs = (
    <div className="s-navigation">
      <Link to="/" className="s-navigation--item">
        Home
      </Link>
      <Link to="/Profil" className="s-navigation--item not-selected">
        Profile
      </Link>
      <Link to="/settings" className="s-navigation--item not-selected">
        Settings
      </Link>
    </div>
  );

  const guestLinks = (
    <div className="btns">
      <LinkButton text={"Log in"} link={"/login"} type={"s-btn__primary"} />
      {/* <LinkButton text={"Sign up"} link={"/register"} type={"s-btn__filled"} /> */}
    </div>
  );

  const SearchBar = () => {
    return (
      <form className="small-search-form" autoComplete="off">
        <input
          className="small-search"
          autoComplete="off"
          type="text"
          name="search"
          maxLength="35"
          placeholder="Search..."
        />
        <Search className="small-search-icon" />
      </form>
    );
  };

  // return loading ? (
  //   ""
  // ) : (
  return (
    <Fragment>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bs-md">
        <div className="hamburger">
          <MobileSideBar hasOverlay />
        </div>
        <div className="header-brand-div">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo" />
          </Link>
          {/* {!loading && <Fragment>{guestTabs}</Fragment>} */}
        </div>

        <form
          id="search"
          className={`grid--cell fl-grow1 searchbar px12 js-searchbar`}
          autoComplete="off"
        >
          <div className="ps-relative search-frame">
            <input
              className="s-input s-input__search h100 search-box"
              autoComplete="off"
              type="text"
              name="search"
              maxLength="35"
              placeholder="Search..."
            />
            <Search />
          </div>
        </form>
        <div className="header-search-div">
          <Search
            className="search-icon"
            onClick={() => setSearchState(!searchState)}
          />
          {/* {!loading && <Fragment>{true ? authLinks : guestLinks}</Fragment>} */}
        </div>
      </nav>
      {searchState && <SearchBar />}
    </Fragment>
  );
};

export default Header;
