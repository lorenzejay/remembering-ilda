export const photoList = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    let imgSrc = { src: `/ilda-${i}.jpg`, width: 4, height: 4 };
    photoList.push(imgSrc);
  } else {
    let imgSrc = { src: `/ilda-${i}.jpg`, width: 4, height: 3 };
    photoList.push(imgSrc);
  }
}
export const photos = [
  {
    src: "/ilda1.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "ilda2.jpg",
    width: 5,
    height: 3,
  },
  {
    src: "ilda3.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "ilda4.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "ilda5.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "ilda6.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "ilda7.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "ilda8.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "ilda9.jpg",
    width: 4,
    height: 3,
  },
  //   {
  //     src: "ilda10.jpg",
  //     width: 3,
  //     height: 4,
  //   },
  //   {
  //     src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     src: "ilda9.jpg",
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     src: "ilda9.jpg",
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     src: "ilda9.jpg",
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     src: "ilda9.jpg",
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     src: "ilda9.jpg",
  //     width: 4,
  //     height: 3,
  //   },
];
