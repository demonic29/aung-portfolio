"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { SpotLightItem, Spotlight } from "../components/main-spotlight";

// images
import profile2 from "@/app/assets/mine/profile2.jpg";
import ymca from "@/app/assets/mine/ymca_graduate.jpg";
import propay_award from "@/app/assets/mine/propay_award.jpeg"
import edm from "@/app/assets/mine/edm.jpeg"
import chad from "@/app/assets/mine/chad.jpeg"
import ecc_entry from "@/app/assets/mine/ecc_ceremony.jpg"
import mcdonals from "@/app/assets/mine/mcdonals.jpeg"
import ymca2 from "@/app/assets/mine/ymca2.jpeg"


import AboutTabs from "../components/about-tabs";


export default function AboutMe() {
  const [showYMCAImage, setShowYMCAImage] = useState(false);

  const boxes = [
    {
      id: "12",
      title: "自己紹介",
      desc: "私は AUNG KO HTET ( アウン コ テッ ) です。出身はミャンマーです。OSAKA YMCA 日本語学校に日本語総合コースを受けて１年間くらい日本語を勉強しました。私はミャンマーから Website デザインやアプリデザインなどを興味を持ち、ミャンマー教育のために何か役に立つサイトもしくはアプリを作りたいと思っています。それを実現するために、 ECC コンピュータ専門学校 WEB デザインコースに進学しました。今は 3年生になっており、将来 Full Stack Developer になりたいと思っています。",
      className:
        "md:col-span-2 h-fit",
      img: profile2.src,
    },
    {
      id: "21",
      title: "経験",
      img: null,
      desc: (
        <div>
          <AboutTabs 
            title={["マクドナルド : 2022 ~ 2025"]} 
            desc={[
              "私は 2022年 5月に北巽マクドナルドにバイトやりました。初めは日本語話せなかったのですが、いっぱい日本人と話す結果今は人に説明できるくらい日本語話せるようになりました。マクドでいろんな人たちとチームワークでお客様に最大な説教を提供し、マクドから得た知識をこれから人生で生かすしていきたいと思います。"
            ]} 
            img={[mcdonals.src]} />
        </div>
      ),
      className:"md:col-span-2 h-fit",
    },
   
    {
      id: "52",
      title: "学歴",
      img: null,
      desc: (
        <div className="w-full">
          <AboutTabs img={[ymca2.src, ecc_entry.src]} title={["2022", "2023"]} desc={["大阪 YMCA 日本語学校で１年間くらい日本語を勉強して卒業しました。", "私は WEBやアプリなどに興味を持ち将来 WEB サービス企業になりたいと思い、ECC コンピュータ専門学校 WEB デザインコースに進学しました。"]} />
        </div>
      ),
      className: "md:col-span-2 h-fit",
    },
    {
      id: '22',
      title: '長所',
      desc: '私の長所だと思っているものは大きく２つあります。一つ目は行動力です。私は考えたことをすぐ行動して他人のフィードバックもらうことが強みと思います。/ もう一つは諦めずに最後結果できまでやるのは強みと思っていて、自分が諦めずやった上で結果がどうなるのかを知りたいのが私の長所として考えています。',
      className: 'h-fit md:col-span-2',
      img: chad.src,
    },
    {
      id: '42',
      title: '資格',
      desc: (
        <div className="">
          <AboutTabs title={["JLPT N2合格","日本語学校", "展示会"]} desc={["2022年 7月 - N2 合格", "2023年 3月 - 大阪 YMCA 日本語学校卒業", "2023年 10月 - 敢闘賞 ( ECC 企業展示会 )"]} img={[ecc_entry.src, ymca.src, propay_award.src]}/>
        </div>
      ),
      className: 'h-fit md:col-span-2',
      img: null
    },
    {
      id: '32',
      title: '興味',
      desc: '私は音楽聴くことが好きで、特に EDM 系が大好きです。一番好きな EDM Artist は “Daft Funk” です。落ち込む時やあまり作業進まない時に音楽聴くとやる気が出ました。もう一つは言語を学ぶことです。私はいろんな国の言葉や文化を興味があって、暇な時に新しい言語を学んたり、POSTCARD 聞いたりします。今話せる言語としては「ミャンマー語・英語・日本語」です。',
      className: ' h-fit md:col-span-2',
      img: edm.src,
    },
    
  ];

  return (
    <div className="relative md:py-[100px] bg-black sm:p-8 p-4 rounded-md">
      <h1 className="font-bold text-white text-center md:mb-4 md:text-[40px] md:tracking-wider">
        私について
      </h1>

      <Spotlight className="md:grid grid-cols-3 h-full gap-2 container">
        {boxes.map((box, index) => (
          <SpotLightItem className={box.className} key={index}>
            <div className="relative z-10 rounded-lg bg-gradient-to-b from-[#0c0c0c] h-full to-[#252525] w-full mx-auto">
              <div className="grid relative max-h-full h-full 2xl:p-3 p-0 w-full">
                <div className={`${box.img === null ? 'hidden' : "relative w-full h-[250px]"}`}>
                 {
                  box.img ?  
                    <Image
                      src={box.img || "/default-image.jpg"}
                      fill
                      alt="This is image"
                      className={box.img ? 'object-cover': 'invisible'}
                    /> : 
                    ''
                 }
                </div>
                <h1 className="text-left text-white md:mt-5 xl:text-2xl md:mb-2 lg:text-xl text-2xl font-semibold">
                  {box.title}
                </h1>
                {/* <AboutTabs children={boxes[2].desc}/> */}
                <div className="text-left text-gray-300 md:tracking-widest md:leading-[1.8rem] md:text-[0.8rem]">
                  {box.desc}
                </div>
              </div>
            </div>
          </SpotLightItem>
        ))}
      </Spotlight>

      {/* Show the image when hovering over YMCA */}
      {/* {showYMCAImage && (
        <YmcaImageComponent/>
      )} */}
    </div>
  );
}
