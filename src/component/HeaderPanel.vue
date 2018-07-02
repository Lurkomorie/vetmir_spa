<template>
  <header class="app-header navbar">
    <button 
      class="navbar-toggler mobile-sidebar-toggler d-lg-none mr-auto" 
      type="button">
      <span class="navbar-toggler-icon"/>
    </button>
    <a 
      class="navbar-brand" 
      href="#"/>
    <button 
      class="navbar-toggler sidebar-toggler d-md-down-none" 
      type="button">
      <span class="navbar-toggler-icon"/>
    </button>
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item px-3">
        <div class="btn-group">
          <a 
            target="_blank" 
            class="nav-link" 
            href="#"><button 
              type="button" 
              class="btn btn-primary"><i class="fa fa-desktop fa-lg"/></button></a>
        </div>
        <div class="btn-group">
          <a 
            class="nav-link" 
            href="kassa"><button 
              type="button" 
              class="button-r-1 btn btn-success"><i class="fa fa-money fa-lg"/>&nbsp; КАССА</button></a>
          <button 
            type="button" 
            class="btn button-r-2 btn-success  dropdown-toggle-split" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false">
            <i class="fa fa-arrow-down fa-lg fa-lg-smail"/><span class="sr-only"/>
          </button>
          <div class="dropdown-menu">
            <a 
              class="dropdown-item" 
              href="kassa_save_temp"><i class="fa fa-save fa-lg"/>Сохранённые чеки</a>
            <a 
              class="dropdown-item" 
              href="kassa_history"><i class="fa fa-clock-o fa-lg"/>История кассы</a>
          </div>
        </div>
        <div class="btn-group">
          <a href="grafik"><button 
            type="button" 
            class="btn button-r-1 btn-primary"><i class="fa fa-calendar fa-lg"/>&nbsp; График</button></a>
          <button 
            type="button" 
            class="btn button-r-2 btn-primary  dropdown-toggle-split" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false">
            <i class="fa fa-arrow-down fa-lg fa-lg-smail"/><span class="sr-only"/>
          </button>
          <div class="dropdown-menu">
            <a 
              class="dropdown-item" 
              href="grafik_priem"><i class="fa fa-file-word-o fa-lg"/>Записать на прием</a>
            <a 
              class="dropdown-item" 
              href="#"><i class="fa fa-sitemap fa-lg"/>Графики филиалов</a>
          </div>
        </div>
        <a href="perezvon">
          <button 
            type="button" 
            class="btn btn-primary">
          <i class="fa fa-phone fa-lg"/>&nbsp; <span class="badge badge-warning"> 2</span></button>
        </a>
      </li>
      <li class="nav-item d-md-down-none">
        <a class="nav-link" ><i class="icon-people"/><span class="badge badge-pill badge-warning">2</span></a>
      </li>
      <li class="nav-item d-md-down-none">
        <a 
          class="nav-link" 
          href="sms_add"><i class="fa fa-envelope-o fa-lg"/><span class="badge badge-pill badge-warning">2</span></a>
      </li>
    </ul>
    <ul class="nav navbar-nav ml-auto">
      <div class="btn-group">
        <div class="dropdown">
          <button 
            class="btn btn-outline-primary btn-outline-primary-1 btn-lg btn-lg-1" 
            type="button" 
            id="dropdownMenuButton" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false">
            Чумаченко 40
          </button>
          <div 
            class="dropdown-menu" 
            aria-labelledby="dropdownMenuButton">
            <a 
              class="dropdown-item" 
              href="#">Чумаченко 40</a>
            <a 
              class="dropdown-item" 
              href="#">Полякова 15</a>
          </div>
        </div>
      </div>
      <li class="nav-item d-md-down-none">
        <a 
          class="nav-link" 
          href="#"><i class="icon-bell"/><span class="badge badge-pill badge-danger">5</span></a>
      </li>
      <li class="nav-item dropdown">
        <a 
          class="nav-link" 
          data-toggle="dropdown" 
          href="#" 
          role="button" 
          aria-haspopup="true" 
          aria-expanded="false">
          <i class="icon-user-female icons font-2xl d-block dropdown-toggle"> user</i>
        </a>
        <div class="dropdown-menu dropdown-menu-right">
          <div class="dropdown-header text-center">
            <strong>Account</strong>
          </div>
          <a 
            class="dropdown-item" 
            href="smena"><i class="fa fa-clock-o"/> Управление сменой</a>
          <a 
            class="dropdown-item" 
            href="blank"><i class="fa fa-pencil-square-o"/> Бланки/Отчеты</a>
          <a 
            class="dropdown-item" 
            href="sms"><i class="fa fa-envelope"/> СМС модуль</a>
          <a 
            class="dropdown-item" 
            href="#"><i class="fa fa-wrench"/> Должники<span class="badge badge-danger">17</span></a>
          <a 
            class="dropdown-item" 
            href="calculator"><i class="fa fa-calculator"/> Калькулятор дозировок</a>
          <a 
            class="dropdown-item" 
            href="phone_kniga"><i class="fa fa-file"/> Телефонная книга</a>
          <a 
            class="dropdown-item" 
            href="#"><i class="fa fa-lock"/> Выйти</a>
        </div>
      </li>
    </ul>
    <button 
      class="navbar-toggler aside-menu-toggler" 
      type="button">
      <span class="navbar-toggler-icon"/>
    </button>
  </header>
</template>

<script>
export default {
  name: 'HeaderPanel'
}
</script>
