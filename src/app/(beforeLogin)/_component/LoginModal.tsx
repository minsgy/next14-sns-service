"use client";

import { Modal } from "@/components/Modal";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginModal() {
  const router = useRouter();
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const onSubmit = () => {};
  const onClickClose = () => {
    router.back();
  };
  const onChangeId = () => {};
  const onChangePassword = () => {};

  return (
    <Modal>
      <div>
        <div>
          <button onClick={onClickClose}>
            <svg width={24} viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
          <div>로그인하세요.</div>
        </div>
        <form onSubmit={onSubmit}>
          <div>
            <div>
              <label htmlFor="id">아이디</label>
              <input
                id="id"
                value={id}
                onChange={onChangeId}
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="password">비밀번호</label>
              <input
                id="password"
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder=""
              />
            </div>
          </div>
          <div>{message}</div>
          <div>
            <button disabled={!id && !password}>로그인하기</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
