<script src="./HomePage.js"></script>

<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div 
            class="alert alert-primary" 
            role="alert">
            Добро пожаловать в новый модуль управления «ВетМир»! Удачной смены!
          </div>
          <div 
            class="alert alert-danger" 
            role="alert">
            Внимание! Новые цена на услуги и приемы!
          </div>
        </div>
        <div class="card-header">
          <h5><i class="fa fa-user-md fa-lg"> Сотрудники на смене</i></h5>
        </div>
        <table class="table table-responsive-sm table-hover table-outline mb-0">
          <thead class="thead-light">
            <tr>
              <th><i class="fa fa-user-md fa-lg">Сотрудники</i></th>
              <th class="text-center">Должность</th>
              <th class="text-center">Начало работы</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Бажанов Николай Владимирович
              </td>
              <td class="text-center">
                Врач
              </td>
              <td class="text-center">
                24.04.2018 09:02
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card">
        <div class="card-header">
          <h5><i class="icon-people"> Клиенты на приеме</i></h5>
        </div>
        <table class="table table-responsive-sm table-hover table-outline mb-0">
          <thead class="thead-light">
            <tr>
              <th><i class="icon-people">ФИО</i></th>
              <th class="text-center">Начало приема</th>
              <th class="text-center"/>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Бажанов Николай Владимирович
              </td>
              <td class="text-center">
                24.04.2018 15:16
              </td>
              <td class="text-center">
                <button 
                  type="button" 
                  class="btn btn-danger btn-sm">
                  <i class="fa fa-trash fa-lg"/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
