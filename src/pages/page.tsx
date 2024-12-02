import { useFunnel } from "@/hooks";
import { FindUser } from "@/layout/find-user/FindUser";

// 테스트 용 페이지
export default function Page() {
  const {} = useFunnel();

  return <FindUser onSelectUser={() => {}} />;
}
