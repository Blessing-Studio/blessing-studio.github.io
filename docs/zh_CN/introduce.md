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
    title: '宣传组',
    links: [
      { icon: 'github', link: 'https://github.com/Starcloudsea' }
    ]
  },
  {
    avatar: 'https://github.com/JWJUN233233.png',
    name: 'JWJUN233233',
    title: '程序组',
    links: [
      { icon: 'github', link: 'https://github.com/JWJUN233233' }
    ]
  },
  {
    avatar: 'https://github.com/mailset.png',
    name: 'mailset',
    title: '程序组',
    links: [
      { icon: 'github', link: 'https://github.com/mailset' }
    ]
  },
  {
    avatar: 'https://github.com/Px2uRo.png',
    name: 'Px2uRo',
    title: '程序组',
    links: [
      { icon: 'github', link: 'https://github.com/Px2uRo' }
    ]
  },
  {
    avatar: 'https://github.com/dream0090.png',
    name: 'dream_pep',
    title: '设计组',
    links: [
      { icon: 'github', link: 'https://github.com/dream0090' }
    ]
  },
  {
    avatar: 'https://github.com/JustRainy.png',
    name: 'JustRainy',
    title: '设计组',
    links: [
      { icon: 'github', link: 'https://github.com/JustRainy' }
    ]
  },
  {
    avatar: 'https://github.com/ruattd.png',
    name: '任天天🍰',
    title: '质量控制组',
    links: [
      { icon: 'github', link: 'https://github.com/ruattd' }
    ]
  },
  {
    avatar: 'https://github.com/tsavpyn.png',
    name: 'КРАШ-2073',
    title: '质量控制组',
    links: [
      { icon: 'github', link: 'https://github.com/tsavpyn' }
    ]
  },
  {
    avatar: 'https://github.com/FTS427.png',
    name: 'Huang FTS427',
    title: '质量控制组',
    links: [
      { icon: 'github', link: 'https://github.com/FTS427' }
    ]
  },
];

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
        我们是一群热爱 Minecraft 的学生，我们主要从事 Minecraft 启动器的开发和维护，致力于为玩家提供稳定、安全、便捷的工具！
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

#   
