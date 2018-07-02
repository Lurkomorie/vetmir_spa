import PetForm from '../../component/Forms/PetForm';
import CategoryForm from '../../component/Forms/CategoryForm';
import BreedForm from '../../component/Forms/BreedForm';

const $ = require('jquery');

export default {
  name: 'pet',
  components: {
    PetForm,
    CategoryForm,
    BreedForm,
  },
  created() {
    const $this = this;
    $.ajax({
      url: 'http://demo.local/api/pet',
      type: 'GET',
      dataType: 'jsonp',
      success(data) {
        $this.pets = data;

        $.ajax({
          url: 'http://demo.local/api/breed',
          type: 'GET',
          dataType: 'jsonp',
          success(data) {
            $this.breeds = data;
          },
        });

        $.ajax({
          url: 'http://demo.local/api/category',
          type: 'GET',
          dataType: 'jsonp',
          success(data) {
            $this.categories = data;
          },
        });
      },
      error(xhr, status, error) {
        alert(error);
      },
    });
  },
  data() {
    return {
      pets: [],
      breeds: [],
      categories: [],
    };
  },
  methods: {
    fillEditForm(index) {
      $('#PetEditForm input[name="name"]').val(this.pets[index].name);
      $('#PetEditForm select[name="category_id"]').val(this.pets[index].category_id);
      $('#PetEditForm select[name="breed_id"]').val(this.pets[index].breed_id);
      $('#PetEditForm input[name="sex"]')
        .filter(this.pets[index].sex === 'male' ? '#male' : '#female')
        .attr('checked', true);
      $('#PetEditForm input[name="birth_date"]').val(this.pets[index].birth_date);
      $('#PetEditForm input[name="weight-kg"]').val(this.pets[index].weight.substring(0, 2));
      $('#PetEditForm input[name="weight-g"]').val(this.pets[index].weight.substring(3));
    },
    showBreedModal() {
      $('#BreedForm').modal('show');
    },
    showCategoryModal() {
      $('#CategoryForm').modal('show');
    },
  },
};
