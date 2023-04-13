import "./style.scss";
import React, { useState } from "react";

// component
import { LayerModal } from "../../components/modal/LayerModal";

// api
import { carrerList } from "../../api/carrerList";

export const InfoPage = () => {
  const [isCareerModal, setIsCareerModal] = useState(false);
  const [isPhoneModal, setIsPhoneModal] = useState(false);

  const onPhoneModal = () => {
    setIsPhoneModal((prev) => !prev);
  };
  const onCareerModal = () => {
    setIsCareerModal((prev) => !prev);
  };

  return (
    <div className="my-info">
      <video className="video" autoPlay={true} playsInline={true} muted={true} loop={true} controls={false}>
        <source type="video/mp4" src={require("../../assets/video/info.mp4")} />
      </video>
      <div className="img-wrap phone" onClick={onPhoneModal}>
        <div className="badge">Click Me!</div>
        <img src={require("../../assets/icon/icon-calling.svg").default} alt="" />
      </div>
      <div className="img-wrap career" onClick={onCareerModal}>
        <div className="badge">Click Me!</div>
        <img src={require("../../assets/icon/icon-career.svg").default} alt="" />
      </div>
      <LayerModal title="인적사항" content={<PhoneModal />} isModal={isPhoneModal} isModalFn={onPhoneModal} />
      <LayerModal title="경력사항" content={<CareerModal />} isModal={isCareerModal} isModalFn={onCareerModal} />
    </div>
  );
};

const CareerModal = () => {
  return (
    <>
      {carrerList.map((el, index) => {
        return (
          <div className="carrer-list" key={index}>
            <p>
              {el.company} : {el.companyInfo} ({el.startDate} ~ {el.lastDate})
            </p>
            {el.carrer.map((carrer, index) => {
              return <p key={index}> - {carrer}</p>;
            })}
          </div>
        );
      })}
    </>
  );
};

const PhoneModal = () => {
  return (
    <table>
      <tbody>
        <tr>
          <th>이름</th>
          <td>황희선</td>
        </tr>
        <tr>
          <th>생년월일</th>
          <td>1994.03.31</td>
        </tr>
        <tr>
          <th>전화번호</th>
          <td>010-7139-3044</td>
        </tr>
        <tr>
          <th>사는곳</th>
          <td>인천</td>
        </tr>
        <tr>
          <th>혈액형</th>
          <td>A형</td>
        </tr>
        <tr>
          <th>MBTI</th>
          <td>용감한 수호자(ISFJ)</td>
        </tr>
      </tbody>
    </table>
  );
};
