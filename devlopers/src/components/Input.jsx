import styled from "styled-components";

const Style = styled.div`
  margin-bottom: 40px;
  .main {
    font-family: "Heebo", sans-serif;
    font-family: "M PLUS Code Latin", sans-serif;
    font-family: "Quicksand", sans-serif;
    font-family: "Source Code Pro", monospace;
    width: 60%;
    margin: auto;
    .upperBox {
      display: flex;
      justify-content: space-between;
      margin: auto;
      align-items: center;
      width: 98%;
      color: white;
      p:nth-child(1) {
        font-weight: 600;
        color: white;
        font-size: 20px;
      }
      i {
        padding-right: 8px;
        font-size: 20px;
        color: #fddb00;
      }
    }
    form {
      display: flex;
      flex-direction: row;
      padding: 4px;
      background-color: #5f6368;
      border-radius: 8px;
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
      background-color: transparent;
      border-radius: 5px;
      padding: 4px;
    }

    input:focus {
      outline: none;
      color: white;
    }
    input::-webkit-input-placeholder {
      font-size: 17px;
      font-weight: 200;
      color: #ebebeb;
      /* line-height: 3; */
    }
    input[type="text"] {
      font-size: 20px;
    }

    button {
      border: none;
      background-color: #fddb00;
      /* color: white; */
      width: 80px;
      padding: 1px;
      font-size: 16px;
      font-weight: 400;
      border-radius: 8px;
    }
  }
`;

export const Input = () => {
  return (
    <Style>
      <div className="main">
        <div className="upperBox">
          <p>DEVFINDER</p>
          <p>
            <i className="fa fa-sun-o" aria-hidden="true"></i>
            Light
          </p>
        </div>
        <form>
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
          <input type="text" placeholder="Search your ac here..." />
          <button>Search</button>
        </form>
      </div>
    </Style>
  );
};
