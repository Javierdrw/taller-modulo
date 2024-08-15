import { pintarHeader } from "../modulos/header.js";
import { filtrarServicios, pintarServicios } from "../modulos/filter.js";
import { series } from "../modulos/data.js";

pintarHeader("Disney+", "disney+");

pintarServicios(filtrarServicios(series, "Disney+"), "mainDisney+", "Disney+");
