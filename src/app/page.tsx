"use client";

import { FlipWords } from "@/components/ui/flip-words";
import style from "../style/page/home.module.css"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
  const [isLastWord, setIsLastWord] = useState<boolean>(false);
  const router = useRouter();
  // useEffect(() => {
  //   if (!isLastWord) return;
  //   const timeOut = setTimeout(() => {
  //     router.push("/a-propos");
  //   }, 5000)

  //   return () => clearTimeout(timeOut)
  // }, [isLastWord]);

  return (
    <div className={style.container}>
      <h1 className={style.name}>Marie Pocheron</h1>
      <FlipWords
        words={[
          "test",
          "test 1",
          "test 2",
          "test 3",
        ]}
        setIsLastWord={setIsLastWord}
        isLastWord={isLastWord}
        duration={1000}
        className={style.animated}
      />
    </div>
  );
}
