<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<style>
  main {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    text-align: center;
    height: 60vh;
    max-width: 1000px;
    width: 100%;
  }

  h1 {
    font-size: 5em;
    color: #bccac4;
    text-shadow: -5px -5px 8px #919c97, 5px 5px 8px #e7f8f1;
  }

  h2 {
    color: #023973;
    margin-top: 32px;
    font-size: 32px;
    font-weight: 600;
  }

  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 3em;
      color: #bccac4;
      text-shadow: -2px -2px 4px #919c97, 2px 2px 4px #e7f8f1;
    }
    h2 {
      font-size: 1.5em;
    }
  }
</style>

<main>
  <div>
    {#if visible}
      <h1 transition:fly={{ y: -100, duration: 2500 }}>
        Silvestre Vivo
        <br />
        Front-end Developer
      </h1>
      <h2 transition:fly={{ y: 400, duration: 2000 }}>Coming soon...</h2>
    {/if}
  </div>
</main>
