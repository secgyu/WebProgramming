import React, { useState } from "react";

const HelpfulPage = ({ title, subtitle, helpfulInfo }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [newTip, setNewTip] = useState("");

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSubmitTip = () => {
    if (newTip.trim() !== "") {
      alert(`제출된 팁: ${newTip}`);
      setNewTip("");
    } else {
      alert("팁을 입력해주세요!");
    }
  };

  const pageStyle = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#333",
    padding: "20px",
    minHeight: "100vh",
  };

  return (
    <div style={pageStyle}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{helpfulInfo}</p>

      <div>
        <p>좋아요 수: {likeCount}</p>
        <button onClick={handleLike}>좋아요</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={toggleTheme}>{isDarkMode ? "라이트 모드로 변경" : "다크 모드로 변경"}</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>당신의 팁을 공유해주세요</h3>
        <input
          type="text"
          value={newTip}
          onChange={(e) => setNewTip(e.target.value)}
          placeholder="유용한 팁을 입력하세요"
        />
        <button onClick={handleSubmitTip}>제출</button>
      </div>
    </div>
  );
};

export default HelpfulPage;
