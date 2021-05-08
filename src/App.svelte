<script>
  import "./global.css";
  import {onMount} from 'svelte';
  let count = 0;
  onMount(() => {
    const interval = setInterval(() => count++, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  $: seconds = `${count} seconds have gone by`;
</script>

<main>
  <p class="text-green-500 text-8xl">Meme</p>
  <h1>Wow</h1>
  <p class="text-xl text-gray-500">{seconds}</p>
</main>