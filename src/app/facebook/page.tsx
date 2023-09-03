"use client";
import { Button } from "react-bootstrap";

import { useRouter } from "next/navigation";

const Facebook = () => {
  const router = useRouter();
  const handleBtn = () => {
    // alert("me");
    router.push("/");
  };
  return (
    <div>
      Facebook page
      <div>
        <Button variant="success">Miki Tran</Button>
        <button onClick={() => handleBtn()}>Back home</button>
      </div>
    </div>
  );
};

export default Facebook;
