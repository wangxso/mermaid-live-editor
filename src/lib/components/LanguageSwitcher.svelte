<script lang="ts">
  import { lang, SUPPORTED_LANGS } from '$lib/i18n';
  import { Button } from '$/components/ui/button';
  import * as Popover from '$/components/ui/popover';
  import TranslateIcon from '~icons/material-symbols/translate'; // 你之前引入过的翻译图标

  function changeLanguage(newLang: (typeof SUPPORTED_LANGS)[number]) {
    lang.set(newLang);
  }
</script>

<Popover.Root>
  <Popover.Trigger class="flex items-center gap-0">
    <Button variant="ghost" size="sm">
      <TranslateIcon class="h-5 w-5" />
    </Button>
  </Popover.Trigger>

  <Popover.Content>
    <ul class="flex flex-col">
      {#each SUPPORTED_LANGS as language}
        <li class="cursor-pointer rounded-md p-2 hover:bg-muted">
          <button
            type="button"
            class="w-full whitespace-nowrap text-left
        {language === $lang ? 'glass-effect' : ''}"
            on:click={() => changeLanguage(language)}>
            {language === 'en' ? 'English' : language === 'zh-CN' ? '简体中文' : language}
          </button>
        </li>
      {/each}
    </ul>
  </Popover.Content>
</Popover.Root>

<style>
  .glass-effect {
    position: relative;
    background: rgba(255, 255, 255, 0.1); /* 半透明白色背景 */
    backdrop-filter: blur(10px); /* 背景模糊 */
    -webkit-backdrop-filter: blur(10px); /* Safari 支持 */
    border-radius: 10px; /* 圆角 */
    padding: 10px 20px; /* 内边距 */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影 */
    border: 1px solid rgba(255, 255, 255, 0.2); /* 边框 */
  }
</style>
