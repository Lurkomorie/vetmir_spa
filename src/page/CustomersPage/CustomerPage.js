const axios = require('axios');

export default {
  name: 'CustomerPage',
  data() {
    return {
      customers: [],

      createForm: {
        errors: [],
        FIO: 'Bitch',
        phone_number: '',
        city: '',
        group: '',
        unique_mark_ups: '',
        how_knew: '',
        district: '',
        clinic_id: 1,
        redirect: '',
      },

      editForm: {
        errors: [],
        FIO: 'Bitch',
        phone_number: '51',
        city: '51',
        group: '51',
        unique_mark_ups: '51',
        how_knew: '51',
        district: '51',
        clinic_id: 1,
        redirect: '',
      },
    };
  },
  mounted() {
    this.prepareComponent();
  },

  methods: {
    prepareComponent() {
      console.log('Customers');
      this.getClients();
    },

    getClients() {
      axios.get('http://demo.local/api/customers').then(response => {
        this.customers = response.data;
        console.log(response.data);
      });
    },
    update() {
      console.log('FUCK ME');
      const FIO = 'KILL ME I FUCKING DID IT';
      window.axios
        .put(`/api/customers/${2}`, { FIO })
        .then(() => {
          console.log('test2');
        })
        .catch(response => console.log(response.response));
    },
    store() {
      console.log('IS IT FUCKING WORKING');
      const form = this.createForm;

      window
        .axios({
          method: 'post',
          url: `/customers`,
          data: form,
          config: { headers: { 'Content-Type': 'multipart/form-data' } },
        })
        .then(response => console.log(response, form, 'test'))
        .catch(response => console.log(response));
    },
  },
};
