<template>
    <a-anchor
      :affix="false"
      :items="items"
      @change="onChange"
    ></a-anchor>
  </template>
  <script setup>
  import { ref } from 'vue';

  let items = ref([
        {
          key: '1',
          href: '#概念1',
          title: 'Basic demo',
        },
        {
          key: '2',
          href: '#概念2',
          title: 'Static demo',
        },
        {
          key: '3',
          href: '#概念3',
          title: 'API',
          children: [
            {
              key: '4',
              href: '#小概念1',
              title: 'Anchor Props',
            },
            {
              key: '5',
              href: '#小概念2',
              title: 'Link Props',
            },
          ],
        },
        {
          key: '6',
          href: '#概念4',
          title: 'API',
          children: [
            {
              key: '7',
              href: '#小概念3',
              title: 'Anchor Props',
            },
            {
              key: '8',
              href: '#小概念4',
              title: 'Link Props',
            },
          ],
        },
        {
          key: '6',
          href: '#概念4',
          title: 'API',
          children: [
            {
              key: '7',
              href: '#小概念5',
              title: 'Anchor Props',
            },
            {
              key: '8',
              href: '#小概念6',
              title: 'Link Props',
            },
          ],
        },
        {
          key: '6',
          href: '#概念4',
          title: 'API',
          children: [
            {
              key: '7',
              href: '#小概念7',
              title: 'Anchor Props',
            },
            {
              key: '8',
              href: '#小概念8',
              title: 'Link Props',
            },
          ],
        },
        {
          key: '6',
          href: '#概念4',
          title: 'API',
          children: [
            {
              key: '7',
              href: '#小概念9',
              title: 'Anchor Props',
            },
            {
              key: '8',
              href: '#小概念10',
              title: 'Link Props',
            },
          ],
        },
        {
          key: '6',
          href: '#概念4',
          title: 'API',
          children: [
            {
              key: '7',
              href: '#小概念11',
              title: 'Anchor Props',
            },
            {
              key: '8',
              href: '#小概念12',
              title: 'Link Props',
            },
          ],
        },
      ]);
    //   herf是主要的链接，title是显示的文字，herf是唯一标识符，children是子节点，可以嵌套。
    // 点击某个节点，会触发change事件，可以获取到当前节点的key和href。
  const onChange = link => {
    console.log('Anchor:OnChange', link);
  };
  </script>