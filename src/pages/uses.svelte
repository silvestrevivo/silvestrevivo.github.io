<script>
  import Footer from "../components/Footer.svelte";
</script>

<style>
  h2 {
    font-size: 3.5em;
    color: #bccac4;
    text-shadow: -3px -3px 6px #919c97, 3px 3px 6px #e7f8f1;
  }
  main {
    border: 1px solid red;
    padding: 25px 25px 75px;
  }

  .container {
    width: 500px;
    max-width: 100%;
    padding: 25px;
    color: #023973;
    border-radius: 25px;
    background: linear-gradient(145deg, #a9b6b0, #c9d8d2);
    box-shadow: 15px 15px 65px #a4b0ab, -15px -15px 65px #d4e4dd;
  }

  ul {
    list-style: none;
    font-size: 24px;
  }
</style>

<main>
  <h2>what I use</h2>
  <div class="container">
    <ul>
      <li>html</li>
      <li>css</li>
      <li>sass/less</li>
      <li>bootstrap</li>
      <li>materializecss</li>
      <li>javascrip/es5/es6/es7</li>
      <li>jquery</li>
      <li>foundation mails</li>
      <li>d3</li>
      <li>webpack</li>
      <li>parceljs</li>
      <li>greensock</li>
      <li>gulp</li>
      <li>grunt</li>
      <li>npm</li>
      <li>github</li>
      <li>gitlab</li>
      <li>bitbucket</li>
      <li>react</li>
      <li>redux/sagas/thunks</li>
      <li>graphql</li>
      <li>nodejs</li>
      <li>express</li>
      <li>mongodb</li>
      <li>mongoose</li>
      <li>svelte</li>
      <li>sapper</li>
      <li>postman</li>
      <li>insomnia</li>
      <li>photoshop</li>
      <li>illustrator</li>
    </ul>
  </div>
</main>

<Footer />
