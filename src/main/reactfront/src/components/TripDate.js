import styled from "styled-components";
import fairyImg from "../img/fairy.png";

const DateContainer = styled.div`
  input[type="date"] {
    border: none;

    &:focus {
      outline: none;
    }
  }
  #tripstart {
    padding: 0 0.5rem 0 1rem;
  }
  #tripend {
    padding-left: 0.5rem;
  }
  height: 100%;
`;
const TripDestination = styled.div`
  div:first-child {
    padding: 1rem 1rem 0 1rem;
    font-size: 2rem;
  }
  div {
    padding-top: 1rem;
  }
`;
const TripHour = styled.div`
  display: flex;
  padding: 1rem;

  p:last-child {
    color: blue;
    padding-left: 10px;
    &::after {
      /* content: "";

      width: 5px;
      height: 5px;
      border: 1px solid black;
      padding-left: 15px; */
    }
  }
`;
const Tripinfo = styled.div`
  padding: 0 0.5rem 0.5rem 0.5rem;
  table {
    border-spacing: 0;
    width: 100%;
    padding: 1rem 0 1rem 0;
    text-align: center;
    font-size: 0.8rem;
    thead {
      tr {
        background-color: #fafafa;
        color: #b8bdc4;
        th {
          padding: 0.6rem;
        }
      }
    }

    td {
      font-size: 14px;
      padding: 0.1rem;
    }
  }
  input[type="time"] {
    border: none;
    text-align: center;
  }
`;
const Button = styled.button`
  width: 100%;
  border: none;
  background-color: black;
  color: white;
  padding: 10px 0;
  border-radius: 5px;
  cursor: pointer;
`;

function TripDate() {
  return (
    <DateContainer>
      <TripDestination>
        <div>
          <p>경주</p>
        </div>
        <div>
          <input type="date" id="tripstart" />
          ~
          <input type="date" id="tripend" />
        </div>
      </TripDestination>
      <TripHour>
        <p>여행시간 설정</p>
        <p>총120시간 00분</p>
      </TripHour>

      <Tripinfo>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quam
          quia dignissimos molestiae obcaecati! Obcaecati accusantium ipsum
          perspiciatis sit labore minus similique, velit laudantium assumenda,
          voluptatibus illum quidem delectus placeat.
        </p>
        <table>
          <thead>
            <tr>
              <th>일자</th>
              <th>요일</th>
              <th>시작시간</th>
              <th>종료시간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>12/24</th>
              <td>수</td>
              <td>
                <input type="time" name="" id="" />
              </td>
              <td>
                <input type="time" name="" id="" />
              </td>
            </tr>
            <tr>
              <th>12/24</th>
              <td>목</td>
              <td>
                <input type="time" name="" id="" />
              </td>
              <td>
                <input type="time" name="" id="" />
              </td>
            </tr>
          </tbody>
        </table>
        <Button>시간 설정 완료</Button>
      </Tripinfo>
    </DateContainer>
  );
}

export default TripDate;
