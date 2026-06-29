const address = "浙江省宁波市奉化区蒋葭浦老村委会";
const encodedAddress = encodeURIComponent(address);

export const invitation = {
  groom: "周寅",
  bride: "钟雅馨",
  weddingDate: "2026-10-01T16:00:00",
  displayDate: "2026年10月1日",
  weekDay: "星期四",
  time: "16:00",
  lunarDate: "中午和晚上",
  venue: address,
  address,
  mapUrl: `https://uri.amap.com/search?keyword=${encodedAddress}`,
  title: "我们要结婚啦",
  subtitle: "10月1日，和我们一起把喜欢的日子过成婚礼",
  introText: "",
  catText: "猫猫席位已预留，等你一起来热闹。",
  catBubble: "喵～先替我们把祝福收好，现场见！",
  footerText: "喜帖已送达，我们在婚礼现场等你。",
  schedule: [
    { time: "12:00", title: "中午场见面" },
    { time: "16:00", title: "婚礼开始" },
    { time: "18:00", title: "晚宴与庆祝" }
  ],
  showCountdown: false,
  dateSummary: "良辰已定，恭候赴约",
  bgmEnabled: true,
  bgmSrc: "/audio/bgm.mp3",
  coverTitle: "开启请帖",
  coverSubtitle: "轻点一下，把今天的喜气翻开",
  catImages: [
    "/images/cats/cat-1.png",
    "/images/cats/cat-2.png",
    "/images/cats/cat-3.png",
    "/images/cats/paw.png",
    "/images/cats/heart.png"
  ],
  mainCatImage: "/images/cats/cat-main.png",
  cornerCats: [
    "/images/cats/cat-1.png",
    "/images/cats/cat-2.png",
    "/images/cats/cat-3.png",
    "/images/cats/cat-main.png"
  ]
};
