import { Story } from '@storybook/vue';

import YStack from './YStack.vue';

export default {
  title: 'DesignSystem/Layouts/Stack',
  component: YStack,
};

export const Basic: Story = () => ({
  components: { YStack },
  template: `
    <y-stack space="5">
      <div><div style="border: 1px solid #333; padding: 12px;">1</div></div>
      <div><div style="border: 1px solid #333; padding: 12px;">2</div></div>
      <div><div style="border: 1px solid #333; padding: 12px;">3</div></div>
      <div><div style="border: 1px solid #333; padding: 12px;">4</div></div>
    </y-stack>
  `,
});

export const Nested: Story = () => ({
  components: { YStack },
  template: `
    <y-stack space="6">
      <y-stack space="3">
        <div style="border: 1px solid #333; padding: 12px;">1</div>
        <div style="border: 1px solid #333; padding: 12px;">2</div>
      </y-stack>

      <y-stack space="2">
        <div style="border: 1px solid #333; padding: 12px;">3</div>
        <div style="border: 1px solid #333; padding: 12px;">4</div>
      </y-stack>

      <y-stack space="2">
        <div style="border: 1px solid #333; padding: 12px;">5</div>
        <div style="border: 1px solid #333; padding: 12px;">6</div>
      </y-stack>
    </y-stack>
  `,
});

export const CustomTag: Story = () => ({
  components: { YStack },
  template: `
  <div>
    <p>ul要素を使用</p>

    <y-stack tag="ul" space="3">
      <li><div style="border: 1px solid #333; padding: 12px;">1</div></li>
      <li><div style="border: 1px solid #333; padding: 12px;">2</div></li>
      <li><div style="border: 1px solid #333; padding: 12px;">3</div></li>
      <li><div style="border: 1px solid #333; padding: 12px;">4</div></li>
    </y-stack>
  </div>
  `,
});
