const INITIAL_STATE = {
  sections: [
  {
    title: 'mugs',
    imageUrl: 'https://www.iteration.gallery/wp-content/uploads/2021/07/d1c539c67e6163c153a386bb0aa23d5d_1000x.jpeg',
    id: 1,
    linkUrl: 'shop/mugs'
  },
  {
    title: 'tapestries',
    imageUrl: 'https://www.iteration.gallery/wp-content/uploads/2021/07/d4fc4f58e2007a9d5e8a55b5d23ccb03_1000x.png',
    id: 2,
    linkUrl: 'shop/tapestries'
  },
  {
    title: 'pillows',
    imageUrl: 'https://www.iteration.gallery/wp-content/uploads/2021/07/f55042af1d84ebc1c52cf5833a2c27f8_1000x.png',
    id: 3,
    linkUrl: 'shop/pillows'
  },
  {
    title: 'duvets',
    imageUrl: 'https://www.iteration.gallery/wp-content/uploads/2021/07/15300a15fd4608d6079aa75cf7da8f76_1000x.jpeg',
    size: 'large',
    id: 4,
    linkUrl: 'shop/duvets'
  },
  {
    title: 'bags',
    imageUrl: 'https://www.iteration.gallery/wp-content/uploads/2021/07/preview-market-tote-4914070-scene-01.png',
    size: 'large',
    id: 5,
    linkUrl: 'shop/bags'
  }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
