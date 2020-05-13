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
      let allSum = {
        mat: 0,
        comp: 0,
        eco: 0,
        ing: 0
      }

      this.data[this.activeID].trimester.forEach(item => {
        item.prom = ((item.mat + item.comp + item.eco + item.ing) / 4).toFixed(2)

        allSum.mat += item.mat
        allSum.comp += item.comp
        allSum.eco += item.eco
        allSum.ing += item.ing
      });

      this.data[this.activeID].sum = allSum
    }
  },
  watch: {
    activeID: function () {
      this.addSumAndProm()
    }
  }
})