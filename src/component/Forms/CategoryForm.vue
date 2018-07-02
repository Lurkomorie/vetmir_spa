<template>
    <div class="modal fade" id="CategoryForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-customers-add modal-success" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <i class="fa fa-github-alt fa-lg fa-lg-big"></i><strong class="big-txt-0">Добавление нового вида животного в базу</strong>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="col-md-10">
                    <div class="card-body">
                        <form action="" @submit="onSubmit" method="post" enctype="multipart/form-data" class="form-horizontal">
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label" for="text-input">Новый Вид</label>
                                <div class="col-md-9">
                                    <div class="input-group">
                                        <input type="text" v-validate="'required|min:3'" id="input1-group1" name="name" class="form-control" placeholder="Вид" :class="{'is-invalid': errors.has('name')}">
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
    methods: {
        onSubmit() {
            if (!this.errors.items.length) {
                var form = new FormData();
                form.append('name', $('#CategoryForm input[name="name"]').val());
                console.log($('#CategoryForm input[name="name"]').val());

                $.ajax({
                    url: "http://demo.local/api/category",
                    type: "POST",
                    data: form,
                    processData: false,
                    contentType: false,
                    cache: false,
                    dataType: "jsonp",
                    success: function (data) {
                        console.log(data);
                    }
                });
            }
        }
    }
}
</script>
