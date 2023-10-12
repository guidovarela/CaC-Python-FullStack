const {createApp} = Vue 
createApp({
    data(){
        return{
            frutas:[
                {nombre:"Manzana", cantidad:50},
                {nombre:"Uva", cantidad:75},
                {nombre:"Mango", cantidad:96},
                {nombre:"Frutilla", cantidad:45}
            ]
        }
    }
}).mount("#ejemplo4")