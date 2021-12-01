import styled from "styled-components";

const Style = styled.div`
  background-color: #707070;
  height: 500px;
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

      p:nth-child(1) {
        font-weight: 600;
        font-size: 20px;
      }
      i {
        padding-right: 8px;
        font-size: 20px;
        color: red;
      }
    }
    form {
      display: flex;
      flex-direction: row;
      border: 1px solid grey;
      padding: 4px;
      background-color: white;
      border-radius: 8px;
      i {
        width: 60px;
        align-items: center;
        font-weight: 25px;
      }
    }

    input {
      flex-grow: 2;
      border: none;
      height: 40px;
      border-radius: 5px;
      padding: 4px;
    }

    input:focus {
      outline: none;
    }
    input::-webkit-input-placeholder {
      font-size: 18px;
      /* line-height: 3; */
    }
    input[type="text"] {
      font-size: 20px;
    }

    button {
      border: none;
      background-color: green;
      color: white;
      width: 90px;
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
              fontWeight:'200'
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
