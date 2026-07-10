import { useState, useEffect } from "react";
import FlippedProfileCard from "./components/profile-card/FlippedProfileCard";
import axios from "axios";

interface Member {
  id: number;
  name: string;
  group: string;
  position: string;
  imgUrl: string;
  backImgUrl: string;
  nickname: string;
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function App() {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setIsLoading(true);
        setError(null);
        await delay(2000);
        const response = await axios.get<Member[]>("/members.json");
        setMembers(response.data);
      } catch (err: Error | any) {
        console.log("에러발생");
        setError(err.message || "멤버 정보를 가져오는 중 오류를 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, []);

  console.log(members);

  return (
    <>
      <div style={{ padding: "20px", backgroundColor: "#000" }}>
        <h1>
          <img src="https://i.namu.wiki/i/VkqgOF5I1-F9oj7KuVPsEdFkYoZ2MXGoZY9KvMN_X4PfPibaOrthdkj7BnH0IDs-_1N9zD6tVgw066IuZTVAXA.svg" />
        </h1>
        <div
          className="profile-list"
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {isLoading && <p>로딩 중...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {!isLoading &&
            !error &&
            members.map((member) => (
              <FlippedProfileCard
                key={member.id}
                name={member.name}
                group={member.group}
                position={member.position}
                imgUrl={member.imgUrl}
                backImgUrl={member.backImgUrl}
                nickname={member.nickname}
              />
            ))}
        </div>
      </div>
    </>
  );
}
export default App;
