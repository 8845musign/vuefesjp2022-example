import { Story } from '@storybook/vue';

import YCluster from './YCluster.vue';

export default {
  title: 'DesignSystem/Layouts/Cluster',
  component: YCluster,
};

export const Basic: Story = () => ({
  components: { YCluster },
  template: `
    <y-cluster>
      <span style="background-color: #E7EFFF; border-radius: 3px; padding: 4px 8px;">Lorem</span>
      <span style="background-color: #E7EFFF; border-radius: 3px; padding:  4px 8px;">ipsum</span>
      <span style="background-color: #E7EFFF; border-radius: 3px; padding: 4px 8px;">dolor</span>
      <span style="background-color: #E7EFFF; border-radius: 3px; padding: 4px 8px;">sit</span>
      <span style="background-color: #E7EFFF; border-radius: 3px; padding: 4px 8px;">amet</span>
      <span style="background-color: #E7EFFF; border-radius: 3px; padding: 4px 8px;">,</span>
      <span style="background-color: #E7EFFF; border-radius: 3px; padding: 4px 8px;">consectetur</span>
      <span style="background-color: #E7EFFF; border-radius: 3px; padding: 4px 8px;">adipiscing</span>
      <span style="background-color: #E7EFFF; border-radius: 3px; padding: 4px 8px;">elit</span>
      <span style="background-color: #E7EFFF; border-radius: 3px; padding: 4px 8px;">,</span>
      <span style="background-color: #E7EFFF; border-radius: 3px; padding: 4px 8px;">sed</span>
      <span style="background-color: #E7EFFF; border-radius: 3px; padding: 4px 8px;">do</span>
      <span style="background-color: #E7EFFF; border-radius: 3px; padding: 4px 8px;">eiusmod</span>
      <span style="background-color: #E7EFFF; border-radius: 3px; padding: 4px 8px;">tempor</span>
    </y-cluster>
  `,
});

export const Align: Story = () => ({
  components: { YCluster },
  template: `
    <div>
      垂直中央揃え（center、デフォルト）:
      <y-cluster class="mt:1 mb:4">
        <span style="background-color: yellow">コンテンツ<br>コンテンツ<br>コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
        <span style="background-color: yellow">コンテンツ<br>コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
      </y-cluster>

      上揃え（flex-start）:
      <y-cluster align="flex-start" class="mt:1 mb:4">
        <span style="background-color: yellow">コンテンツ<br>コンテンツ<br>コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
      </y-cluster>

      下揃え（flex-end）:
      <y-cluster align="flex-end" class="mt:1">
        <span style="background-color: yellow">コンテンツ<br>コンテンツ<br>コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
      </y-cluster>
    </div>
  `,
});

export const Justify: Story = () => ({
  components: { YCluster },
  template: `
    <div>
      左揃え（flex-start、デフォルト））:
      <y-cluster class="mt:1 mb:4">
        <span style="background-color: yellow">コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
      </y-cluster>

      右揃え（flex-end）:
      <y-cluster justify="flex-end" class="mt:1">
        <span style="background-color: yellow">コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
      </y-cluster>

      中央揃え（center）:
      <y-cluster justify="center" class="mt:1 mb:4">
        <span style="background-color: yellow">コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
      </y-cluster>

      均等に配置（space-between）:
      <y-cluster justify="space-between" class="mt:1 mb:4">
        <span style="background-color: yellow">コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
      </y-cluster>
    </div>
  `,
});

export const Spacing: Story = () => ({
  components: { YCluster },
  template: `
    <y-cluster space="12">
      <span style="background-color: yellow">コンテンツ<br>コンテンツ<br>コンテンツ</span>
      <span style="background-color: yellow">コンテンツ</span>
      <span style="background-color: yellow">コンテンツ</span>
      <span style="background-color: yellow">コンテンツ</span>
      <span style="background-color: yellow">コンテンツ</span>
    </y-cluster>
  `,
});

export const Tag: Story = () => ({
  components: { YCluster },
  template: `
    <div>
      <p class="mb:2">Clusterをul要素とし、子要素をli要素に。リストとしてマークアップ。</p>

      <y-cluster tag="ul">
        <li style="background-color: yellow">コンテンツ<br>コンテンツ<br>コンテンツ</li>
        <li style="background-color: yellow">コンテンツ</li>
        <li style="background-color: yellow">コンテンツ</li>
        <li style="background-color: yellow">コンテンツ</li>
        <li style="background-color: yellow">コンテンツ</li>
      </y-cluster>
    </div>
  `,
});

export const Inline: Story = () => ({
  components: { YCluster },
  template: `
    <div>
      <y-cluster inline>
        <span style="background-color: yellow">コンテンツ</span>
        <span style="background-color: yellow">コンテンツ</span>
      </y-cluster>
      他要素と横並び可能
    </div>
  `,
});
