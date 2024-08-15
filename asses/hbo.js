import { pintarHeader } from "../modulos/header.js";
import { filtrarServicios, pintarServicios } from "../modulos/filter.js";
import { series } from "../modulos/data.js";

pintarHeader("HBO", "hbo");

pintarServicios(filtrarServicios(series, "HBO"), "mainhbo", "HBO");
