import "./not_found.scss";
import notFound from "../../assets/not_found.png";
import styled, { keyframes } from "styled-components";
import { hinge } from "react-animations";

export default function NotFound() {
  const notFoundArr = [
    "P",
    "a",
    "g",
    "e",
    " ",
    "n",
    "o",
    "t",
    " ",
    "f",
    "o",
    "u",
    "n",
    "d",
  ];

  const Hinge = styled.div`
    animation: 2s ${keyframes`${hinge}`};
    animation-fill-mode: both;
    animation-delay: 2s;
  `;
  return (
    <>
      <div className="err_container">
        <p className="notfound number">404</p>
        <img className="img" src={notFound} alt="404 Not Found" />
      </div>
      <div className="notfound_container">
        <div className="notfound shadow">
          {notFoundArr.map((item, index) => {
            return (
              <p className="liter" key={index}>
                {item}
              </p>
            );
          })}
        </div>
        <div className="notfound phrase">
          {notFoundArr.map((item, index) => {
            return (
              <Hinge className="liter">
                <p key={index}>{item}</p>
              </Hinge>
            );
          })}
        </div>
      </div>
    </>
  );
}
