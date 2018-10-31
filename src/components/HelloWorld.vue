<script>

import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'demo'
    }
  },
  mounted: function () {
    axios.get('http://localhost:8080//article/get/1')
      .then(function (response) {
        console.log(response)
        this.$alert(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
