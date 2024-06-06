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
    title: 'The Creator',
    links: [
      { icon: 'github', link: 'https://github.com/YangSpring114' }
    ]
  },
  {
    avatar: 'https://github.com/Starcloudsea.png',
    name: 'Starcloudsea',
    title: 'Publicity',
    links: [
      { icon: 'github', link: 'https://github.com/Starcloudsea' }
    ]
  },
  {
    avatar: 'https://github.com/JWJUN233233.png',
    name: 'JWJUN233233',
    title: 'Programming',
    links: [
      { icon: 'github', link: 'https://github.com/JWJUN233233' }
    ]
  },
  {
    avatar: 'https://github.com/mailset.png',
    name: 'mailset',
    title: 'Programming',
    links: [
      { icon: 'github', link: 'https://github.com/mailset' }
    ]
  },
  {
    avatar: 'https://github.com/Px2uRo.png',
    name: 'Px2uRo',
    title: 'Programming',
    links: [
      { icon: 'github', link: 'https://github.com/Px2uRo' }
    ]
  },
  {
    avatar: 'https://github.com/dream0090.png',
    name: 'dream_pep',
    title: 'Design',
    links: [
      { icon: 'github', link: 'https://github.com/dream0090' }
    ]
  },
  {
    avatar: 'https://github.com/JustRainy.png',
    name: 'JustRainy',
    title: 'Design',
    links: [
      { icon: 'github', link: 'https://github.com/JustRainy' }
    ]
  },
  {
    avatar: 'https://github.com/ruattd.png',
    name: 'ruattd',
    title: 'QC',
    links: [
      { icon: 'github', link: 'https://github.com/ruattd' }
    ]
  },
  {
    avatar: 'https://github.com/JustRainy.png',
    name: 'КРАШ-2073',
    title: 'QC',
    links: [
      { icon: 'github', link: 'https://github.com/JustRainy' }
    ]
  },
  {
    avatar: 'https://github.com/FTS427.png',
    name: 'Huang FTS427',
    title: 'QC',
    links: [
      { icon: 'github', link: 'https://github.com/FTS427' }
    ]
  },
];

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
        We are a group of students who love Minecraft. We are mainly engaged in the development and maintenance of Minecraft launcher, committed to providing stable, safe and convenient tools for players.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

#   
