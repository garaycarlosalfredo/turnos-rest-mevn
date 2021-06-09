import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

/*Prime Faces*/
import PrimeVue from 'primevue/config';
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

//Data Table
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
//Toast

import Toast from 'primevue/toast';

//Menubar
import Menubar from 'primevue/menubar';

import 'primevue/resources/themes/saga-blue/theme.css'     //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
/*--- */
const app = createApp(App);
app.use(PrimeVue);

//MenuBar
app.component('Menubar',Menubar)
//Tools
app.component('InputText', InputText)
app.component('Button', Button)
//Tables
app.component('DataTable',DataTable)
app.component('Column',Column)
app.component('ColumnGroup',ColumnGroup)
//Toast
app.component('Toast',Toast)

app.mount('#app')

//createApp(App).mount('#app')//Original
