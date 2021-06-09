<template>
    <div>
        <Menubar :model="itemBarraPrincipal.invitado">
            <template #start>
                <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40" class="p-mr-2">
            </template>
            <template #end>
                <InputText placeholder="Search" type="text" />
            </template>
        </Menubar>
    </div>
</template>

<script>
import itemBarraPrincipal from './items/items'

export default {
    data() {
        return {
           itemBarraPrincipal
        }
    }
}
</script>