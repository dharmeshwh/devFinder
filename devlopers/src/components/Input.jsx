import { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getDataError, getDataLoading, getDataSucess } from "../redux/action";
import { Bottom } from "./Bottom";
import { useSelector } from "react-redux";
const Style = styled.div`
  margin-bottom: 40px;
  .theme {
    color: #006eff !important;
  }
  .back {
    background-color: white !important;
  }
  .light {
    color: #202124 !important;
    input:focus {
      outline: none;
      color: #202124 !important;
    }
    input::-webkit-input-placeholder {
      font-size: 17px;
      font-weight: 200;
      color: #202124 !important;
      /* line-height: 3; */
    }
    input {
      color: #202124 !important;
    }
  }
  .themebtn {
    background-color: #006eff !important;
    color: white !important;
  }
  .hehe {
    position: absolute;
    top: 100px;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .main {
    font-family: "Heebo", sans-serif;
    font-family: "M PLUS Code Latin", sans-serif;
    font-family: "Quicksand", sans-serif;
    font-family: "Source Code Pro", monospace;
    width: 60%;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 20px;
    .upperBox {
      display: flex;
      justify-content: space-between;
      margin: auto;
      align-items: center;
      width: 98%;
      color: #e4e5e7;
      p:nth-child(1) {
        font-weight: 600;
        color: #e4e5e7;
        font-size: 20px;
        cursor: pointer;
      }
      i {
        padding-right: 8px;
        font-size: 18px;
        color: #fddb00;
      }
      .daynight {
        cursor: pointer;
      }
    }
    .form {
      display: flex;
      flex-direction: row;
      padding: 4px;
      background-color: #5f6368;
      border-radius: 10px;
      i {
        width: 60px;
        align-items: center;
        font-weight: 200 !important;
        color: #fddb00;
      }
    }

    input {
      flex-grow: 2;
      border: none;
      height: 35px;
      color: #e4e5e7;
      background-color: transparent;
      border-radius: 5px;
      padding: 4px;
      width: 100%;
      /* background-color: red; */
    }

    input:focus {
      outline: none;
      color: #e4e5e7;
    }
    input::-webkit-input-placeholder {
      font-size: 17px;
      font-weight: 200;
      color: #e4e5e7;
      /* line-height: 3; */
    }
    input[type="text"] {
      font-size: 20px;
    }

    button {
      border: none;
      background-color: #fddb00;
      color: #1a1a1b;
      cursor: pointer;
      width: 80px;
      padding: 1px;
      font-size: 16px;
      font-weight: 400;
      border-radius: 10px;
      transition: 0.3s all;
    }
    button:active{
      transform: scale(0.95);
    }
  }
  .abc {
    box-shadow: 0px 0px 3px #c3c4c3 !important;
  }
  .loading {
    width: 140px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0px 0px 4px #afaeae;
    position: absolute;
    /* top:0; */
    bottom: 20px;
    margin: auto;
    left: 0%;
    right: 0%;
    font-weight: 400;
    background-color: white;
    display: flex;
    height: 35px;
    align-items: center;
    gap: 15px;
    padding: 5px;
    font-size: 14px;
    color: #5f6368;
    /* justify-content: space-around; */
    text-align: center;
    div {
      align-items: center;
    }
    img {
      width: 30px;
      margin-left: 10px;
      height: 30px;
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .main{
      width: 92%;
      margin: auto;
    }
    button{
      font-size: 13px!important;
    }
  }
`;

export const Input = () => {
  const dispatch = useDispatch();
  const { light, handleLight } = useContext(ThemeContext);
  const [text, setText] = useState("");
  const handleButton = () => {
    if(!text)return;
    else if(text.trim() === data.login)return;
    else{
     dispatch(getDataLoading());
    setTimeout(async () => {
      try {
        const { data } = await axios.get(
          `https://api.github.com/users/${text}`
        );
        setText('')
        dispatch(getDataSucess(data));
      } catch (err) {
        dispatch(getDataError(err));
      }
    }, 800);
   }
  };
  const { data, error, loading, system } = useSelector((store) => store);
  light
    ? (document.body.style.backgroundColor = "#f5f8ff")
    : (document.body.style.backgroundColor = "#202124");

  return (
    <Style>
      <div className={data.length !== 0 || error ? "main" : "main hehe"}>
        <div className={light ? "upperBox light" : "upperBox"}>
          <p className={light ? "light" : ""}>DEVFINDER</p>
          <p
            className="daynight"
            onClick={() => {
              handleLight(light ? false : true);
            }}
          >
            <i
              className={light ? "fa fa-moon-o theme" : "fa fa-sun-o"}
              aria-hidden="true"
            ></i>
            {light ? "Dark" : "Light"}
          </p>
        </div>
        <div className={light ? "form back abc light" : "form"}>
          <i
            style={{
              fontSize: "30px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              fontWeight: "200",
            }}
            className={light ? "fa fa-search theme" : "fa fa-search"}
            aria-hidden="true"
          ></i>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            onKeyUp={(e) => {
              if (e.keyCode === 13) {
                // Cancel the default action, if needed
                e.preventDefault();
                handleButton();
              }
            }}
            placeholder="Find Your Github Here"
          />
          <button
            className={light ? "themebtn" : ""}
            onClick={() => handleButton()}
          >
            Search
          </button>
        </div>
      </div>
      {/* {data.length !== 0 ? <Bottom light={light} /> : ""} */}
      {loading ? (
        <div className="loading">
          <img src="https://c.tenor.com/5o2p0tH5LFQAAAAj/hug.gif" alt="" />{" "}
          loading
        </div>
      ) : error ? (
        <div className="loading">
          <div>
            <img
              src="https://c.tenor.com/JWrO9tZNp7IAAAAi/cross-logo-letter-x.gif"
              alt=""
            />
          </div>{" "}
          No data
        </div>
      ) : system ? (
        <Bottom light={light} />
      ) : (
        ""
      )}
    </Style>
  );
};
