import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/miki.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miki Tran - Homepage",
  description: "Hoc Nextjs13",
};

export default function Home() {
  return (
    <>
      {/* <div>{data?.length}</div> */}
      <ul>
        <li className={x["red"]}>
          <Link href={"/facebook"}>
            <span className={y["red"]}>Facebook</span>
          </Link>
        </li>
        <li style={{ margin: "20px 0" }}>
          <Link href={"/youtube"}>Youtube </Link>
        </li>
        <li style={{ margin: "20px 0" }}>
          <Link href={"/tiktok"}>Tiktok </Link>
        </li>
      </ul>
    </>
  );
}
