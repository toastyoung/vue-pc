import Mock from "mockjs";
import banners from "./banners.json";
import floors from "./floors.json";

// const Random = Mock.Random;

Mock.mock("/mock/banners", "get", {
  code: 200,
  //  随机数据
  // "data|5-9": [
  //   {
  //     "id|+1": 1,
  //     imgName: "@ctitle(3,6)",
  //     imgUrl: Random.image(
  //       "720x455",
  //       "@color()",
  //       "@color()",
  //       "jpg",
  //       "@ctitle(3,5)"
  //     ),
  //   },
  // ],
  data: banners,
});

Mock.mock("/mock/floors", "get", {
  code: 200,
  data: floors,
});
