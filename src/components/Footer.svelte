<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<style>
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 8px;
  }

  li {
    display: inline-block;
    transition: 0.2s ease;
    margin: 0 5px;
    background: linear-gradient(145deg, #c9d8d2, #a9b6b0);
    border-radius: 10px;
    box-shadow: -3px -3px 8px #919c97, 3px 3px 8px #e7f8f1;
  }

  li:hover {
    background: linear-gradient(145deg, #a9b6b0, #c9d8d2);
    box-shadow: inset 5px 5px 12px #e7f8f1, inset -5px -5px 12px #919c97;
  }

  a {
    color: #023973;
    text-decoration: none;
    margin: 0;
    padding: 3px;
    transition: 0.2s ease;
    display: inline-block;
  }

  li:hover a {
    transform: scale(0.99);
  }

  @media only screen and (max-width: 800px) {
    li {
      box-shadow: -2px -2px 4px #919c97, 2px 2px 4px #e7f8f1;
    }

    li:hover {
      box-shadow: inset 3px 3px 12px #e7f8f1, inset -3px -3px 12px #919c97;
    }
  }
</style>

{#if visible}
  <footer transition:fly={{ y: 100, duration: 4000 }}>
    <ul>
      <li>
        <a href="https://github.com/silvestrevivo" target="_blank">
          <i class="fa fa-github" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/silvestrevivo" target="_blank">
          <i class="fa fa-twitter" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/silvestre-vivo-1a6843bb/"
          target="_blank">
          <i class="fa fa-linkedin" />
        </a>
      </li>
      <li>
        <a href="https://www.reddit.com/user/silvestrevivo/" target="_blank">
          <i class="fa fa-reddit" />
        </a>
      </li>
    </ul>
  </footer>
{/if}
