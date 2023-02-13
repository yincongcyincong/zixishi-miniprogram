// components/seatList/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    seatings: Array,
    hallNumber: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectedIndex: [],
    selectedNum: 0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleShowAction(){
        wx.showActionSheet({
          itemList: ['按日付费9.9元','按周付费69元','按月付费269元'],
          success: (res) => {
              switch (res.tapIndex) {
                case 0:
                    console.log('付钱9.9元')
                    break
                case 1:
                    console.log('付钱69元')
                    break
                case 2:
                    console.log('付钱269元')
                    break
              }
          }
        })
    }
  },

    
})
