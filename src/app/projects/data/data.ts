// projectImages
// --- Propay ----
// import i1 from '../projects/images/propay/9.png'
// import i2 from '../projects/images/propay/3.png'
// import i3 from '../projects/images/propay/4.png'
// import i4 from '../projects/images/propay/5.png'
// import i5 from '../projects/images/propay/6.png'
// import i6 from '../projects/images/propay/7.png'
// import i7 from '../projects/images/propay/8.png'
// import i8 from '../projects/images/propay/10.png'
// import i9 from '../projects/images/propay/11.png'

// logos
import nextjs from '../../assets/logos/nextjs.png'
import reactnative from '../../assets/logos/reactnative.png'
import firebase from '../../assets/logos/firebase.png'
import typescript from '../../assets/logos/typescript.png'
import jquery from '../../assets/logos/jquery.png'
import tailwind from '../../assets/logos/tailwind.png'
import js from '../../assets/logos/js.png'

// mockup
import royaltea from '../../assets/mockup/royal_tea.png'
import edm from '../../assets/mockup/edm.png'
import nail from '../../assets/mockup/nail.png'
import propay from  '../../assets/mockup/propay.png'
import morimori from '../../assets/mockup/morimori.png'
import rekiteku from '../../assets/mockup/rekiteku.png'
import starlink from '../../assets/mockup/starlink.png'

// mockuplg
import propaylg from '../images/propay/1.png'
import royallg from '../images/royal/1.png'
import edmlg from '../images/edm/mockup.jpg'
import morimorilg from '../images/morimori/mockup.png';
import naillg from '../images/nail/mockup.png';

// myphotos
import profile from '@/app/assets/mine/profile.jpg'
import ecc from '@/app/assets/mine/ecc_ceremony.jpg'
import ymca from '@/app/assets/mine/ymca_graduate.jpg'
import boys from  '@/app/assets/mine/boys_drink.jpg'
import webCollaborate from  '@/app/assets/mine/web_collaborate.jpg'


export interface ProjectImages {
    id: string,
    url: any,
    title: string,
    type: string,
    catchcopy: string,
    description: string,
    tools: string[],
    duration: string,
    tags: string[],
    thoughts: string,
    link: string,
    // pdfId: string | null,
    images : string[] | null,
    mockup: string | null,
    videoLink : string | null,
}

export const projectImages: ProjectImages[] = [
    {
        "id": "1",
        "url": royaltea.src,
        "title": 'ROYAL MYANMAR TEA ',
        "catchcopy": "ミャンマー茶紹介サイト",
        "tools": [jquery.src, js.src],
        "type": "個人制作",
        "duration": "3日",
        "description": 'ミャンマーの有名な丘陵地帯の紅茶生産地域から、ロイヤル ミャンマー ティーミックスを紹介するサイトです。',
        "tags": ['Sunrise', 'Mountains', 'Golden', 'Scenic', 'Inspiring'],
        "thoughts": "このサイトでは見やすい UI デザインやアニメーションを頑張って作りました。なお、Scroll するたびにアニメーションをどんな風につけたらユーザが面白いと感じるかなどを考えて作りました。",
        "link": "https://royalmm.vercel.app/",
        // "pdfId": null,
        images: [],
        mockup: royallg.src,
        videoLink: null
    },
    {
        "id": "2",
        "url": propay.src,
        "title": 'PROPAY',
        "catchcopy": "公共料金のお支払いアプリ",
        "duration": "2月",
        "type": "個人制作",
        "tools": [reactnative.src, firebase.src],
        "description": `日本に来て公共料金のお支払などに色々困っている方のために助けるお支払アプリ `,
        "tags": ['Misty', 'Path', 'Mysterious', 'Serene', 'Rugged'],
        "thoughts": "初めて React Native を使ってみて Javascript の考え方がほぼ同じですけど、モバイル型の言語を使って作ったので、コード書き方は全然違うので最初は React Native のコードを覚えるのに時間かかりました。",
        "link": '',
        // "pdfId": '98871d6f-8026-4bd6-b105-fab22bea6cf4',
        // images: [i1.src, i2.src, i3.src, i4.src, i5.src, i6.src, i7.src, i8.src, i9.src],
        images: null,
        mockup: propaylg.src,
        videoLink: null
    },
    {
        "id": "3",
        "url": edm.src,
        "title": 'EDM ACADEMY',
        "duration": "2月",
        "type": "個人制作",
        "catchcopy": "エレクトロニック音楽学習サイト",
        "tools": [nextjs.src, firebase.src, tailwind.src],
        "description": `EDM（イーディーエム）とは、Electronic Dance Music（エレクトロニック・ダンス・ミュージック）の略で、シンセサイザーなどの電子楽器を多用したダンスミュージックのジャンルです。`,
        "tags": ['Pathway', 'Adventure', 'Peaks', 'Challenging', 'Breathtaking'],
        "thoughts": 'NEXT.js を使って作りましたけど、作った上で気づいたのは、NEXT の Server Side と Client Side がとても難しいことがわかりました。TypeScript も初めて触ってみてたまに Type 書き忘れとかこのコードがどういう Type 使ったらいいかを慣れるのに時間かかりました。デザインはもちろユーザに見やすくて Clean Ui のタイプをしっかり考えた上で作りました。',
        "link": 'https://edm-academyv1.vercel.app/',
        // "pdfId": '26f055cb-4e1c-473a-a48f-889a718847b2',
        images: [],
        mockup: edmlg.src,
        videoLink: null
    },
 
    {
        "id": "4",
        "url": nail.src,
        "title": 'NAIL PALETTE',
        "duration": "1月半",
        "catchcopy": "ネイルアプリ",
        "type": "チーム制作",
        "tools": [reactnative.src, firebase.src],
        "description": `セルフネイルをする人がデザインを共有し、参考にしながら必要なアイテムを見つけ、送料無料で購入できるプラットフォームを提供すれば解決！！ セルフネイルやネイルアートに興味を持つ方々向けのサブスクアプリ`,
        "tags": ['Pathway', 'Adventure', 'Peaks', 'Challenging', 'Breathtaking'],
        "thoughts": 'このアプリは私のクラスメイトデザイナーが作ったものですが、それを私が好きになったのでコードの方を担当してやいました。作りたい理由として、昔から SNS型のアプリが作ってみたかったのです。それだけじゃなくて、Firebase のことを深く勉強してみたかったので作りました。一番大変なことはユーザごとの投稿機能や情報整理するのに難しかったのです。',
        "link": '',
        // "pdfId": '79dc588f-0cd8-40d8-9f21-98528aabba3b',
        images: [],
        mockup: naillg.src,
        videoLink: null
    },

    {
        "id": "5",
        "url": morimori.src,
        "title": 'MORI MORI',
        "duration": "3月",
        "type": "チーム制作",
        "catchcopy": "思い出のアルバム作りアプリ",
        "tools": [nextjs.src, firebase.src, tailwind.src],
        "description": `友達と共同でアルバムを作成し、写真やメモを通じて思い出を共有しいつでも思い出に浸れる。招待された友達は一緒にアルバムを作ることができ、思い出を共有する事ができる。`,
        "tags": ['Pathway', 'Adventure', 'Peaks', 'Challenging', 'Breathtaking'],
        "thoughts": 'このアプリは 1年生と 3年生とコラボして作りました。私はコーディングやアプリのデザイン、企画書のデザインやチーム内のコミュニケーションを担当してやりました。どうやってチームメンバーが楽しく作業できるか、１年生の作業が間に合わなかったら手貸してフォローするとかを色々考えて制作したのは今回の頑張ったところです。',
        "link": 'https://morimori-webapp.vercel.app/',
        // "pdfId": '512e2e9b-6de4-4796-9476-eca73d509d51',
        images: [],
        mockup: morimorilg.src,
        videoLink: null
    },

    {
        "id": "6",
        "url": rekiteku.src,
        "title": 'REKI-TEKU',
        "duration": "2月半",
        "type": "チーム制作",
        "catchcopy": "福岡県歴史紹介サイト",
        "tools": [reactnative.src, firebase.src, tailwind.src],
        "description": `クライアントの方からの依頼で、福岡県の歴史スポットを回るツアーを提案するサイトを制作しました(授業課題)。`,
        "tags": ['Pathway', 'Adventure', 'Peaks', 'Challenging', 'Breathtaking'],
        thoughts: 'チーミ制作のサイトで、私が ABOUT デザインやチームメンバーのコードを整理し、まとめて Github にアップロードする役割をやりました。デザインはクライアントの方からの要望をしっかり考えた上で作りました。チームメンバーのコードを整理するのは大変でしたけど、GitHub の Pull Request を使ってコードを整理することができました。',
        link: 'https://reki-teku.vercel.app/',
        // pdfId: null,
        images: null,
        mockup: rekiteku.src,
        videoLink: null
    },

    {
        "id": "7",
        "url": ymca.src,
        "title": 'SPACE-TEA',
        "catchcopy": "宇宙系コーヒサイト",
        "description": `コーヒを飲みながら宇宙を感じることができる、学ぶことができるサイトです。`,
        "tags": ['Pathway', 'Adventure', 'Peaks', 'Challenging', 'Breathtaking'],
        type: '個人制作',
        tools: [],
        duration: '2週間',
        thoughts: '初めてサイトを作った時の思い出です。機能はあまりないですけど、デザインをめっちゃくちゃ頑張りました。初めて作ったので思い出に残っているサイトです。',
        link: 'https://starlink-gamma.vercel.app/',
        // pdfId: null,
        images: null,
        mockup: starlink.src,
        videoLink: null
    },
]

export interface Logo{
    id: string,
    src: string
}
export const logo : Logo[] = [
    {
        "id": "1",
        "src": nextjs.src
    },
    {
        "id": "2",
        "src": reactnative.src
    },
    {
        "id": "3",
        "src": firebase.src
    },
    {
        "id": "4",
        "src": typescript.src
    },
    {
        "id": "5",
        "src": js.src
    },
    {
        "id": "6",
        "src": jquery.src
    },
    {
        "id": "7",
        "src": tailwind.src
    },
]

export interface MyPhotos {
    id: string,
    src: any,
}
export const myPhotos : MyPhotos[] = [
    // {
    //     "id": "1",
    //     "src": profile.src
    // },
    {
        "id": "2",
        "src": ecc.src
    },
    {
        "id": "3",
        "src": ymca.src
    },
    {
        "id": "4",
        "src": boys.src
    },
    {
        "id": "3",
        "src": webCollaborate.src
    },
]

export const aboutMe = [
    {
      "greeting": "Hello  ",
      "name": "Aung Ko Htet",
      "story": "private ...",
      "image": profile.src
    },
    {
      "greeting": "My Education",
      "name": "Japanese Language School",
      "story": "I attended a Japanese language school for one year.",
      "image": ymca.src
    },
    {
      "greeting": "My Dream",
      "name": "Becoming a Full Stack Developer",
      "story": "I want to create an educational website for IT in my country.",
      "image": ecc.src
    },
  ];