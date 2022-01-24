# event-agent
通过事件冒泡来监听事件，适用于大量事件绑定场景，避免多次事件绑定

# Simple usage

通过npm 或者 yarn安装

``` 
yarn add event-agent

npm i event-agent
```

引入

``` js
import { eventAgent } from 'event-agent'
```

``` vue
<template>
  <ul @click="ulClick">
    <li v-for="(item, i) in 1000" event-agent="click,mouseover" :index="i"></li>
  </ul>
</template>

<script>
import { eventAgent } from 'event-agent'

export default {
  data () {
    return {
      
    }
  },
  methods: {
    ulClick (event) {
      eventAgent(event, (e, attrs) => {
        console.log(e, attrs)
      })
    }
  }
}
</script>
```