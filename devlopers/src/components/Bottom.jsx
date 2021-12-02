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
        color: white;
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
    color: #f5f8ff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0px 0px 8px;
    .blackchild {
      color: #f5f8ff;
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
        color: #f5f8ff;
        font-size: 32px;
        font-weight: 700;
        text-align: center;
      }
    }
  }
  .finalPart {
    width: 100%;
    color: #f5f8ff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .details {
      color: #f5f8ff;
      margin: 0px 16px;
      padding-top: 15px;
      display: flex;

      align-items: center;
      gap: 10px;
      width: 320px;
      i {
        color: #f5f8ff;
        fill: #f5f8ff;
        width: 30px;
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
    color: white;
  }
  .date {
    color: #f5f8ff;
    font-size: 13.6px;
    font-weight: 500;
  }
`;
export const Bottom = () => {
  return (
    <Style>
      <div className="div1">
        <div className="imgdiv">
          <img
            src="https://avatars.githubusercontent.com/u/87421773?v=4"
            alt=""
          />
        </div>
        <div className="aboutdiv">
          <div className="abouttwo">
            <div>
              <h1>Dharmesh</h1>
              <p className="gitName">@Dharmesh</p>
            </div>
            <p className="date">joined 12/12/12</p>
          </div>
          <div>
            <p className="intro">
              A Full Stack Web Developer who is Self-motivated and curious.
            </p>
          </div>
        </div>
      </div>
      <div className="blackdiv">
        <div className="blackchild">
          <p>Repoes</p>
          <h1>5</h1>
        </div>
        <div className="blackchild">
          <p>Gits</p>
          <h1>5</h1>
        </div>
        <div className="blackchild">
          <p>Following</p>
          <h1>556</h1>
        </div>
        <div className="blackchild">
          <p>Followers</p>
          <h1>5</h1>
        </div>
      </div>
      <div className="finalPart">
        <div className="details">
          <i className="fa fa-building" aria-hidden="true"></i>
          <p>Gurugram haryana</p>
        </div>
        <div className="details">
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <p>Gurugram haryana</p>
        </div>
        <div className="details">
          <i className="fa fa-link" aria-hidden="true"></i>
          <p className="linkdin">https://www.linkedin.com/in/dharmesh-yadav/</p>
        </div>
        <div className="details">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <p>Gurugram haryana</p>
        </div>
      </div>
    </Style>
  );
};
