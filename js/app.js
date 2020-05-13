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
      })
  }
})