<template>
	<div>
        <div class="card">
            <DataTable :value="products" class="p-datatable-sm" responsiveLayout="scroll">
                <template #header>
                    Small Table
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>

        <div class="card">
            <DataTable :value="products" responsiveLayout="scroll">
                <template #header>
                    Normal Table
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name">                
                    <template #bod>
                        <Button type="button">{{name}}</Button>
                    </template>
                </Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>

        <div class="card">
            <DataTable :value="products" class="p-datatable-lg" responsiveLayout="scroll">
                <template #header>
                    Large Table
                </template>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
	</div>
</template>

<script>
import ProductService from './service/ProductService';

export default {
    data() {
        return {
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsSmall().then(data => this.products = data);
    }
}
</script>   