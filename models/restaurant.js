

class Restaurant {

  nomRestaurant;
  menu;
  contact;
  restaurantId;

  contructor(p_nomRestaurant, p_menu, p_contact, p_restaurantId) {
    this.nomRestaurant = p_nomRestaurant;
    this.menu = p_menu;
    this.contact = p_contact;
    this.restaurantId = p_restaurantId;

  }
  getNomRestaurant() {
    return this.nomRestaurant;
  }

  getMenu() {
    return this.menu;
  }

  getContact() {
    return this.contact;
  }

  getRestaurantId() {
    return this.restaurantId;
  }

  setnomRestaurant(p_nomRestaurant) {
    this.nomRestaurant = p_nomRestaurant;
  }

  setMenu(p_menu) {
    this.menu = p_menu;
  }

  setContact(p_contact) {
    this.contact = p_contact;
  }

  setRestaurantId(p_restaurantId) {
    this.restaurantId = p_restaurantId;
  }


  decription() {
    label = "Nom: " + this.nom + "Menu: " + this.menu;

    return label;
  }
}
