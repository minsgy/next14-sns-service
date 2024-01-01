import Image from "next/image";
import zLogo from "../../../../public/zlogo.png";
import Link from "next/link";

export default function Main() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-3">
      <div>
        <Image src={zLogo} alt="logo" />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup">계정 만들기</Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/i/flow/login">로그인</Link>
      </div>
    </div>
  );
}
