<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/"><i class="icon-speedometer"/>Главная</router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/customers"
            class="nav-link"><i class="fa fa-address-card-o"/> База клиентов</router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/pets"
            class="nav-link"><i class="fa fa-github-alt fa-lg"/> База питомцев</router-link>
        </li>
        <li class="nav-item nav-dropdown">
          <a
            class="nav-link nav-dropdown-toggle"
            href="#"><i class="fa fa-medkit fa-lg "/>Прайс Клиника</a>
          <ul class="nav-dropdown-items">
            <li class="nav-item nav-link-main-aktive">
              <a
                class="nav-link"
                href="/price"><i class="fa fa-medkit fa-lg "/> Весь прайс</a>
            </li>
            <li class="nav-item nav-link-main-aktive">
              <a
                class="nav-link"
                href="/price"><i class="fa fa-medkit fa-lg "/> Аптека</a>
            </li>
            <li class="nav-item nav-link-main-aktive">
              <a
                class="nav-link"
                href="/price"><i class="fa fa-medkit fa-lg"/> Препараты</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/price"><i class="fa fa-medkit fa-lg "/> Приемы</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/price"><i class="fa fa-medkit fa-lg "/> ПриемУзкСпц</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/price"><i class="fa fa-medkit fa-lg"/> Расходные</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/price"><i class="fa fa-medkit fa-lg"/> Лаборатория</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/price"><i class="fa fa-medkit fa-lg "/> Диагностика</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/price"><i class="fa fa-medkit fa-lg "/> Манипуляции</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/price"><i class="fa fa-medkit fa-lg "/> Операции</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/price"><i class="fa fa-medkit fa-lg "/> Операции+ </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/price"><i class="fa fa-medkit fa-lg "/> Стационар</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/price"><i class="fa fa-medkit fa-lg"/> блаблабла</a>
            </li>
          </ul>
        </li>
        <li class="nav-item nav-dropdown">
          <a
            class="nav-link nav-dropdown-toggle"
            href="#"><i class="fa fa-scissors fa-lg"/>Прайс Грумер</a>
          <ul class="nav-dropdown-items">
            <li class="nav-item nav-link-main-aktive">
              <a
                class="nav-link"
                href="/price"><i class="fa fa-scissors fa-lg "/> бла бла бла</a>
            </li>
          </ul>
        </li>
        <li class="nav-item nav-dropdown">
          <a
            class="nav-link nav-dropdown-toggle"
            href="#"><i class="fa fa-paw fa-lg"/>Прайсы Зоомагазин</a>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <a
                class="nav-link"
                href="buttons/buttons"><i class="fa fa-paw fa-lg"/> Сухие корма</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="buttons/button-group"><i class="fa fa-paw fa-lg"/> Влажные корма</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="buttons/dropdowns"><i class="fa fa-paw fa-lg"/> Лакомства</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="buttons/social-buttons"><i class="fa fa-paw fa-lg"/> Туалеты</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="base/popovers"><i class="fa fa-paw fa-lg"/> Обмундирование</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="base/progress"><i class="fa fa-paw fa-lg"/> Витамины</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="base/switches"><i class="fa fa-paw fa-lg"/> Препараты</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="base/tables"><i class="fa fa-paw fa-lg"/> Грызуны</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="base/tabs"><i class="fa fa-paw fa-lg"/> Птицы</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="base/tooltips"><i class="fa fa-paw fa-lg"/> блаблабла</a>
            </li>
          </ul>
        </li>
        <li class="nav-item nav-dropdown">
          <a
            class="nav-link nav-dropdown-toggle"
            href="#"><i class="fa fa-gear fa-lg"/>Управление</a>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <a
                class="nav-link"
                href="admin_kassa_history"><i class="fa fa-clock-o fa-lg"/> Управления кассами</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="stock" ><i class="fa fa-shopping-cart fa-lg"/> Склад</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="user"><i class="fa fa-user-md fa-lg"/> Персонал</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="safe"><i class="fa fa-bank fa-lg"/> Сейф</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="statistics"><i class="fa fa-line-chart fa-lg"/> Статистика</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="information"><i class="fa fa-bell-o fa-lg"/> События</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="site_otziv"><i class="fa fa-object-group fa-lg"/> Сайт</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="costs"><i class="fa fa-scribd fa-lg"/> Расходы</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <button
      class="sidebar-minimizer brand-minimizer"
      type="button"/>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>
