<script lang="ts">
  import CopyButton from '$/components/CopyButton.svelte';
  import { Input } from '$/components/ui/input';
  import type { InputType } from '$/types';
  import { copyToClipboard } from '$/util/util';
  import { derived } from 'svelte/store';
  import { translations, lang } from '$lib/i18n';

  // Create derived translation store
  const t = derived(lang, ($lang) => translations[$lang]);
  let {
    value,
    label = $t.copy,
    type = 'url',
    testID
  }: { value: string; label?: string; type?: InputType; testID?: string } = $props();
</script>

<div class="flex w-full items-center gap-2">
  <Input
    {type}
    {value}
    data-testid={testID}
    onclick={(event) => {
      event.currentTarget.setSelectionRange(0, event.currentTarget.value.length);
    }} />

  <CopyButton onclick={() => copyToClipboard(value)} {label} />
</div>
