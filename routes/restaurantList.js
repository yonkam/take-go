class RestaurantModel {

  restaurantList;

  constructor() {
    restaurantList = [];

  }

  getRestaurantList() {
    contact = new Contact("ndokoti", "5", "1090", "bruxelles", "belgique", "0465", "lul ~yahoo");
    restaurant_1 = new Restaurant("Chez Mabah", "Koki", contact, 1);
    this.restaurantList.push(restaurant_1);

    contact2 = new Contact("acacia", "15", "1119", "YAOUNDE", "CMR", "87U", "valyahoo");
    restaurant2 = new Restaurant("Chez lulu", "rizoto", contact, 2);
    this.restaurantList.push(restaurant2);


    return this.restaurantList;
  }


  search(index) {
    return this.restaurantList[index];
  }
}
