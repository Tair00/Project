<template>

<v-app>
  <!-- Layout menu in drawer -->
  <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            КИПУ
          </v-list-item-title>
          <v-list-item-subtitle>
            Учебный проект
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item
 v-for="link in links"
 :key="link.title"
 :to="link.url"
>

            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item-content>
      </v-list-item>
      
</v-list-item-group>

      </v-list>
  </v-navigation-drawer> 

<div>
	<v-container fluid>
		<v-layout row> 
			<v-flex xs12>
				<v-carousel>
					<v-carousel-item></v-carousel-item>
				</v-carousel>
			</v-flex>
		</v-layout> 
	</v-container>
	<v-container>
		<v-layout row> 
			<v-flex xs12>
				<v-card>
					<v-img
					height="200px"
					></v-img>
					<v-card-title primary-title>
					<div>
						<h3 
class="headline mb0"
>Здесь будет заголовок</h3>
						<div>Здесь будет описание</div>
					</div>
					</v-card-title>
					<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn text>Open</v-btn>
					<v-btn raised color="primary">
						Buy
					</v-btn>
					</v-card-actions>				
				</v-card>
			</v-flex>
		</v-layout> 
	</v-container>
	</div>




    <v-app-bar-nav-icon @click = 'drawer = !drawer'></v-app-bar-nav-icon>
    
    <v-app-bar app dark color="primary">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <router-link to="/" tag="span" class="pointer">Home</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
       <!-- <v-btn 
       v-for="link in links" 
       :key="link.title" 
       text><v-icon left>{{ link.icon }}</v-icon>{{ link.title }}</v-btn>  -->
       <v-btn 
 v-for="link in links"
 :key="link.title"
 :to="link.url" 
 text><v-icon left>{{ link.icon }}</v-icon>{{ link.title }}</v-btn>

    </v-toolbar-items>

        </v-app-bar>
       
  <v-content>
    <router-view></router-view> 
  </v-content>
  </v-app>

</template>


<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>


<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
            {title:"Login", icon:"mdi-lock", url:"/login"},
            {title:"Registration", icon:"mdi-account", url:"/registration"},
            {title:"Orders", icon:"mdi-bookmark-multiple-outline",url:"/orders"},
            {title:"New ad", icon:"mdi-note-plus-outline", url:"/new"},
            {title:"My ads", icon:"mdi-view-list-outline", url:"/list"}
            ]
        }
    }
}
</script>
	