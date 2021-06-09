
<template>
	<div>
        <Toast />

        <div class="card">
            <h5>Events</h5>
            <DataTable :value="respuesta"  selectionMode="single" dataKey="_id"
                @rowSelect="onRowSelect" @rowUnselect="onRowUnselect" responsiveLayout="scroll">
                <Column field="dni" header="Dni"></Column>
                <Column field="nombre" header="Nombre"></Column>
                <Column field="apellido" header="Apellido"></Column>
            </DataTable>
        </div>
    </div>

</template>

<script>
import ProductService from './service/ProductService';

export default {
    data() {
        return {
            respuesta: null,
            selectedProduct1: null,
            selectedProduct2: null,
            selectedProduct3: null,
            selectedProducts1: null,
            selectedProducts2: null,
            selectedProducts3: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        //this.productService.getProductsSmall().then(data => this.paciente = data);
        this.productService.buscarPaciente("Carlos").then(data => this.respuesta = data);
    },
    methods: {
        onRowSelect(event) {
            //this.$toast.add({severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.name, life: 3000});
            this.productService.buscarPacienteSeleccionado(event.data._id).then(data=>console.log(data))
        },
        onRowUnselect(event) {
           // this.$toast.add({severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.name, life: 3000});
        }
    }
}
</script>     