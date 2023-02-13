Page({
  data: {
    seatings: [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
              0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
              0,1,1,1,1,2,2,2,2,2,1,1,1,1,0,
              0,1,1,1,1,2,2,-1,2,2,1,1,1,1,0,
              0,0,0,1,1,2,2,2,2,2,1,1,0,0,0,
              0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,
              0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
  },
  onShow() {
    this.popup = this.selectComponent('#popup');
    // console.log(this.popup);
  },
  showPopup() {
    this.popup.showPopup();
  },
  _error(e) {
    console.log('子组件点击了error', e);
  },
  onClickPowerInfo(e) {
    const index = e.currentTarget.dataset.index
    console.log(index)
  },
})