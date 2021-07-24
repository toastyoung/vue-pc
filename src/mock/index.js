import Mock from "mockjs";
import banners from './banners.json'

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
