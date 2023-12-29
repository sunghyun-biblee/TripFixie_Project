import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "../css/MainSection.css";

function MainSection() {
  const [gobutton, setButton] = useState(false);
  const navigate = useNavigate();
  const onClicks = () => {
    if (!gobutton) {
      setButton(true);
    } else {
      setButton(false);
      navigate("/trip");
    }
  };
  return (
    <div className="MainSection_container">
      <div className="main_box">
        <div className="left_box">
          <h1>
            기존에 경험하지 못한 <br /> 새로운 플래너
          </h1>
          <span>
            고민만 하던 여행 계획을 <b>여행요정</b>을 통해 몇분만에 스케줄링
            해보세요
          </span>
          {gobutton ? (
            <button className="main_btn" onClick={onClicks}>
              여행 시작해볼까요?
            </button>
          ) : (
            <button className="main_btn" onClick={onClicks}>
              여행시작 하기
            </button>
          )}
        </div>
        <div>
          <img
            className="main_img"
            src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
