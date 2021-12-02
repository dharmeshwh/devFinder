import { useSelector } from "react-redux";
import styled from "styled-components";
const Style = styled.div`
  font-family: "Heebo", sans-serif;
  font-family: "M PLUS Code Latin", sans-serif;
  font-family: "Quicksand", sans-serif;
  /* font-family: "Source Code Pro", monospace; */
  width: 54%;
  margin: auto;
  padding: 3%;
  background-color: #5f6368;
  border-radius: 10px;
  .div1 {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    .imgdiv {
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 150px;
      img {
        width: 120px;
        border-radius: 50%;
      }
    }
  }
  .aboutdiv {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    .abouttwo {
      width: 100%;
      display: flex;
      justify-content: space-between;
      h1 {
        padding: 0;
        font-size: 26px;
        font-weight: 700;
        margin: 0;
        color: #e4e5e7;
      }
      p {
        padding: 0;
        margin: 0;
      }
    }
  }
  .blackdiv {
    width: 100%;
    background-color: #202124;
    border-radius: 8px;
    color: #e4e5e7;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0px 0px 8px;
    .blackchild {
      color: #e4e5e7;
      display: flex;
      flex-direction: column;
      padding: 16px 16px 8px;
      text-align: center;
      p {
        padding: 0;
        margin: 0;
        color: #fddb00;
        font-size: 16.8px;
        text-align: center;
      }
      h1 {
        padding: 0;
        margin: 0;
        color: #e4e5e7;
        font-size: 32px;
        font-weight: 700;
        text-align: center;
      }
    }
  }
  .finalPart {
    width: 100%;
    color: #e4e5e7;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .details {
      color: #e4e5e7;
      margin: 0px 16px;
      padding-top: 15px;
      display: flex;

      align-items: center;
      gap: 10px;
      width: 320px;
      i {
        color: #e4e5e7;
        fill: #e4e5e7;
        width: 30px;
        margin-left: 10px;
        font-size: 25px;
        /* margin: 0px 16px 0px 0px; */
      }
    }
  }
  .linkdin {
    color: #fddb00;
    display: inline;
    align-items: center;
    /* font-family: Red Hat Text; */
  }
  .gitName {
    color: #fddb00;
    display: inline;
    font-size: 17.6px;
    font-weight: 500;
  }
  .intro {
    font-weight: 600;
    color: #e4e5e7;
  }
  .date {
    color: #e4e5e7;
    font-size: 13.6px;
    font-weight: 500;
  }
`;
export const Bottom = ({light}) => {
  const { data, loading, error } = useSelector((store) => store);
  let time = data.created_at.split("T")[0].split("-");
  let temp = time[0];
  time[0] = time[2];
  time[2] = temp;
  let month = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  month = month[+time[1]];
  time[1] = month;
  let day = time[0],
    year = time[2];
  return loading ? (
    "...loading"
  ) : error ? (
    ".error"
  ) : (
    <Style>
      <div className="div1">
        <div className="imgdiv">
          <img src={data.avatar_url} alt="" />
        </div>
        <div className="aboutdiv">
          <div className="abouttwo">
            <div>
              <h1>{data.name}</h1>
              <p className={light ? "gitName theme" : 'gitName'}>@{data.login}</p>
            </div>
            <p className="date">Joined {day + " " + month + " " + year}</p>
          </div>
          <div>
            <p className="intro">{data.bio}</p>
          </div>
        </div>
      </div>
      <div className="blackdiv">
        <div className="blackchild">
          <p className={light ? 'theme' : ''}>Repoes</p>
          <h1>{data.public_repos}</h1>
        </div>
        <div className="blackchild">
          <p className={light ? 'theme' : ''}>Gists</p>
          <h1>{data.public_gists}</h1>
        </div>
        <div className="blackchild">
          <p className={light ? 'theme' : ''}>Following</p>
          <h1>{data.following}</h1>
        </div>
        <div className="blackchild">
          <p className={light ? 'theme' : ''}>Followers</p>
          <h1>{data.followers}</h1>
        </div>
      </div>
      <div className="finalPart">
        <div className="details">
          <i className="fa fa-building" aria-hidden="true"></i>
          <p>{data.location}</p>
        </div>
        <div className="details">
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <p>{data.twitter_username || "Not Found"}</p>
        </div>
        <div className="details">
          <i className="fa fa-link" aria-hidden="true"></i>
          <p className={light ? "theme linkdin" : 'linkdin'}>{data.blog}</p>
        </div>
        <div className="details">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <p>{data.location}</p>
        </div>
      </div>
    </Style>
  );
};
