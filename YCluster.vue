<template>
  <component :is="wrapperTag" class="Cluster" :style="style">
    <slot />
  </component>
</template>

<script lang="ts">
import { ComputedRef, PropType, computed, defineComponent } from 'vue';

import { Space } from '../types';
import { getSpace } from '../utilities';

/**
 * 子要素を横並びにします。かつ、画面幅が狭い場合は自動で折り返します。
 */
export default defineComponent({
  props: {
    /**
     * 垂直方向の整列を行います。Flexboxのaling-itemsを利用しています
     */
    align: { type: String as PropType<'center' | 'flex-start' | 'flex-end'>, default: 'center' },
    /**
     * Cluster自体をinline扱いします
     */
    inline: { type: Boolean, default: false },
    /**
     * 水平方向の整列を行います。Flexboxのjustify-contentを利用しています
     */
    justify: { type: String as PropType<'center' | 'flex-start' | 'flex-end' | 'space-between'>, default: 'flex-start' },
    /**
     * 子要素間の間隔を指定します。自然数（1、2など）を指定し、モジュラースケール・スペーシングで設定します。
     */
    space: { type: String as PropType<Space>, default: '3' },
    /**
     * Clusterの要素を変更できます。
     */
    tag: { type: String, default: 'div' },
  },
  setup(props) {
    const wrapperTag: ComputedRef<string> = computed(() => {
      return props.tag;
    });

    const style: ComputedRef<{ [property: string]: string }> = computed(() => {
      // scaleのポイントであればポイントの値を、そうでなければそのまま代入
      const setSpace = getSpace(props.space) ?? props.space;

      return {
        '--design-system-layout-cluster-space': setSpace ?? '',
        '--design-system-layout-cluster-align': props.align,
        '--design-system-layout-cluster-display': props.inline ? 'inline-flex' : 'flex',
        '--design-system-layout-cluster-justify': props.justify,
      };
    });

    return {
      style,
      wrapperTag,
    };
  },
});
</script>

<style lang="scss" scoped>
.Cluster {
  display: var(--design-system-layout-cluster-display);
  flex-wrap: wrap;
  align-items: var(--design-system-layout-cluster-align);
  justify-content: var(--design-system-layout-cluster-justify);
  gap: var(--design-system-layout-cluster-space);
}
</style>
