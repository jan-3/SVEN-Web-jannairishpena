<template>
     <div class="container">
        <div id="header" class="header div-child d-flex justify-content-center align-items-center px-5">
            <!-- <img class="img-fluid mb-3" src="dog.jpg" alt="Dog image"  /> -->
            <div class="align-self-start ma-5" style=""> 
                <img src="paw-icon.png" alt="" width="13%" @click="scrollToSection('header')">
                 <b class="ml-2">PAW</b>TASTIC
            </div>
            <div class="ms-auto white--text " style="width:30%;">
             <small class="mr-3 link"  @click="scrollToSection('about')">About us</small>/<small class="mx-3 link"  @click="scrollToSection('pet-form')">Schedule a visit</small>
               <p class="header-title">We care for your furry little loved ones while you wait!</p>  <br>
                <v-btn rounded @click="scrollToSection('pet-form')">schedule a visit</v-btn>
            </div>
        </div>
        <div id="about" class="about div-child d-flex justify-content-around align-items-center pa-5">
            <div style="width:30%">
               <p class="header-title">Expert care for your furry, feathery, or scaley friend</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi alias delectus perspiciatis obcaecati at assumenda officiis, reprehenderit odio dolore perferendis hic nemo asperiores esse.</p>
                <v-btn rounded dark @click="scrollToSection('pet-form')">schedule a visit</v-btn>
            </div>
           
            <img class="img-fluid mb-3" src="dog-3.jpg" alt="Dog image"  width="30%"/>
        </div>
        <div id="pet-form" class="pet-form div-child d-flex justify-content-center align-items-center w-100 ">
        
           
  <div class="position-relative w-50">
  <!-- Right-aligned image -->
  <div class="d-flex justify-content-end">
    <img class="img-fluid" src="dog-4.png" alt="Dog image" />
  </div>

  <!-- Overlay text (not right-aligned) -->
  <div
    class="position-absolute text-white p-5 d-flex justify-content-center align-items-center flex-column"
    style="top: 30px; left: 20px;"
  >
    <div class="d-flex justify-content-center align-items-center mb-3" >
        <img src="paw-icon.png" alt="" width="13%" @click="scrollToSection('header')">
    <b class="ml-2">PAW</b>TASTIC
    </div>
  
     <p class="header-title">All services include:</p> <br>
     <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
<li>Praesent commodo justo nec sapien volutpat, id ultrices augue porta.</li>
<li>Donec vel eros at nulla finibus sollicitudin sit amet in nisi.</li>
     </ul>
  </div>
</div>

                
           
            
            <div class="form flex-grow-1" style="height:100%;width:60%; background-color:#f7eceb; padding:6rem" >
                <p class="header-title">We'll take your dog for a walk. Just tell us when!</p>
                <div class="d-flex flex-column">
                    <div class="my-1">
                        <div class="d-flex justify-content-between">
                            <div class="mr-3 w-40">
                                <small class="text-muted d-block">frequency</small>
                                <v-btn-toggle v-model="formObject.frequency" class="pt-n3 d-flex w-100" mandatory dense>
                                    <v-btn small class="flex-grow-1" >Recurring</v-btn>
                                    <v-btn small class="flex-grow-1" >One-time</v-btn>
                                </v-btn-toggle>
                            </div>
                            <div class="flex-grow-1">
                                <small class="text-muted d-block">Start date</small>
                                <v-menu
                                    v-model="menu2"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                            class="pt-1"
                                            v-model="formObject.startDate"
                                            placeholder="Select a date"
                                            hide-details=""
                                            readonly
                                            outlined
                                            dense
                                            v-bind="attrs"
                                            v-on="on"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker
                                            no-title
                                            v-model="formObject.startDate"
                                            @input="menu2 = false"
                                            
                                        ></v-date-picker>
                                    </v-menu>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2">
                        <small class="text-muted d-block">Days (Lorem ipsum dolor sit)</small>
                        <v-btn-toggle v-model="formObject.day" mandatory dense class="d-flex w-100">
                            <v-btn small class="flex-grow-1">Mon</v-btn>
                            <v-btn small class="flex-grow-1">Tue</v-btn>
                            <v-btn small class="flex-grow-1">Wed</v-btn>
                            <v-btn small class="flex-grow-1">Thu</v-btn>
                            <v-btn small class="flex-grow-1">Fri</v-btn>
                            <v-btn small class="flex-grow-1">Sat</v-btn>
                            <v-btn small class="flex-grow-1">Sun</v-btn>
                        </v-btn-toggle>
                    </div>
                    <div class="mt-2 w-30">
                        <small class="text-muted d-block">Time (Lorem ipsum dolor sit)</small>
                        <v-btn-toggle v-model="formObject.time" mandatory dense class="d-flex w-100">
                            <v-btn small class="flex-grow-1">Morning</v-btn>
                            <v-btn small class="flex-grow-1">Afternoon</v-btn>
                            <v-btn small class="flex-grow-1">Evening</v-btn>
                        </v-btn-toggle>
                    </div>
                    <div class="my-2">
                        <small class="text-muted d-block">Add notes here (Lorem ipsum dolor sit)</small>
                        <textarea v-model="formObject.notes" outlined placeholder="Add text here" class="w-100 p-2 form-control border border-secondary shadow-none"></textarea>
                    </div>
                
                    <v-btn @click="schedule" rounded dark>Schedule Service</v-btn>
                </div>
            </div>
        </div>

     
</div>
</template>
<script>
export default {
     data: () => ({
        formObject:{},
        menu2:false
    }),
    methods:{
        scrollToSection(section){
            const el = document.getElementById(section)
            if(el){
                el.scrollIntoView({
                    behavior:'smooth'
                })
            }
        },
        schedule(){
            console.log(this.formObject)
            axios.post(`service`, this.formObject).then(res=>{
                Object.assign(this.formObject,{})
                console.log(res.data, '@res')
            })
        }
    }
}
</script>
<style >

.v-date-picker-table .v-btn--active {
  background-color: #1976d2 !important;
  color: white !important;
}
.v-date-picker-table .v-btn.v-btn--flat:not(.v-btn--active) {
  background-color: #bbdefb !important;
  color: black !important;
}

.header {
   /* background-color: yellow; */
   background-image: url('dog-1.jpg');
   background-size:cover;
   width: 100%;
   height: 40%;
   /* overflow: visible; */
}
.desc{
    width: 50%;
    position: absolute;
    top: 20px;
}
.container .div-child {
    /* border:1px solid; */
    
}
h1 {
    border:1px solid red;
}
.header-title{
    font-size: 30px;
    line-height: 30px;
    font-weight: bold;
}
.v-text-field.v-text-field--enclosed .v-text-field__details, .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)>.v-input__control>.v-input__slot {
    padding: 0 12px;
    height: 24px !important;
    min-height: 15px !important;
}
.link {
    cursor: pointer;
}

.pet-form{
    background-color: #525872;
    height: 50%;
}

.img-fluid{
    overflow: hidden;
}
</style>