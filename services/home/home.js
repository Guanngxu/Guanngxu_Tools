import { config, cdnBase } from '../../config/index';

/** 获取首页数据 */
function mockFetchHome() {
  const { delay } = require('../_utils/delay');
  const { genSwiperImageList } = require('../../model/swiper');
  return delay().then(() => {
    return {
      swiper: genSwiperImageList(),
      tabList: [
        {
          text: '通用',
          key: 0,
        },
        {
          text: 'LDO',
          key: 1,
        },
        {
          text: '0706',
          key: 2,
        },
        {
          text: '0508',
          key: 3,
        },
        // {
        //   text: '4644',
        //   key: 4,
        // },
        // {
        //   text: '2630',
        //   key: 5,
        // },
        // {
        //   text: '3301',
        //   key: 6,
        // },
        // {
        //   text: '1101',
        //   key: 7,
        // }
      ],
      activityImg: `${cdnBase}/activity/banner.png`,
    };
  });
}

/** 获取首页数据 */
export function fetchHome() {
  if (config.useMock) {
    return mockFetchHome();
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}
