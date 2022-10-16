<script lang="ts">
import Vue, { PropType, VNode, defineComponent } from 'vue';

import { Spaces } from '../constants';
import { Space } from '../types';
import { getSpace } from '../utilities';

/**
 * 子要素を均等の間隔で垂直に並べます。
 */
export default defineComponent({
  name: 'YStack',
  props: {
    /**
     * 要素を指定します。Center
     */
    tag: { type: String, default: 'div' },
    /**
     * 子要素間の距離を指定します。スペーシングのインデックスを指定します。「100px」や「10em」といった具体的な方法で幅を指定することはできません。
     */
    space: { type: String as PropType<Space>, validator: (value: string) => Object.keys(Spaces).includes(value), required: true },
  },
  data(): {
    parentIsYStack: boolean;
  } {
    return {
      parentIsYStack: false,
    };
  },
  computed: {
    wrapperClass(): string | null {
      return this.parentIsYStack ? null : 'stack';
    },
    innerWrapperTag(): string | null {
      return this.parentIsYStack ? this.tag : null;
    },
    style(): { [property: string]: string } {
      if (!this.space) {
        return {};
      }

      const setSpace = getSpace(this.space);

      return {
        '--design-system-layout-stack-space': setSpace ? setSpace : '',
      };
    },
  },
  mounted(): void {
    if (this.$parent == null) {
      return;
    }

    if (this.$parent instanceof Vue && this.$parent.$options.name === 'YStack') {
      this.parentIsYStack = true;
    }
  },
  render(createElement: Vue.CreateElement): VNode {
    let el;
    let props;
    let children;

    if (this.parentIsYStack) {
      el = 'div';
      props = {};
      children = [createElement(this.tag, { class: 'stack', style: this.style }, this.$slots.default)];
    } else {
      el = this.tag;
      props = { class: 'stack', style: this.style };
      children = this.$slots.default;
    }

    return createElement(el, props, children);
  },
});
</script>

<style lang="scss" scoped>
.stack {
  // --design-system-layout-stack-spaceを使用

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.stack > * {
  margin-top: 0;
  margin-bottom: 0;
}

.stack > * + * {
  margin-top: var(--design-system-layout-stack-space);
}
</style>
