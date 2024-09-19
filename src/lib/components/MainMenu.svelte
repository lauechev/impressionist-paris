<script>
  import { base } from '$app/paths';
  import { t } from '$stores/translations';
</script>

<nav>
  <ul class="menu-list no-select">
    <li><a class="silent-link" href="{base}">{$t.home}</a></li>
    <li><a class="silent-link" href="{base}/pages#main-title">{$t.explore}</a></li>
    <li><a class="silent-link" href="{base}/tour#main-title">{$t.tour}</a></li>
    <li><a class="silent-link" href="{base}/metadata#main-title">{$t.metadata}</a></li>
  </ul>
</nav>

<style>
  .menu-list {
    display: flex;
    gap: 1em;
    justify-content: space-around;
    padding: 0;
    margin: 0;
  }

  .menu-list li {
    list-style-type: none;
    font-size: 2em;
    background-color: #e6e279;
  }

  .menu-list li:hover {
    list-style-type: none;
    font-size: 2em;
    text-decoration:underline;
  }
</style>