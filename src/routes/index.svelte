<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
  import { _ } from 'svelte-i18n'
</script>


<svelte:head>
	<title>{$_('test_title')}</title>
</svelte:head>

<section>
	<h1>
		{$_('test_title')}
	</h1>
</section>