import { useState } from "react";
import styled from "styled-components";
import axios from 'axios'
import { useDispatch } from "react-redux";
import {getDataError, getDataLoading, getDataSucess} from '../redux/action'
import { Bottom } from "./Bottom";
import { useSelector } from "react-redux";
const Style = styled.div`
height: 100vh;
  margin-bottom: 40px;
  .hehe{
    position: absolute;
    top: 180px;
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
      }
      i {
        padding-right: 8px;
        font-size: 20px;
        color: #fddb00;
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
      width: 80px;
      padding: 1px;
      font-size: 16px;
      font-weight: 400;
      border-radius: 10px;
    }
  }
`;

export const Input = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState("");
  const handleButton = async()=>{
    dispatch(getDataLoading())
    try{
      const {data} = await axios.get(`https://api.github.com/users/${text}`)
      dispatch(getDataSucess(data))
    }
    catch(err){
     dispatch(getDataError(err))
    }
  }
  const {data,error} = useSelector((store)=>store)
  return (
    <Style>
      <div className={data.length !== 0 || error ? 'main' : 'main hehe'}>
        <div className="upperBox">
          <p>DEVFINDER</p>
          <p>
            <i className="fa fa-sun-o" aria-hidden="true"></i>
            Light
          </p>
        </div>
        <div 
        className="form"
        >
          <i
            style={{
              fontSize: "30px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              fontWeight: "200",
            }}
            className="fa fa-search"
            aria-hidden="true"
          ></i>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Search your ac here..."
          />
          <button onClick={()=>handleButton()}>Search</button>
        </div>
      </div>
     {data.length !== 0 ? <Bottom/> : ''}
    </Style>
  );
};
