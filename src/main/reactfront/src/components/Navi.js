import styled from "styled-components";
import { Link } from "react-router-dom";
import "../css/Navi.css";

const StyleLink = styled(Link)`
  color: gray;
  padding: 28px 8px;
  text-decoration: none;
`;
function Navi() {
  return (
    <div className="nav_container">
      <div>
        <div className="logo"></div>

        <div className="nav">
          <StyleLink to="/notfound">여행지</StyleLink>
          <StyleLink to="/notfound">고객지원</StyleLink>
          <StyleLink to="/notfound">이용방법</StyleLink>
          <StyleLink to="/login">로그인</StyleLink>
        </div>
      </div>
    </div>
  );
}

export default Navi;
