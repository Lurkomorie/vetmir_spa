<script src="./CustomerPage.js"></script>

<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <div class="col">
          <i class="icon-people fa-lg-big"/><strong class="big-txt">Единая база клиентов</strong>
          <div class="btn-group">
            <div class="dropdown">
              <button
                type="button"
                class="btn btn-success"
                data-toggle="modal"
                data-target="#successModalNovKl">
                <i class="fa fa-plus fa-lg"/> Новый клиент
              </button>
            </div>
          </div>
          <div class="btn-group">
            <div class="dropdown">
              <a href="#customers_dev.html">
                <button
                  type="button"
                  class="btn btn-primary">
                  <i class="fa fa-wrench fa-lg "/>
                </button>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ol>
    <div
      id="test"
      class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="form-group row">
            <div class="col-md-2">
              <input
                type="text"
                class="form-control"
                placeholder="№ карты или ФИО">
            </div>
            <div class="col-md-2 col-xl-bd-klient">
              <input
                type="text"
                class="form-control"
                placeholder="Телефон">
            </div>
            <div class="col-md-1 col-xl-bd-klient-1">
              <select
                name="select1"
                class="form-control">
                <option>Статус</option>
                <option value="VIP">VIP</option>
                <option value="Голд">Голд</option>
                <option value="">бла бла бла</option>
              </select>
            </div>
            <div class="col-md-2 col-xl-bd-klient">
              <select
                name="select1"
                class="form-control">
                <option>Город</option>
                <option value="VIP">Днепропетровск</option>
                <option value="бла бла бла">бла бла бла</option>
                <option value="">бла бла бла</option>
              </select>
            </div>
            <div class="col-md-2 col-xl-bd-klient">
              <select
                name="select1"
                class="form-control">
                <option>Район</option>
                <option value="VIP">Шивченковский</option>
                <option value="бла бла бла">бла бла бла</option>
                <option value="">бла бла бла</option>
              </select>
            </div>
            <div class="col-md-2 col-xl-bd-klient">
              <select
                name="select1"
                class="form-control">
                <option>Улица</option>
                <option value="VIP">Калинина</option>
                <option value="бла бла бла">бла бла бла</option>
                <option value="">бла бла бла</option>
              </select>
            </div>
            <div class="col-md-2 col-xl-bd-klient-2">
              <label class="switch switch-text switch-text-1 switch-pill switch-success-outline-alt">
                <input
                  type="checkbox"
                  class="switch-input">
                <span
                  class="switch-label switch-label-1"
                  data-off="Долг?"
                  data-on="Долг?"/>
                <span class="switch-handle switch-handle-1"/>
              </label>
            </div>
            <button
              type="button"
              class="btn btn-warning btn-sm-1"
              data-toggle="tooltip"
              data-placement="top"
              title="Просмотр">
              <i class="fa fa-search fa-lg"/>
            </button>
            <button
              type="button"
              class="btn btn-light btn-sm-1"
              data-toggle="tooltip"
              data-placement="top"
              title="Сбросить фильтр">
              <i class="fa fa-mail-reply fa-lg"/>
            </button>
          </div>
          <table class="table table-customers table-responsive-sm table-hover table-outline mb-0">
            <thead class="thead-light">
              <tr>
                <th>&nbsp; №</th>
                <th class="text-center">Ф.И.О</th>
                <th class="text-center">Группа</th>
                <th class="text-center">Телефон</th>
                <th class="text-center">Питомцы</th>
                <th class="text-center">Баланс</th>
                <th class="text-center">Бонусов</th>
                <th class="text-center">Город</th>
                <th class="text-center">Район</th>
                <th class="text-center">Адрес</th>
                <th>Добавлен</th>
                <th>Визит</th>
                <th/>
              </tr>
            </thead>
            <tbody>
              <tr v-for="customer in customers">
                <td>&nbsp;{{ customer.id }}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm"
                    data-toggle="modal"
                    data-target="#dangerModalBlokInfo">
                    <i class="fa fa-lock fa-lg"/>
                  </button>
                  {{ customer.FIO }}
                </td>
                <td class="text-center">{{ customer.group }}</td>
                <td class="text-center">{{ customer.phone_number }}</td>
                <td class="text-center">
                  <button
                    type="button"
                    class="btn btn-warning btn-sm"
                    data-toggle="modal"
                    data-target="#myModalLabelpetinfo">
                    <span class="big-txt-2">5</span>
                    <i class="fa fa-github-alt fa-lg"/>
                    <i class="fa fa-search fa-lg"/>
                  </button>
                  <button
                    type="button"
                    class="btn btn-success btn-sm"
                    data-toggle="modal"
                    data-target="#myModalLabelpetadd">
                    <i class="fa fa-plus fa-lg"/>
                  </button>
                </td>
                <td class="text-center">{{ customer.balance }}
                </td>
                <td class="text-center">
                  <a href="#">
                    <span class="badge badge-prais badge-pill badge-light">
                      <b class="big-beh-1">{{ customer.bonuses }}</b>
                    </span>
                  </a>
                </td>
                <td class="text-center">{{ customer.city }}</td>
                <td class="text-center">{{ customer.district }}</td>
                <td class="text-center">{{ customer.address }}</td>
                <td>{{ customer.created_at }}</td>
                <td>30.03.2018</td>
                <td class="text-center">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Отправить на приём">
                    <i class="fa fa-location-arrow fa-lg"/>
                  </button>
                  <button
                    type="button"
                    class="btn btn-success btn-sm"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Записать на прием">
                    <i class="fa fa-calendar fa-lg"/>
                  </button>
                  <button
                    type="button"
                    class="btn btn-success btn-sm"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Отправить СМС">
                    <i class="fa fa-envelope  fa-lg"/>
                  </button>
                  <button
                    type="button"
                    class="btn btn-success btn-sm"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Запланировать звонок">
                    <i class="fa fa-phone fa-lg"/>
                  </button>
                  <div class="btn-group">
                    <div class="dropdown">
                      <button
                        id="dropdownMenuButton"
                        class="btn btn-sm btn-primary "
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        <i class="fa fa-cog fa-lg"/>
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton">
                        <a
                          class="dropdown-item"
                          data-toggle="modal"
                          data-target="#successModaledit"
                          href="#"><i class="fa fa-pencil fa-lg"/> Редактировать</a>
                        <a
                          class="dropdown-item"
                          data-toggle="modal"
                          data-target="#dangerModalBlokAdd"
                          href="#"><i class="fa fa-lock fa-lg"/> Блокировать</a>
                        <a
                          class="dropdown-item"
                          href="#"><i class="fa fa-unlock fa-lg"/> Разблокировать</a>
                        <a
                          class="dropdown-item"
                          data-toggle="modal"
                          data-target="#dangerModaldel"
                          href="#"><i class="fa fa-trash fa-lg"/> Удалить</a>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <nav>
            <ul class="pagination">
              <li class="page-item"><a
                class="page-link"
                href="#">Пред</a></li>
              <li class="page-item active">
                <a
                  class="page-link"
                  href="#">1</a>
              </li>
              <li class="page-item"><a
                class="page-link"
                href="#">2</a></li>
              <li class="page-item"><a
                class="page-link"
                href="#">3</a></li>
              <li class="page-item"><a
                class="page-link"
                href="#">4</a></li>
              <li class="page-item"><a
                class="page-link"
                href="#">След</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <!-- Окно Добавление клиента в базу -->
    <div
      id="successModalNovKl"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div
        class="modal-dialog modal-dialog-customers-add modal-success"
        role="document">
        <div class="modal-content">
          <div class="modal-header">
            <i class="fa fa-user-plus fa-lg fa-lg-big"/><strong class="big-txt-0">Добавление клиента в базу</strong>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <div
              v-if="createForm.errors.length > 0"
              class="alert alert-danger">
              <p><strong>Whoops!</strong> Something went wrong!</p>
              <br>
              <ul>
                <li v-for="error in createForm.errors">
                  {{ error }}
                </li>
              </ul>
            </div>
            <div class="row">
              <div class="col-md-10">
                <form
                  role="form"
                  class="card-body">
                  <div class="form-group row">
                    <label class="col-md-3 col-form-label">Ф И О</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="fa fa-user"/></span>
                        </div>
                        <input
                          id="FIO"
                          v-model="createForm.FIO"
                          type="text"
                          name="FIO"
                          class="form-control"
                          placeholder="Ф И О"
                          required
                          @keyup.enter="store">
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-3 col-form-label">Пол</label>
                    <div class="col-md-9 col-form-label">
                      <div class="form-check form-check-inline mr-1">
                        <input
                          id="male"
                          class="form-check-input"
                          type="radio"
                          value="option1"
                          name="inline-radios">
                        <label
                          class="form-check-label"
                          for="inline-radio1">Муж.</label>
                      </div>
                      <div class="form-check form-check-inline mr-1">
                        <input
                          id="woman"
                          class="form-check-input"
                          type="radio"
                          value="option2"
                          name="inline-radios">
                        <label
                          class="form-check-label"
                          for="inline-radio2">Жен.</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-3 col-form-label">Телефон</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="fa fa-phone fa-lg"/></span>
                        </div>
                        <input
                          id="phone_number"
                          v-model="createForm.phone_number"
                          type="text"
                          name="phone_number"
                          class="form-control"
                          placeholder="Телефон"
                          required
                          @keyup.enter="store">
                      </div>
                      <span class="help-block">(999) 999-9999</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      class="col-md-3 col-form-label"
                      for="select1">Город</label>
                    <div class="col-md-4 input-group">
                      <select
                        id="city"
                        v-model="createForm.city"
                        name="city"
                        class="form-control"
                        required
                        @keyup.enter="store">
                        <option/>
                        <option value="1">Запорожье</option>
                        <option value="1">Киев</option>
                        <option value="2">бла бла бла</option>
                      </select>
                      <span class="input-group-append">
                        <button
                          type="button"
                          class="btn btn-success"
                          data-toggle="modal"
                          data-target="#myModalLabelGorodAdd"><i class="fa fa-plus fa-lg"/></button>
                      </span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      class="col-md-3 col-form-label"
                      for="select1">Район в городе</label>
                    <div class="col-md-4 input-group">
                      <select
                        id="district"
                        v-model="createForm.district"
                        name="district"
                        class="form-control"
                        required
                        @keyup.enter="store">
                        <option/>
                        <option value="1">Шивченковский</option>
                        <option value="1">Коммунаровский</option>
                        <option value="2">бла бла бла</option>
                      </select>
                      <span class="input-group-append">
                        <button
                          type="button"
                          class="btn btn-success"
                          data-toggle="modal"
                          data-target="#myModalLabelRaionAdd"><i class="fa fa-plus fa-lg"/></button>
                      </span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      class="col-md-3 col-form-label"
                      for="select1">Улица</label>
                    <div class="col-md-8 input-group">
                      <select
                        id="address"
                        name="address"
                        class="form-control"
                        required
                        @keyup.enter="store">
                        <option/>
                        <option value="1">Калинина</option>
                        <option value="1">Культурная</option>
                        <option value="2">бла бла бла</option>
                      </select>
                      <span class="input-group-append">
                        <button
                          type="button"
                          class="btn btn-success"
                          data-toggle="modal"
                          data-target="#myModalLabelUlicaAdd"><i class="fa fa-plus fa-lg"/></button>
                      </span>
                      <div class="col-md-3">
                        <div class="input-group">
                          <input
                            id="house"
                            type="text"
                            name="house"
                            class="form-control"
                            placeholder="Дом">
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="input-group">
                          <input
                            id="kv"
                            type="text"
                            name="kv"
                            class="form-control"
                            placeholder="Кв.">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      class="col-md-3 col-form-label"
                      for="select1">Как узнали ?</label>
                    <div class="col-md-9">
                      <select
                        id="how_knew"
                        v-model="createForm.how_knew"
                        name="how_knew"
                        class="form-control"
                        required
                        @keyup.enter="store">
                        <option/>
                        <option value="Друзья/знакомые">Друзья/знакомые</option>
                        <option value="Интернет">Интернет</option>
                        <option value="Бигборд">Бигборд</option>
                        <option value="Флаер">Флаер</option>
                        <option value="Сами нашли">Сами нашли</option>
                        <option value="Радио">Радио</option>
                        <option value="ТВ">ТВ</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      class="col-md-3 col-form-label"
                      for="textarea-input">Особые отметки</label>
                    <div class="col-md-9"/>
                    <textarea
                      id="unique_mark_ups"
                      v-model="createForm.unique_mark_ups"
                      name="unique_mark_ups"
                      rows="1"
                      class="form-control"
                      placeholder=""
                      @keyup.enter="store"/>
                  </div>
                  <div class="form-group row">
                    <label
                      class="col-md-3 col-form-label"
                      for="select1">Группа клиентов</label>
                    <div class="col-md-4 input-group">
                      <select
                        id="group"
                        v-model="createForm.group"
                        name="group"
                        class="form-control"
                        required
                        @keyup.enter="store">
                        <option/>
                        <option value="1">Новый</option>
                        <option value="1">Постоянный</option>
                        <option value="2">бла бла бла</option>
                      </select>
                    </div>
                  </div>
                  <div class="card-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"><i class="fa fa-mail-reply fa-lg"/> Отмена</button>
                    <a
                      class="btn btn-success"
                      data-toggle="collapse"
                      href="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample">
                      <i class="fa fa-plus fa-lg"/> Добавить пета
                    </a>
                    <button
                      type="submit"
                      class="btn btn-success"
                      @click="store"><i class="fa fa-plus fa-lg"/> Добавить без пета</button>
                  </div>
                </form>
                <div
                  id="collapseExample"
                  class="collapse">
                  <div class="card-body">
                    <div class="form-group row">
                      <label class="col-md-3 col-form-label">Кличка</label>
                      <div class="col-md-9">
                        <div class="input-group">
                          <input
                            id="animalName"
                            type="text"
                            name="animalName"
                            class="form-control"
                            placeholder="Лорд">
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        class="col-md-3 col-form-label"
                        for="select1">Вид</label>
                      <div class="col-md-9 input-group">
                        <select
                          id="kind"
                          name="kind"
                          class="form-control">
                          <option/>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <span class="input-group-append">
                          <button
                            type="button"
                            class="btn btn-success"
                            data-toggle="modal"
                            data-target="#myModalLabelvidadd"><i class="fa fa-plus fa-lg"/></button>
                        </span>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        class="col-md-3 col-form-label"
                        for="select1">Порода</label>
                      <div class="col-md-9 input-group">
                        <select
                          id="race"
                          name="race"
                          class="form-control">
                          <option/>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <span class="input-group-append">
                          <button
                            type="button"
                            class="btn btn-success"
                            data-toggle="modal"
                            data-target="#myModalLabelPorodaAdd"><i class="fa fa-plus fa-lg"/></button>
                        </span>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-md-3 col-form-label">Пол</label>
                      <div class="col-md-9 col-form-label">
                        <div class="form-check form-check-inline mr-1">
                          <input
                            id="animalMale"
                            class="form-check-input"
                            type="radio"
                            value="male"
                            name="inline-radios">
                          <label
                            class="form-check-label"
                            for="inline-radio1">Муж.</label>
                        </div>
                        <div class="form-check form-check-inline mr-1">
                          <input
                            id="animalFemale"
                            class="form-check-input"
                            type="radio"
                            value="female"
                            name="inline-radios">
                          <label
                            class="form-check-label"
                            for="inline-radio2">Жен.</label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-md-3 col-form-label" >Дата рождения</label>
                      <div class="col-md-9">
                        <div class="input-grogup">
                          <input
                            id="birth_date"
                            type="text"
                            name="birth_date"
                            class="form-control"
                            placeholder="99.99.999">
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-md-3 col-form-label">Вес</label>
                      <div class="col-md-3">
                        <div class="input-group">
                          <input
                            id="kg"
                            type="text"
                            name="kg"
                            class="form-control"
                            placeholder="32 Кг">
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="input-group">
                          <input
                            id="g"
                            type="text"
                            name="g"
                            class="form-control"
                            placeholder="500 Гр">
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        class="col-md-3 col-form-label"
                        for="textarea-input">Особые отметки</label>
                      <div class="col-md-9">
                        <textarea
                          id="animal_unique_mark_ups"
                          name="textarea-input"
                          rows="1"
                          class="form-control"
                          placeholder="Злой сука"/>
                      </div>
                    </div>
                    <div class="card-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"><i class="fa fa-mail-reply fa-lg"/> Отмена</button>

                      <button
                        type="button"
                        class="btn btn-success"><i class="fa fa-plus fa-lg"/> Добавить в базу</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- / окно Добавление клиента в базу -->
    <!-- Окно редактирования клиента  -->
    <div
      id="successModaledit"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div
        class="modal-dialog modal-dialog-customers-add modal-primary"
        role="document">
        <div class="modal-content">
          <div class="modal-header">
            <i class="fa fa-user-plus fa-lg fa-lg-big"/><strong class="big-txt-0">Редактирования клиента: № 5687 Мысак Дмитрий Игоревич </strong>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">  vb
              <div class="col-md-10">
                <div class="card-body">
                  <div class="form-group row">
                    <label class="col-md-3 col-form-label" >Ф И О</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="fa fa-user"/></span>
                        </div>
                        <input
                          type="text"
                          name="input1-group1"
                          class="form-control"
                          placeholder="Мысак Дмитрий Игоревич">
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-3 col-form-label">Пол</label>
                    <div class="col-md-9 col-form-label">
                      <div class="form-check form-check-inline mr-1">
                        <input
                          class="form-check-input"
                          type="radio"
                          value="option1"
                          name="inline-radios">
                        <label
                          class="form-check-label"
                          for="inline-radio1">Муж.</label>
                      </div>
                      <div class="form-check form-check-inline mr-1">
                        <input
                          class="form-check-input"
                          type="radio"
                          value="option2"
                          name="inline-radios">
                        <label
                          class="form-check-label"
                          for="inline-radio2">Жен.</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-md-3 col-form-label" >Телефон</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="fa fa-phone fa-lg"/></span>
                        </div>
                        <input
                          type="text"
                          name="input1-group1"
                          class="form-control"
                          placeholder="(999) 999-9999">
                      </div>
                      <span class="help-block">(999) 999-9999</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      class="col-md-3 col-form-label"
                      for="select1">Город</label>
                    <div class="col-md-4 input-group">
                      <select
                        name="select1"
                        class="form-control">
                        <option/>
                        <option value="1">Запорожье</option>
                        <option value="1">Киев</option>
                        <option value="2">бла бла бла</option>
                      </select>
                      <span class="input-group-append">
                        <button
                          type="button"
                          class="btn btn-success"
                          data-toggle="modal"
                          data-target="#myModalLabelGorodAdd"><i class="fa fa-plus fa-lg"/></button>
                      </span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      class="col-md-3 col-form-label"
                      for="select1">Район в городе</label>
                    <div class="col-md-4 input-group">
                      <select
                        name="select1"
                        class="form-control">
                        <option/>
                        <option value="1">Шивченковский</option>
                        <option value="1">Коммунаровский</option>
                        <option value="2">бла бла бла</option>
                      </select>
                      <span class="input-group-append">
                        <button
                          type="button"
                          class="btn btn-success"
                          data-toggle="modal"
                          data-target="#myModalLabelRaionAdd"><i class="fa fa-plus fa-lg"/></button>
                      </span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      class="col-md-3 col-form-label"
                      for="select1">Улица</label>
                    <div class="col-md-8 input-group">
                      <select
                        name="select1"
                        class="form-control">
                        <option/>
                        <option value="1">Калинина</option>
                        <option value="1">Культурная</option>
                        <option value="2">бла бла бла</option>
                      </select>
                      <span class="input-group-append">
                        <button
                          type="button"
                          class="btn btn-success"
                          data-toggle="modal"
                          data-target="#myModalLabelUlicaAdd"><i class="fa fa-plus fa-lg"/></button>
                      </span>
                      <div class="col-md-3">
                        <div class="input-group">
                          <input
                            type="text"
                            name="input1-group1"
                            class="form-control"
                            placeholder="Дом">
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="input-group">
                          <input
                            type="text"
                            name="input1-group1"
                            class="form-control"
                            placeholder="Кв.">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      class="col-md-3 col-form-label"
                      for="select1">Как узнали ?</label>
                    <div class="col-md-9">
                      <select
                        name="select1"
                        class="form-control">
                        <option>Интернет</option>
                        <option value="Друзья/знакомые">Друзья/знакомые</option>
                        <option value="Интернет">Интернет</option>
                        <option value="Бигборд">Бигборд</option>
                        <option value="Флаер">Флаер</option>
                        <option value="Сами нашли">Сами нашли</option>
                        <option value="Радио">Радио</option>
                        <option value="ТВ">ТВ</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      class="col-md-3 col-form-label"
                      for="textarea-input">Особые отметки</label>
                    <div class="col-md-9">
                      <textarea
                        name="textarea-input"
                        rows="1"
                        class="form-control"
                        placeholder="бла бла бла"/>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      class="col-md-3 col-form-label"
                      for="select1">Группа клиентов</label>
                    <div class="col-md-4 input-group">
                      <select
                        name="select1"
                        class="form-control">
                        <option/>
                        <option value="1">Новый</option>
                        <option value="1">Постоянный</option>
                        <option value="2">бла бла бла</option>
                      </select>
                    </div>
                  </div>
                  <div class="card-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"><i class="fa fa-mail-reply fa-lg"/> Отмена</button>
                    <button
                      type="button"
                      class="btn btn-primary"><i class="fa fa-check-square-o fa-lg"/> Сохранить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer"/>
      </div>
    </div>
    <!-- / окно редактирования клиента -->
    <!-- Окно информация о петах -->
    <div
      id="myModalLabelpetinfo"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div
        class="modal-dialog modal-dialog-customers-add modal-success"
        role="document">
        <div class="modal-content">
          <div class="modal-header">
            <i class="fa fa-github-alt fa-lg fa-lg-big"/><strong class="big-txt-0">Петы клиента № 5864 Иванов Петров Сидоро</strong>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <table class="table table-customers table-responsive-sm table-hover table-outline mb-0">
                    <thead class="thead-light">
                      <tr>
                        <th class="text-center">Животное</th>
                        <th class="text-center">Порода</th>
                        <th class="text-center">Кличка</th>
                        <th class="text-center">Пол</th>
                        <th class="text-center">Дата регистрации</th>
                        <th class="text-center">Дата рождения</th>
                        <th class="text-center">Вес</th>
                        <th/>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">Собака</td>
                        <td class="text-center">Среднеазиатская Авчарка</td>
                        <td class="text-center">Макинтош</td>
                        <td class="text-center">муж</td>
                        <td class="text-center">2014-08-26</td>
                        <td class="text-center">2014-08-26</td>
                        <td class="text-center">124кг.40гр.</td>
                        <td class="text-center">
                          <button
                            type="button"
                            class="btn btn-secondary btn-sm"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Печатать">
                            <i class="fa fa-print fa-lg"/>
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary btn-sm"
                            data-toggle="modal"
                            data-target="#myModalLabelpetedit">
                            <i class="fa fa-pencil fa-lg"/>
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger btn-sm"
                            data-toggle="modal"
                            data-target="#dangerModaldel">
                            <i class="fa fa-trash fa-lg"/>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-light"
              data-dismiss="modal"><i class="fa fa-mail-reply fa-lg"/>&nbsp; Закрыть</button>
            <button
              type="button"
              class="btn btn-danger"><i class="fa fa-trash fa-lg"/>&nbsp; ДА УДАЛИТЬ</button>
          </div>
        </div>
      </div>
    </div>
    <!-- / окно информация о петах -->
    <!--  окно добавить нового пета -->
    <div
      id="myModalLabelpetadd"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div
        class="modal-dialog modal-dialog-customers-add modal-success"
        role="document">
        <div class="modal-content">
          <div class="modal-header">
            <i class="fa fa-github-alt fa-lg fa-lg-big"/><strong class="big-txt-0">Добавляем питомца клиенту: Карта № 9875 Мысак Дмитрий Игоревич</strong>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <div class="form-group row">
                <label class="col-md-3 col-form-label" >Кличка</label>
                <div class="col-md-9">
                  <div class="input-group">
                    <input
                      type="text"
                      name="input1-group1"
                      class="form-control"
                      placeholder="Кличка">
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label
                  class="col-md-3 col-form-label"
                  for="select1">Вид</label>
                <div class="col-md-9 input-group">
                  <select
                    name="select1"
                    class="form-control">
                    <option/>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <span class="input-group-append">
                    <button
                      type="button"
                      class="btn btn-success"
                      data-toggle="modal"
                      data-target="#myModalLabelvidadd"><i class="fa fa-plus fa-lg"/></button>
                  </span>
                </div>
              </div>
              <div class="form-group row">
                <label
                  class="col-md-3 col-form-label"
                  for="select1">Порода</label>
                <div class="col-md-9 input-group">
                  <select
                    name="select1"
                    class="form-control">
                    <option/>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <span class="input-group-append">
                    <button
                      type="button"
                      class="btn btn-success"
                      data-toggle="modal"
                      data-target="#myModalLabelPorodaAdd"><i class="fa fa-plus fa-lg"/></button>
                  </span>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-3 col-form-label">Пол</label>
                <div class="col-md-9 col-form-label">
                  <div class="form-check form-check-inline mr-1">
                    <input
                      id="inline-radio1"
                      class="form-check-input"
                      type="radio"
                      value="option1"
                      name="inline-radios">
                    <label
                      class="form-check-label"
                      for="inline-radio1">Муж.</label>
                  </div>
                  <div class="form-check form-check-inline mr-1">
                    <input
                      id="inline-radio2"
                      class="form-check-input"
                      type="radio"
                      value="option2"
                      name="inline-radios">
                    <label
                      class="form-check-label"
                      for="inline-radio2">Жен.</label>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-3 col-form-label">Дата рождения</label>
                <div class="col-md-9">
                  <div class="input-group">
                    <input
                      type="text"
                      name="input1-group1"
                      class="form-control"
                      placeholder="Дата рождения">
                  </div>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-md-3 col-form-label">Вес</label>
                <div class="col-md-3">
                  <div class="input-group">
                    <input
                      type="text"
                      name="input1-group1"
                      class="form-control"
                      placeholder="Кг.">
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="input-group">
                    <input
                      type="text"
                      name="input1-group1"
                      class="form-control"
                      placeholder="Гр.">
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label
                  class="col-md-3 col-form-label"
                  for="textarea-input">Особые отметки</label>
                <div class="col-md-9">
                  <textarea
                    name="textarea-input"
                    rows="3"
                    class="form-control"
                    placeholder=""/>
                </div>
              </div>
              <div class="card-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"><i class="fa fa-mail-reply fa-lg"/> Отмена</button>
                <button
                  type="button"
                  class="btn btn-success"><i class="fa fa-plus fa-lg"/> Добавить в базу</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- / окно добавить нового пета -->
    <!--  окно редактировать пета p.s. Точно такое-же окно одни в один в петах -->
    <div
      id="myModalLabelpetedit"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div
        class="modal-dialog modal-dialog-customers-add modal-success"
        role="document">
        <div class="modal-content">
          <div class="modal-header">
            <i class="fa fa-github-alt fa-lg fa-lg-big"/><strong class="big-txt-0">Редактирование питомца</strong>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <div class="form-group row">
                <label class="col-md-3 col-form-label">Кличка</label>
                <div class="col-md-9">
                  <div class="input-group">
                    <input
                      type="text"
                      name="input1-group1"
                      class="form-control"
                      placeholder="Лорд">
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label
                  class="col-md-3 col-form-label"
                  for="select1">Вид</label>
                <div class="col-md-9 input-group">
                  <select
                    name="select1"
                    class="form-control">
                    <option/>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <span class="input-group-append">
                    <button
                      type="button"
                      class="btn btn-success"
                      data-toggle="modal"
                      data-target="#myModalLabelvidadd"><i class="fa fa-plus fa-lg"/></button>
                  </span>
                </div>
              </div>
              <div class="form-group row">
                <label
                  class="col-md-3 col-form-label"
                  for="select1">Порода</label>
                <div class="col-md-9 input-group">
                  <select
                    name="select1"
                    class="form-control">
                    <option/>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <span class="input-group-append">
                    <button
                      type="button"
                      class="btn btn-success"
                      data-toggle="modal"
                      data-target="#myModalLabelPorodaAdd"><i class="fa fa-plus fa-lg"/></button>
                  </span>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-3 col-form-label">Пол</label>
              <div class="col-md-9 col-form-label">
                <div class="form-check form-check-inline mr-1">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="option1"
                    name="inline-radios">
                  <label
                    class="form-check-label"
                    for="inline-radio1">Муж.</label>
                </div>
                <div class="form-check form-check-inline mr-1">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="option2"
                    name="inline-radios">
                  <label
                    class="form-check-label"
                    for="inline-radio2">Жен.</label>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-3 col-form-label">Дата рождения</label>
              <div class="col-md-9">
                <div class="input-group">
                  <input
                    type="text"
                    name="input1-group1"
                    class="form-control"
                    placeholder="99.99.999">
                </div>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-md-3 col-form-label">Вес</label>
              <div class="col-md-3">
                <div class="input-group">
                  <input
                    type="text"
                    name="input1-group1"
                    class="form-control"
                    placeholder="32 Кг">
                </div>
              </div>
              <div class="col-md-3">
                <div class="input-group">
                  <input
                    type="text"
                    name="input1-group1"
                    class="form-control"
                    placeholder="500 Гр">
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label
                class="col-md-3 col-form-label"
                for="textarea-input">Особые отметки</label>
              <div class="col-md-9">
                <textarea
                  name="textarea-input"
                  rows="3"
                  class="form-control"
                  placeholder="Злой сука"/>
              </div>
            </div>
            <div class="card-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"><i class="fa fa-mail-reply fa-lg"/> Отмена</button>
              <button
                type="button"
                class="btn btn-success"><i class="fa fa-plus fa-lg"/> Сохранить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- / окно редактировать пета -->
    <!--  окно добавить новый вид -->
    <div
      id="myModalLabelvidadd"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div
        class="modal-dialog modal-dialog-customers-add modal-success"
        role="document">
        <div class="modal-content">
          <div class="modal-header">
            <i class="fa fa-github-alt fa-lg fa-lg-big"/><strong class="big-txt-0">Добавление нового вида животного в базу</strong>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <br>
              <div class="form-group row">
                <label class="col-md-3 col-form-label" >Новый Вид</label>
                <div class="col-md-9">
                  <div class="input-group">
                    <input
                      type="text"
                      name="input1-group1"
                      class="form-control"
                      placeholder="Вид">
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"><i class="fa fa-mail-reply fa-lg"/> Отмена</button>
                <button
                  type="button"
                  class="btn btn-success"><i class="fa fa-plus fa-lg"/> Добавить в базу</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- / окно добавить новый вид -->
    <!--  окно добавить новую породу -->
    <div
      id="myModalLabelPorodaAdd"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div
        class="modal-dialog modal-dialog-customers-add modal-success"
        role="document">
        <div class="modal-content">
          <div class="modal-header">
            <i class="fa fa-github-alt fa-lg fa-lg-big"/><strong class="big-txt-0">Добавление новой породы</strong>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <div class="form-group row">
                <label
                  class="col-md-3 col-form-label"
                  for="select1">Выберите вид в который надо добавить породу</label>
                <div class="col-md-9 input-group">
                  <select
                    id="select1"
                    name="select1"
                    class="form-control">
                    <option/>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-3 col-form-label">Новая порода</label>
                <div class="col-md-9">
                  <div class="input-group">
                    <input
                      type="text"
                      name="input1-group1"
                      class="form-control"
                      placeholder="Порода">
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"><i class="fa fa-mail-reply fa-lg"/> Отмена</button>
                <button
                  type="button"
                  class="btn btn-success"><i class="fa fa-plus fa-lg"/> Добавить в базу</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- / окно добавить новый вид -->
    <!-- Всплывающие окно добовления городов-->
    <div
      id="myModalLabelGorodAdd"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div
        class="modal-dialog modal-dialog-customers-add modal-success"
        role="document">
        <div class="modal-content">
          <div class="modal-header">
            <strong class="big-txt-0">Добавление нового города</strong>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <br>
              <div class="form-group row">
                <label class="col-md-3 col-form-label">Новый город</label>
                <div class="col-md-9">
                  <div class="input-group">
                    <input
                      type="text"
                      name="input1-group1"
                      class="form-control"
                      placeholder="город">
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"><i class="fa fa-mail-reply fa-lg"/> Отмена</button>
                <button
                  type="button"
                  class="btn btn-success"><i class="fa fa-plus fa-lg"/> Добавить в базу</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- // Всплывающие окно добовления городов-->
    <!-- Всплывающие окно добовления районов-->
    <div
      id="myModalLabelRaionAdd"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div
        class="modal-dialog modal-dialog-customers-add modal-success"
        role="document">
        <div class="modal-content">
          <div class="modal-header">
            <strong class="big-txt-0">Добавление нового района</strong>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <br>
              <div class="form-group row">
                <label class="col-md-3 col-form-label">Новый район</label>
                <div class="col-md-9">
                  <div class="input-group">
                    <input
                      type="text"
                      name="input1-group1"
                      class="form-control"
                      placeholder="район">
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"><i class="fa fa-mail-reply fa-lg"/> Отмена</button>
                <button
                  type="button"
                  class="btn btn-success"><i class="fa fa-plus fa-lg"/> Добавить в базу</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- // Всплывающие окно добовления районов-->
    <!-- Всплывающие окно добовления улиц-->
    <div
      id="myModalLabelUlicaAdd"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div
        class="modal-dialog modal-dialog-customers-add modal-success"
        role="document">
        <div class="modal-content">
          <div class="modal-header">
            <strong class="big-txt-0">Добавление новой улицы</strong>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <br>
              <div class="form-group row">
                <label class="col-md-3 col-form-label">Новая улица</label>
                <div class="col-md-9">
                  <div class="input-group">
                    <input
                      id="input1-group1"
                      type="text"
                      name="input1-group1"
                      class="form-control"
                      placeholder="улица">
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"><i class="fa fa-mail-reply fa-lg"/> Отмена</button>
                <button
                  type="button"
                  class="btn btn-success"><i class="fa fa-plus fa-lg"/> Добавить в базу</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- // Всплывающие окно добовления улиц-->
    <!-- Всплывающие окно удаления -->
    <div
      id="dangerModaldel"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div
        class="modal-dialog modal-danger"
        role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Удаление</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Безвозвратно удалить?<br>
            Информацию нельзя будет восстановить!
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-light"
              data-dismiss="modal"><i class="fa fa-mail-reply fa-lg"/>&nbsp; Закрыть</button>
            <button
              type="button"
              class="btn btn-danger"><i class="fa fa-trash fa-lg"/>&nbsp; ДА УДАЛИТЬ</button>
          </div>
        </div>
      </div>
    </div>
    <!-- // Всплывающие окно удаления -->
    <!-- Всплывающие окно блокировки клиента -->
    <div
      id="dangerModalBlokAdd"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div
        class="modal-dialog modal-danger"
        role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Блокировка клиента</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group row">
              <label
                class="col-md-3 col-form-label"
                for="textarea-input">Причина блокировка клиента</label>
              <div class="col-md-9">
                <textarea
                  id="textarea-input"
                  name="textarea-input"
                  rows="3"
                  class="form-control"
                  placeholder="Напишите причину блокировки"/>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-light"
              data-dismiss="modal"><i class="fa fa-mail-reply fa-lg"/>&nbsp; Закрыть</button>
            <button
              type="button"
              class="btn btn-danger"><i class="fa fa-trash fa-lg"/>&nbsp; Заблокировать</button>
          </div>
        </div>
      </div>
    </div>
    <!-- // Всплывающие окно блокировки клиента -->
    <!-- Всплывающие окно Причина блокировки -->
    <div
      id="dangerModalBlokInfo"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div
        class="modal-dialog modal-danger"
        role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Причина блокировки</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h5>Неадекватный, бухой, бросался на всех.</h5>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-light"
              data-dismiss="modal"><i class="fa fa-mail-reply fa-lg"/>&nbsp; Закрыть</button>
          </div>
        </div>
      </div>
    </div>
    <button @click="update">Kill me</button>
  </div>
  <!-- // Всплывающие окно Причина блокировки -->
</template>
