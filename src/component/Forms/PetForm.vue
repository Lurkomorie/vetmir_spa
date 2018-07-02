<template>
    <div class="modal fade" :id="(type === 'create') ? 'PetCreateForm' : 'PetEditForm'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-customers-add" :class="(type === 'create') ? 'modal-success' : 'modal-primary'" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <i class="fa fa-github-alt fa-lg fa-lg-big"></i><strong class="big-txt-0">Редактирование питомца</strong>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="col-md-10">
                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label" for="text-input">Кличка</label>
                            <div class="col-md-9">
                                <div class="input-group">
                                    <input type="text" v-validate="'required|min:2'" id="input1-group1" name="name" class="form-control" :class="{'is-invalid': errors.has('name')}" placeholder="Лорд">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label" for="select1">Вид</label>
                            <div class="col-md-9 input-group">
                                <select id="select1" v-validate="'required'" name="category_id" class="form-control" :class="{'is-invalid': errors.has('category_id')}">
                                    <option>Выберите вид</option>
                                    <option v-for="(category, index) in categories" :key="index" :value="category.id">{{ category.name }}</option>
                                </select>
                                <span class="input-group-append">
                                    <button type="button" class="btn btn-success" @click="toggleCategoryForm"><i class="fa fa-plus fa-lg"></i></button>
                                </span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label" for="select1">Порода</label>
                            <div class="col-md-9 input-group">
                                <select id="select1" v-validate="'required'" name="breed_id" class="form-control" :class="{'is-invalid': errors.has('breed_id')}">
                                    <option>Выберите породу</option>
                                    <option v-for="(breed, index) in breeds" :key="index" :value="breed.id">{{ breed.name }}</option>
                                </select>
                                <span class="input-group-append">
                                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#BreedForm"><i class="fa fa-plus fa-lg"></i></button>
                                </span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">Пол</label>
                            <div class="col-md-9 col-form-label">
                                <div class="form-check form-check-inline mr-1">
                                    <input class="form-check-input" type="radio" id="male" name="sex" value="male" checked>
                                    <label class="form-check-label" for="inline-radio1">Муж.</label>
                                </div>
                                <div class="form-check form-check-inline mr-1">
                                    <input class="form-check-input" type="radio" id="female" name="sex" value="female">
                                    <label class="form-check-label" for="inline-radio2">Жен.</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label" for="email-input">Дата рождения</label>
                            <div class="col-md-9">
                                <div class="input-group">
                                    <input type="text" v-validate="'required|date_format:DD/MM/YYYY'" id="input1-group1" name="birth_date" class="form-control input1-groupt1" :class="{'is-invalid': errors.has('birth_date')}" placeholder="DD/MM/YYYY">
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label" for="email-input">Вес</label>
                            <div class="col-md-3">
                                <div class="input-group align-items-center">
                                    <input type="text" id="input1-group1" v-validate="'required|numeric'" name="weight-kg" class="form-control" placeholder="32" :class="{'is-invalid': errors.has('weight-kg')}">
                                    <div class="ml-1">Кг</div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="input-group align-items-center">
                                    <input type="text" id="input1-group1" v-validate="'required|numeric'" name="weight-g" class="form-control" placeholder="500" :class="{'is-invalid': errors.has('weight-g')}">
                                    <div>Гр</div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label" for="textarea-input">Особые отметки</label>
                            <div class="col-md-9">
                                <textarea id="textarea-input" name="textarea-input" rows="3" class="form-control" placeholder="Злой сука"></textarea>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fa fa-mail-reply fa-lg"></i> Отмена</button>
                            <button type="button" class="btn" :class="{'btn-success': type === 'create', 'btn-primary': type === 'edit'}" @click='onSubmit'><i class="fa fa-check-square-o fa-lg"></i> Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['type', 'categories', 'breeds'],
    methods: {
        onSubmit() {
            if (!this.errors.items.length) {
                var form = new FormData();
                form.append('name', $('input[name="name"]').val());
                form.append('category_id', $('select[name="category_id"]').val());
                form.append('breed_id', $('select[name="breed_id"]').val());
                form.append('sex', $('input[name="sex"]').val());
                form.append('birth_date', $('input[name="birth_date"]').val());
                form.append('weight', $('input[name="weight-kg"]').val() + "." + $('input[name="weight-g"]').val());

                $.ajax({
                    url: "http://demo.local/api/pet",
                    type: "POST",
                    data: form,
                    processData: false,
                    contentType: false,
                    cache: false,
                    dataType: "json",
                    success: function (data) {
                        console.log(data);
                    }
                })
            }
        },
        toggleCategoryForm() {
            this.$emit('categoryFormToggled');
        },
        toggleBreedForm() {
            this.$emit('breedFormToggled');
        }
    }
}
</script>
