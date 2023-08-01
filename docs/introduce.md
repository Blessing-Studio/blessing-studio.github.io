---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/99802662?v=4',
    name: 'YangSpring114',
    title: '创建者',
    links: [
      { icon: 'github', link: 'https://github.com/YangSpring114' }
    ]
  },
  {
    avatar: 'https://github.com/Starcloudsea.png',
    name: 'Starcloudsea',
    title: 'UI 审查',
    links: [
      { icon: 'github', link: 'https://github.com/Starcloudsea' }
    ]
  },
  {
    avatar: 'https://github.com/JWJUN233233.png',
    name: 'JWJUN233233',
    title: '后端开发',
    links: [
      { icon: 'github', link: 'https://github.com/JWJUN233233' }
    ]
  },
  {
    avatar: 'https://github.com/mailset.png',
    name: 'mailset',
    title: '后端开发，Linux 版本维护',
    links: [
      { icon: 'github', link: 'https://github.com/mailset' }
    ]
  },
  {
    avatar: 'https://github.com/NingLiu1998.png',
    name: '宁骑',
    title: 'Web 开发',
    links: [
      { icon: 'github', link: 'https://github.com/NingLiu1998' }
    ]
  },
  {
    avatar: 'https://github.com/Px2uRo.png',
    name: 'Px2uRo',
    title: 'Mod 程序',
    links: [
      { icon: 'github', link: 'https://github.com/Px2uRo' }
    ]
  },
  {
    avatar: 'https://github.com/JustRainy.png',
    name: 'JustRainy',
    title: 'Mod 美术',
    links: [
      { icon: 'github', link: 'https://github.com/JustRainy' }
    ]
  }
];

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
        我们是一个独立的由几人组成的工作室，我们基本是一群学生党，本着不马虎、实事求是的精神努力为大家制作更精良的工具！
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

#   