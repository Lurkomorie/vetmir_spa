<script src="./PetPage.js"></script>

<template>
  <div class="content">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <div class="col">
          <i class="fa fa-github-alt fa-lg-big"/><strong class="big-txt">Единая база животных</strong>
          <div class="btn-group">
            <div class="dropdown">
              <button
                type="button"
                class="btn btn-success"
                data-toggle="modal"
                data-target="#PetCreateForm">
                <i class="fa fa-plus fa-lg"/> Новое животное
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
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="form-group row">
            <div class="col-md-2">
              <input
                type="text"
                class="form-control"
                placeholder="Кличка">
            </div>
            <div class="col-md-2">
              <select
                id="select1"
                name="select1"
                class="form-control">
                <option>Вид</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div class="col-md-2">
              <select
                id="select2"
                name="select1"
                class="form-control">
                <option>Порода</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div class="form-check form-check-inline mr-1">
              <input
                id="inline-radio1"
                class="form-check-input"
                type="radio"
                value="option1"
                name="inline-radios">
              <label
                class="form-check-label"
                for="inline-radio1">Муж</label>
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
                for="inline-radio2">Жен </label>
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
                <th class="text-center">№</th>
                <th class="text-center">Кличка</th>
                <th class="text-center">Животное</th>
                <th class="text-center">Порода</th>
                <th class="text-center">Пол</th>
                <th class="text-center">Дата регистрации</th>
                <th class="text-center">Дата рождения</th>
                <th class="text-center">Вес</th>
                <th/>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(pet, index) in pets"
                :key="index">
                <td class="text-center">{{ pet.id }}</td>
                <td class="text-center">{{ pet.name }}</td>
                <td class="text-center">{{ categories[index].name }}</td>
                <td class="text-center">{{ breeds[index].name }}</td>
                <td class="text-center">{{ pet.sex }}</td>
                <td class="text-center">{{ pet.created_at }}</td>
                <td class="text-center">{{ pet.birth_date }}</td>
                <td class="text-center">{{ pet.weight }} Кг</td>
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
                    data-target="#PetEditForm"
                    @click="fillEditForm(index)">
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
          <nav>
            <ul class="pagination">
              <li class="page-item"><a
                class="page-link"
                href="#">Пред</a></li>
              <li class="page-item active"><a
                class="page-link"
                href="#">1</a></li>
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

    <PetForm
      :categories="categories"
      :breeds="breeds"
      type="create"
      @breedFormToggled="showBreedModal"
      @categoryFormToggled="showCategoryModal"/>
    <PetForm
      :categories="categories"
      :breeds="breeds"
      type="edit"
      @breedFormToggled="showBreedModal"
      @categoryFormToggled="showCategoryModal"/>
    <CategoryForm />
    <BreedForm />
  </div>
</template>
