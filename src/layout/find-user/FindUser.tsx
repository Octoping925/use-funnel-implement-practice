import { Button } from "@/components/Button";
import { ListItem } from "@/components/ListItem";
import { TopBar } from "@/components/TopBar";
import { User } from "@/model";

type Props = {
  onSelectUser: (user: User) => void;
};

export function FindUser({ onSelectUser }: Props) {
  const users: User[] = [
    {
      id: "1",
      name: "홍길동",
      email: "hong@gmail.com",
      phone: "010-1234-5678",
      address: "서울특별시 강남구 역삼동",
    },
  ];

  return (
    <>
      <TopBar title="유저 정보 조회하기" />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}
        >
          이름을 입력해주세요
        </div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            width: "100%",
            padding: "24px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            backgroundColor: "#f8f8f8",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            // API 호출 로직 추가
          }}
        >
          <label style={{ width: "100%", maxWidth: "400px" }}>
            <span
              style={{
                marginBottom: "8px",
                fontSize: "14px",
                color: "#666",
              }}
            >
              이름
            </span>
            <input
              type="text"
              name="name"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
              }}
              placeholder="이름을 입력하세요"
            />
          </label>
          <Button onClick={() => {}}>검색하기</Button>
        </form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          <div>결과</div>
          {users.map((user) => (
            <ListItem
              key={user.id}
              onClick={() => onSelectUser(user)}
              renderMain={user.name}
              renderData={[user.email, user.phone, user.address]}
            />
          ))}
          {users !== null && users.length === 0 && (
            <div style={{ textAlign: "center", color: "#666" }}>
              검색 결과가 없습니다
            </div>
          )}
        </div>
      </main>
    </>
  );
}
