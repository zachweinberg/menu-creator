import firebase from "../config/firebase";

export default values => {
  let search_index_tree = {
    address: values.address,
    city: values.city,
    desc: values.description,
    dollars: values.dollars,
    lat: values.latitude,
    logo: values.logo,
    long: values.longitude,
    min_del: values.min_delivery,
    name: values.restaurantName,
    node: values.node,
    off: values.offline,
    phone: values.phone,
    tap: values.tap,
    zip: values.zip
  };

  let restaurants_tree = {
    settings: {
      restaurant_name: values.restaurantName,
      locations: {
        restaurant_1: {
          application_fee: values.application_fee,
          confirmation_method_raw: values.confirmation_method_raw,
          delivery_method: {
            catering: values.dm_catering,
            delivery: values.dm_delivery,
            dine_in: values.dm_dine_in,
            takeout: values.dm_takeout
          },
          email: values.email,
          line1: values.address,
          line2: values.city,
          latitude: values.latitude,
          longitude: values.longitude,
          phone_number: values.phone,
          phone_number_cell: values.phone_number_cell,
          state: values.state,
          tax_rate: values.tax_rate,
          write_to_firebase: values.write_to_firebase,
          zip: values.zip
        }
      },
      theme: {
        item_name: {
          background_color: values.item_name_background_color,
          color: values.item_name_color,
          item_description_color: values.item_name_item_description_color,
          name: values.item_name_name,
          size: values.item_name_size
        },
        menu_section: {
          background_color: values.menu_section_background_color,
          color: values.menu_section_color,
          name: values.menu_section_name,
          size: values.menu_section_size
        }
      }
    },
    schedule: {
      "1": values.sun,
      "2": values.mon,
      "3": values.tues,
      "4": values.wed,
      "5": values.thurs,
      "6": values.fri,
      "7": values.sat,
      delivery_charge: values.delivery_charge,
      minimum_delivery: values.min_delivery,
      delivery_radius: values.delivery_radius,
      estimated_delivery_time: values.estimated_delivery_time,
      special_message: values.special_message
    }
  };

  firebase
    .database()
    .ref(`/new_menu_creator/search-index/1000000/${values.node}`)
    .update(search_index_tree)
    .then(() => {
      console.log("Saved search index tree");
    })
    .catch(e => {
      console.log(e);
    });

  firebase
    .database()
    .ref(`/new_menu_creator/restaurants/${values.node}`)
    .update(restaurants_tree)
    .then(() => {
      console.log("Saved restaurants tree");
    })
    .catch(e => {
      console.log(e);
    });
};
