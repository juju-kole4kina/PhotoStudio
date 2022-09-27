window['FLS'] = true;
//import "../scss/style.scss";

import * as flsFunctions from "./modules/functions.js";
import './modules/dinamic_adapt.js';


flsFunctions.isWebp();
flsFunctions.isMob();
flsFunctions.burger();



import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

flsFunctions.popup();