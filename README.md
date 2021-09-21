# mid-autumn-ui

![](https://tiger-typora.oss-cn-shenzhen.aliyuncs.com/img/mid-autumn.jpg?versionId=CAEQRRiBgMDj6pab4BciIDNiNDk1MTZiMjY2OTQwNDM5OWIyOTE2NzI1MzNjMjE4)

# What is the Mid Autumn Festival?

> By the Ming and Qing Dynasties, it had become one of the traditional Chinese festivals, with the same name as the Spring Festival.
>
> 译文：中秋节始于唐朝初年，盛行于宋朝，至明清时，已成为与春节齐名的中国传统节日之一。
>
> The Mid-Autumn Festival is influenced by Chinese culture and is also a traditional festival for overseas Chinese in East and Southeast Asia, especially in this region.
>
> 译文：受中华文化的影响，中秋节也是东亚和东南亚一些国家尤其是当地的华人华侨的传统节日。
>
> Since 2008, the Mid-Autumn Festival has been listed as a national statutory festival. 
>
> 译文：自2008年起中秋节被列为国家法定节假日。
>
> On May 20, 2006, the State Council was listed in the first batch of national intangible cultural heritage lists.
>
> 译文：2006年5月20日，国务院列入首批国家级非物质文化遗产名录。

## Install component library

```
yarn add mid-autumn
```

## Introduction and use, main.js

```
import { createApp } from 'vue'
import App from './App.vue'

import midAutumnUI from 'mid-autumn'
import 'mid-autumn/lib/mid-autumn.css'

createApp(App).use(midAutumnUI).mount('#app')
```

## App.vue
```
<template>
  <mid-button>mid autumn ui</mid-button>
</template>
```