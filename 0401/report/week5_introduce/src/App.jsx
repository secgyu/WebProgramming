import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <h1>안녕하세요!</h1>
        <p>제 이름은 김규민 입니다.</p>
        <p>능력있는 개발자가 되고 싶습니다!!</p>
      </header>

      <main className="container">
        <section className="box">
          <h2>한 줄 소개</h2>
          <p>
            저는 프론트엔드 개발자입니다.
            <br />
            끊임없는 공부를 통해 성장하고, 가치를 빠르고 안전하게 전달하는 개발을 하고싶습니다.
          </p>
          <img src="./image/image.png" alt="프로필 이미지" className="profile-img" />
        </section>

        <section className="box">
          <h2>MBTI</h2>
          <p>
            <strong>ENTJ</strong>
            <br />
            리더십, 전략적 사고, 실행력
          </p>
          <h2>경력</h2>
          <p>2024 울산정보산업진흥원 AI테크 해커톤 대회 최우수상 수상</p>
          <p>2024 MS 클라우드를 활용한 인공지능 서비스 개발 경진대회 장려상 수상</p>
          <p>2024 BDIA Devton 혁신상 수상</p>
          <p>2024 경성대학교 캡스톤디자인 경진대회 최우수상 수상</p>
          <p>2025 ASCC Silver Award 수상</p>
          <a href="https://dafuri.com/ko-kr">
            {/* a 태그 내에 p 태그를 그대로 사용해도 되지만, HTML5 규격 상 <a>에 직접 텍스트를 넣는 것도 좋습니다. */}
            <p>Dafuri 사이트 유지보수</p>
          </a>
        </section>

        <section className="box">
          <h2>취미 / 관심사</h2>
          <p>스포츠, 여행, IT 트렌드 탐색, 게임</p>
          <h2>기술</h2>
          <h3>프론트엔드</h3>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
            <li>Tanstack Query</li>
            <li>Zustand</li>
          </ul>
          <h3>백엔드</h3>
          <ul>
            <li>Node.js</li>
            <li>Python</li>
            <li>Flask</li>
          </ul>
          <h3>데이터베이스</h3>
          <ul>
            <li>SQLite</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>Oracle SQL</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
