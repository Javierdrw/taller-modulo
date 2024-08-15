import { pintarHeader } from "../modulos/header.js";
import { filtrarServicios, pintarServicios } from "../modulos/filter.js";
import { series } from "../modulos/data.js";

pintarHeader("Netflix", "netflix");

pintarServicios(filtrarServicios(series, "Netflix"), "mainNetflix", "Netflix");
