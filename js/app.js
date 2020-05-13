let app = new Vue({
  el: '#app',
  data() {
    return ({
      data: [{}],
      activeID: 0
    })
  },
  mounted() {
    let self = this
    axios.get('js/data.json')
      .then(function (response) {
        self.data = response.data

        self.addSumAndProm()
      })
  },
  methods: {
    addSumAndProm: function () {
      this.data[this.activeID].trimester.forEach(item => {
        // console.log("item", item)
        item.prom = (item.mat + item.comp + item.eco + item.ing) / 4
      });
    }
  },
  watch: {
    activeID: function () {
      this.addSumAndProm()
    }
  }
})