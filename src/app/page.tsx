"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import x from "@/styles/app.module.css";
import y from "@/styles/miki.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppTable from "@/components/app.table";
import { useEffect } from "react";
import useSWR from "swr";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>{data?.length}</div>
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
      <AppTable blogs={data} />
    </>
  );
}
