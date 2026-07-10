interface ProfileCardProps {
  name: string;
  group: string;
  position: string;
  imgUrl: string;
}

function ProfileCard({ name, group, position, imgUrl }: ProfileCardProps) {
  return (
    <div
      className="idol-card"
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
        flex: "1 1 180px",
        maxWidth: "220px",
        backgroundColor: "#fff",
        boxSizing: "border-box",
      }}
    >
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
    </div>
  );
}
export default ProfileCard;
