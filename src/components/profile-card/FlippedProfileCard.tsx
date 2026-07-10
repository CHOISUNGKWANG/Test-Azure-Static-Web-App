import { useState } from "react";
interface FlippedProfileCardProps {
  name: string;
  group: string;
  position: string;
  imgUrl: string;
  backImgUrl: string;
  nickname: string;
}

function FlippedProfileCard({
  name,
  group,
  position,
  imgUrl,
  backImgUrl,
  nickname,
}: FlippedProfileCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div
      className={`profile-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
      style={{
        border: isFlipped ? "1px solid #ff4081" : "1px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
        flex: "1 1 180px",
        maxWidth: "220px",
        backgroundColor: "#fff",
        boxSizing: "border-box",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: isFlipped ? "0 5px 15px rgba(0,0,0,0.1)" : "none",
      }}
    >
      {!isFlipped ? (
        <>
          <img
            src={imgUrl}
            alt={name}
            style={{
              width: "100%",
              height: "240px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
          <h3>{name}</h3>
          <p>소속그룹: {group}</p>
          <p>포지션: {position}</p>
        </>
      ) : (
        <>
          <img
            src={backImgUrl}
            alt={`${name} 뒷면`}
            style={{
              width: "100%",
              height: "240px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
          <h3>{nickname}</h3>
          <p style={{ color: "#ff4081", fontWeight: "bold" }}>
            시크릿 프로필 오픈!
          </p>
          <p style={{ fontSize: "13px", color: "#666" }}>
            다시 클릭하면 돌아갑니다.
          </p>
        </>
      )}
    </div>
  );
}
export default FlippedProfileCard;
