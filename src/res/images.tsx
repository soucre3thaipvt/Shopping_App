/**
* @author soucre3thaipvt
* @flow
*/

const images = {
    BgOrange: require('../assets/images/BgOrange.png'),
    BgOvalShape: require('../assets/images/BgOvalShape.png'),
    BgPurple: require('../assets/images/BgPurple.png'),
    bg_scan: require('../assets/images/bg_scan.png'),
    bg_scan2x: require('../assets/images/bg_scan2x.png'),
    bg_scan3x: require('../assets/images/bg_scan3x.png'),
    Exercise1: require('../assets/images/Exercise1.png'),
    Exercise2: require('../assets/images/Exercise2.png'),
    Exercise3: require('../assets/images/Exercise3.png'),
    Exercise4: require('../assets/images/Exercise4.png'),
    fr_chai: require('../assets/images/fr_chai.png'),
    fr_chai2x: require('../assets/images/fr_chai2x.png'),
    fr_chai3x: require('../assets/images/fr_chai3x.png'),
    fr_chai_lotion: require('../assets/images/fr_chai_lotion.png'),
    fr_chai_lotion2x: require('../assets/images/fr_chai_lotion2x.png'),
    fr_chai_lotion3x: require('../assets/images/fr_chai_lotion3x.png'),
    fr_chai_milk: require('../assets/images/fr_chai_milk.png'),
    fr_chai_milk2x: require('../assets/images/fr_chai_milk2x.png'),
    fr_chai_milk3x: require('../assets/images/fr_chai_milk3x.png'),
    fr_home1: require('../assets/images/fr_home1.png'),
    fr_home12x: require('../assets/images/fr_home12x.png'),
    fr_home13x: require('../assets/images/fr_home13x.png'),
    fr_home2: require('../assets/images/fr_home2.png'),
    fr_home22x: require('../assets/images/fr_home22x.png'),
    fr_home23x: require('../assets/images/fr_home23x.png'),
    fr_home3: require('../assets/images/fr_home3.png'),
    fr_home32x: require('../assets/images/fr_home32x.png'),
    fr_home33x: require('../assets/images/fr_home33x.png'),
    fr_successful: require('../assets/images/fr_successful.png'),
    fr_successful2x: require('../assets/images/fr_successful2x.png'),
    fr_successful3x: require('../assets/images/fr_successful3x.png'),
    ic_alert_orange: require('../assets/images/ic_alert_orange.png'),
    ic_alert_orange2x: require('../assets/images/ic_alert_orange2x.png'),
    ic_alert_orange3x: require('../assets/images/ic_alert_orange3x.png'),
    ic_avt: require('../assets/images/ic_avt.png'),
    ic_avt2x: require('../assets/images/ic_avt2x.png'),
    ic_avt3x: require('../assets/images/ic_avt3x.png'),
    ic_card_input: require('../assets/images/ic_card_input.png'),
    ic_card_input2x: require('../assets/images/ic_card_input2x.png'),
    ic_card_input3x: require('../assets/images/ic_card_input3x.png'),
    ic_card_white: require('../assets/images/ic_card_white.png'),
    ic_card_white2x: require('../assets/images/ic_card_white2x.png'),
    ic_card_white3x: require('../assets/images/ic_card_white3x.png'),
    ic_cart_blue: require('../assets/images/ic_cart_blue.png'),
    ic_cart_blue2x: require('../assets/images/ic_cart_blue2x.png'),
    ic_cart_blue3x: require('../assets/images/ic_cart_blue3x.png'),
    ic_cart_white: require('../assets/images/ic_cart_white.png'),
    ic_cart_white2x: require('../assets/images/ic_cart_white2x.png'),
    ic_cart_white3x: require('../assets/images/ic_cart_white3x.png'),
    ic_check_blue: require('../assets/images/ic_check_blue.png'),
    ic_check_blue2x: require('../assets/images/ic_check_blue2x.png'),
    ic_check_blue3x: require('../assets/images/ic_check_blue3x.png'),
    ic_debduct_orange: require('../assets/images/ic_debduct_orange.png'),
    ic_debduct_orange2x: require('../assets/images/ic_debduct_orange2x.png'),
    ic_debduct_orange3x: require('../assets/images/ic_debduct_orange3x.png'),
    ic_front_black: require('../assets/images/ic_front_black.png'),
    ic_front_black2x: require('../assets/images/ic_front_black2x.png'),
    ic_front_black3x: require('../assets/images/ic_front_black3x.png'),
    ic_front_blue: require('../assets/images/ic_front_blue.png'),
    ic_front_blue2x: require('../assets/images/ic_front_blue2x.png'),
    ic_front_blue3x: require('../assets/images/ic_front_blue3x.png'),
    ic_home_blue: require('../assets/images/ic_home_blue.png'),
    ic_home_blue2x: require('../assets/images/ic_home_blue2x.png'),
    ic_home_blue3x: require('../assets/images/ic_home_blue3x.png'),
    ic_list_blue: require('../assets/images/ic_list_blue.png'),
    ic_list_blue2x: require('../assets/images/ic_list_blue2x.png'),
    ic_list_blue3x: require('../assets/images/ic_list_blue3x.png'),
    ic_master_card_input: require('../assets/images/ic_master_card_input.png'),
    ic_master_card_input2x: require('../assets/images/ic_master_card_input2x.png'),
    ic_master_card_input3x: require('../assets/images/ic_master_card_input3x.png'),
    ic_money_black: require('../assets/images/ic_money_black.png'),
    ic_money_black2x: require('../assets/images/ic_money_black2x.png'),
    ic_money_black3x: require('../assets/images/ic_money_black3x.png'),
    ic_notifi_white: require('../assets/images/ic_notifi_white.png'),
    ic_notifi_white2x: require('../assets/images/ic_notifi_white2x.png'),
    ic_notifi_white3x: require('../assets/images/ic_notifi_white3x.png'),
    ic_plus_orange: require('../assets/images/ic_plus_orange.png'),
    ic_plus_orange2x: require('../assets/images/ic_plus_orange2x.png'),
    ic_plus_orange3x: require('../assets/images/ic_plus_orange3x.png'),
    ic_plus_white: require('../assets/images/ic_plus_white.png'),
    ic_plus_white2x: require('../assets/images/ic_plus_white2x.png'),
    ic_plus_white3x: require('../assets/images/ic_plus_white3x.png'),
    ic_scan_blue: require('../assets/images/ic_scan_blue.png'),
    ic_scan_blue2x: require('../assets/images/ic_scan_blue2x.png'),
    ic_scan_blue3x: require('../assets/images/ic_scan_blue3x.png'),
    ic_scan_white: require('../assets/images/ic_scan_white.png'),
    ic_scan_white2x: require('../assets/images/ic_scan_white2x.png'),
    ic_scan_white3x: require('../assets/images/ic_scan_white3x.png'),
    ic_time_white: require('../assets/images/ic_time_white.png'),
    ic_time_white2x: require('../assets/images/ic_time_white2x.png'),
    ic_time_white3x: require('../assets/images/ic_time_white3x.png'),
    ic_undo_blue: require('../assets/images/ic_undo_blue.png'),
    ic_undo_blue2x: require('../assets/images/ic_undo_blue2x.png'),
    ic_undo_blue3x: require('../assets/images/ic_undo_blue3x.png'),
    ic_undo_orange: require('../assets/images/ic_undo_orange.png'),
    ic_undo_orange2x: require('../assets/images/ic_undo_orange2x.png'),
    ic_undo_orange3x: require('../assets/images/ic_undo_orange3x.png'),
    logo: require('../assets/images/logo.png'),
    logo2x: require('../assets/images/logo2x.png'),
    logo3x: require('../assets/images/logo3x.png'),
    maxresdefault: require('../assets/images/maxresdefault.jpg'),
}
export default images