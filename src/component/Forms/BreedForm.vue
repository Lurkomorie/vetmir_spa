<template>
    <div class="modal fade" id="BreedForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-customers-add modal-success" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <i class="fa fa-github-alt fa-lg fa-lg-big"></i><strong class="big-txt-0">Добавление новой породы</strong>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="col-md-10">
                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label" for="select1">Вид</label>
                            <div class="col-md-9 input-group">
                                <select id="select1" v-validate="'required'" name="category_id" class="form-control" :class="{'is-invalid': errors.has('category_id')}">
                                    <option>Выберите вид</option>
                                    <option v-for="(category, index) in categories" :key="index" :value="category.id">{{ category.name }}</option>
                                </select>
                            </div>
                        </div>
                        <form action="" method="post" enctype="multipart/form-data" class="form-horizontal">
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label" for="text-input">Новая порода</label>
                                <div class="col-md-9">
                                    <div class="input-group">
                                        <input type="text" v-validate="'required|min:4'" id="input1-group1" name="name" class="form-control" placeholder="Порода" :class="{'is-invalid': errors.has('name')}">
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fa fa-mail-reply fa-lg"></i> Отмена</button>
                                <button type="button" class="btn btn-success" @click="onSubmit"><i class="fa fa-plus fa-lg"></i> Добавить в базу</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: []
        }
    },
    created() {
        var $this = this;

        $.ajax({
            url: "http://demo.local/api/category",
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                $this.categories = data;
            }
        })
    },
    methods: {
        onSubmit() {
            if (!this.errors.items.length) {
                var form = new FormData();
                form.append('category_id', $('input[name="category_id"]').val());
                form.append('name', $('input[name="name"]').val());

                $.ajax({
                    url: "http://demo.local/api/breed",
                    type: "POST",
                    data: form,
                    processData: false,
                    contentType: false,
                    cache: false,
                    dataType: "jsonp",
                    success: function (data) {
                        console.log(data);
                    }
                })
            }
        }
    }
}
</script>
